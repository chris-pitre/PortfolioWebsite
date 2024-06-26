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

        vec3 mod289(vec3 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
        vec4 mod289(vec4 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
        vec4 permute(vec4 x) { return mod289(((x * 34.0) + 1.0) * x); }
        vec4 taylorInvSqrt(vec4 r) { return 1.79284291400159 - 0.85373472095314 * r; }

        vec3 fade(vec3 t) {
            return t * t * t * (t * (t * 6.0 - 15.0) + 10.0);
        }

        float noise(vec3 P) {
            vec3 i0 = floor(P);
            vec3 i1 = i0 + vec3(1.0);
            vec3 f0 = fract(P);
            vec3 f1 = f0 - vec3(1.0);
            vec3 f = fade(f0);

            vec4 ix = vec4(i0.x, i1.x, i0.x, i1.x);
            vec4 iy = vec4(i0.y, i0.y, i1.y, i1.y);
            vec4 iz0 = vec4(i0.z);
            vec4 iz1 = vec4(i1.z);

            vec4 ixy = permute(permute(ix) + iy);
            vec4 ixy0 = permute(ixy + iz0);
            vec4 ixy1 = permute(ixy + iz1);

            vec4 gx0 = ixy0 * (1.0 / 7.0);
            vec4 gy0 = fract(floor(gx0) * (1.0 / 7.0)) - 0.5;
            gx0 = fract(gx0);
            vec4 gz0 = vec4(0.5) - abs(gx0) - abs(gy0);
            vec4 sz0 = step(gz0, vec4(0.0));
            gx0 -= sz0 * (step(0.0, gx0) - 0.5);
            gy0 -= sz0 * (step(0.0, gy0) - 0.5);

            vec4 gx1 = ixy1 * (1.0 / 7.0);
            vec4 gy1 = fract(floor(gx1) * (1.0 / 7.0)) - 0.5;
            gx1 = fract(gx1);
            vec4 gz1 = vec4(0.5) - abs(gx1) - abs(gy1);
            vec4 sz1 = step(gz1, vec4(0.0));
            gx1 -= sz1 * (step(0.0, gx1) - 0.5);
            gy1 -= sz1 * (step(0.0, gy1) - 0.5);

            vec3 g000 = vec3(gx0.x, gy0.x, gz0.x);
            vec3 g100 = vec3(gx0.y, gy0.y, gz0.y);
            vec3 g010 = vec3(gx0.z, gy0.z, gz0.z);
            vec3 g110 = vec3(gx0.w, gy0.w, gz0.w);
            vec3 g001 = vec3(gx1.x, gy1.x, gz1.x);
            vec3 g101 = vec3(gx1.y, gy1.y, gz1.y);
            vec3 g011 = vec3(gx1.z, gy1.z, gz1.z);
            vec3 g111 = vec3(gx1.w, gy1.w, gz1.w);

            vec4 norm0 = taylorInvSqrt(vec4(dot(g000, g000), dot(g010, g010), dot(g100, g100), dot(g110, g110)));
            g000 *= norm0.x;
            g010 *= norm0.y;
            g100 *= norm0.z;
            g110 *= norm0.w;
            vec4 norm1 = taylorInvSqrt(vec4(dot(g001, g001), dot(g011, g011), dot(g101, g101), dot(g111, g111)));
            g001 *= norm1.x;
            g011 *= norm1.y;
            g101 *= norm1.z;
            g111 *= norm1.w;

            float n000 = dot(g000, f0);
            float n100 = dot(g100, vec3(f1.x, f0.yz));
            float n010 = dot(g010, vec3(f0.x, f1.y, f0.z));
            float n110 = dot(g110, vec3(f1.xy, f0.z));
            float n001 = dot(g001, vec3(f0.xy, f1.z));
            float n101 = dot(g101, vec3(f1.x, f0.y, f1.z));
            float n011 = dot(g011, vec3(f0.x, f1.yz));
            float n111 = dot(g111, f1);

            vec3 fade_xyz = fade(f);
            vec4 n_z = mix(vec4(n000, n100, n010, n110), vec4(n001, n101, n011, n111), fade_xyz.z);
            vec2 n_yz = mix(n_z.xy, n_z.zw, fade_xyz.y);
            float n_xyz = mix(n_yz.x, n_yz.y, fade_xyz.x); 
            return 2.2 * n_xyz;
        }


        void main() {
            vec2 uv = (2.0 * gl_FragCoord.xy - u_resolution.xy) / u_resolution.y;

            vec2 noiseOffset1 = vec2(noise(vec3(uv, u_time * 0.5)), noise(vec3(uv + 10.0, u_time * 0.5))) * 0.3;
            vec2 noiseOffset2 = vec2(noise(vec3(uv + 20.0, u_time * 0.5)), noise(vec3(uv + 30.0, u_time * 0.5))) * 0.3;
            vec2 noiseOffset3 = vec2(noise(vec3(uv + 40.0, u_time * 0.5)), noise(vec3(uv + 50.0, u_time * 0.5))) * 0.3;

            vec2 c1 = 0.8 * sin(u_time * 1.0 + vec2(4.0, 0.5) + 1.0) + noiseOffset1;
            vec2 c2 = 0.8 * sin(u_time * 1.3 + vec2(1.0, 2.0) + 2.0) + noiseOffset2;
            vec2 c3 = 0.8 * sin(u_time * 1.5 + vec2(0.0, 2.0) + 4.0) + noiseOffset3;

            float v = 0.0;
            v += 1.0 - smoothstep(0.0, 0.7, length(uv-c1)); 
            v += 1.0 - smoothstep(0.0, 0.7, length(uv-c2)); 
            v += 1.0 - smoothstep(0.0, 0.7, length(uv-c3)); 

            vec3 rose600 = vec3(0.6235294117647059, 0.07058823529411765, 0.2235294117647059);
            vec3 rose800 = vec3(0.8823529411764706, 0.11372549019607843, 0.2823529411764706);

            vec3 col = mix(vec3(0.0), rose600, smoothstep(0.01, 1.0, v));
            col = mix(col, rose800, smoothstep(0.3, 1.0, v));

            gl_FragColor = vec4(col, 1.0);
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