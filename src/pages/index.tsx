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

        void main(){
            gl_FragColor = vec4(1.0, 0.0, 0.0, 1.0);
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
    }, []);
    return <div className='grid place-items-center h-screen'><canvas ref={canvasRef} className='w-full h-full' /></div>;
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