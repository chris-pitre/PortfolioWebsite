// Importing React
import * as React from 'react'
import Layout from '../components/layout'

const WebGLShader = () => {
    const canvasRef = React.useRef<HTMLCanvasElement>(null);
    React.useEffect(() => {
        const canvas = canvasRef.current;
        if(!canvas){
            return;
        }
        const gl = canvas.getContext('webgl');
        if(!gl){
            return;
        }
        const vertexShaderSource = `
        attribute vec2 position;
        
        void main() {
            gl_Position = vec4(position, 0, 1);
        }
        `;
        const fragmentShaderSource = `
        precision mediump float;

        uniform float u_time;
        uniform vec2 u_resolution;

        void mainImage(out vec4 fragColor, in vec2 fragCoord) {
            vec2 uv = fragCoord / u_resolution.xy;

            float t = u_time * 1.5;
            float t1 = sin(t) * 0.5 + 0.5;
            float t2 = cos(t) * 0.5 + 0.5;

            float r = sin(2.0 * uv.x + t1) * 0.5 + 0.5;
            float g = cos(3.0 * uv.y + t2) * 0.5 + 0.5;
            float b = sin(4.0 * (uv.x + uv.y) + t1 + t2) * 0.5 + 0.5;

            fragColor = vec4(r, g, b, 1.0);
        }

        void main() {
            mainImage(gl_FragColor, gl_FragCoord.xy);
        }
        `;
        const vertexShader = gl.createShader(gl.VERTEX_SHADER);
        if(!vertexShader){
            return;
        }
        gl.shaderSource(vertexShader, vertexShaderSource);
        gl.compileShader(vertexShader);
        const fragmentShader = gl.createShader(gl.FRAGMENT_SHADER);
        if(!fragmentShader){
            return;
        }
        gl.shaderSource(fragmentShader, fragmentShaderSource);
        gl.compileShader(fragmentShader);
        const shaderProgram = gl.createProgram();
        if(!shaderProgram){
            return;
        }
        gl.attachShader(shaderProgram, vertexShader);
        gl.attachShader(shaderProgram, fragmentShader);
        gl.linkProgram(shaderProgram);
        gl.useProgram(shaderProgram);
        const positionAttribute = gl.getAttribLocation(shaderProgram, 'position');
        gl.enableVertexAttribArray(positionAttribute);
        const positionBuffer = gl.createBuffer();
        gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
        const positions = [
          -1, -1,
          -1, 1,
          1, -1,
          1, 1,
        ];
        gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(positions), gl.STATIC_DRAW);
        gl.vertexAttribPointer(positionAttribute, 2, gl.FLOAT, false, 0, 0);
        gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);

        const resolutionUniformLocation = gl.getUniformLocation(shaderProgram, 'u_resolution');
        gl.uniform2f(resolutionUniformLocation, canvas.width, canvas.height);

        const timeUniformLocation = gl.getUniformLocation(shaderProgram, 'u_time');

        let startTime = Date.now();
        function renderFrame() {
            const elapsedTime = (Date.now() - startTime) / 1000;
            gl?.uniform1f(timeUniformLocation, elapsedTime);
            gl?.clearColor(0.0, 0.0, 0.0, 1.0);
            gl?.clear(gl.COLOR_BUFFER_BIT);
            gl?.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
            requestAnimationFrame(renderFrame);
        }

        renderFrame();

    }, []);
    return <div className='grid place-items-center h-screen'><canvas ref={canvasRef} className='w-full h-full col-start-1 row-start-1' /><div className='col-start-1 row-start-1 rounded-md bg-gradient-to-t from-slate-300 to-slate-100'><h1 className='text-5xl mx-10'>Welcome to my Portfolio!</h1></div></div>;
}

const IndexPage = () => {
    return (
        <Layout pageTitle="Home Page">
            <WebGLShader />
        </Layout>
    )
}

export const Head = () => <title>Home Page</title>

export default IndexPage