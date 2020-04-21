<template>
    <section class="skill-certificate">
        <div class="skill-certificate__skill-wrapper">
            <div class="skill-certificate__text">Skills</div>
            <div class="skill-certificate__skills">
                <div class="coin_text">Flutter/Dart</div>
                <div class="coin"></div>
                <div class="coin"></div>
                <div class="coin"></div>
                <div class="coin"></div>
            </div>
            <div class="skill-certificate__skills">
                <div class="coin_text">HTML/CSS/JS</div>
                <div class="coin"></div>
                <div class="coin"></div>
                <div class="coin"></div>
                <div class="coin"></div>
            </div>
            <div class="skill-certificate__skills">
                <div class="coin_text">React</div>
                <div class="coin"></div>
                <div class="coin"></div>
                <div class="coin"></div>
            </div>
            <div class="skill-certificate__skills">
                <div class="coin_text">Git</div>
                <div class="coin"></div>
                <div class="coin"></div>
                <div class="coin"></div>
            </div>
            <div class="skill-certificate__skills">
                <div class="coin_text">Python</div>
                <div class="coin"></div>
                <div class="coin"></div>
            </div>
            <div class="skill-certificate__skills">
                <div class="coin_text">SQL</div>
                <div class="coin"></div>
                <div class="coin"></div>
            </div>
        </div>
        <img id="green_pipe"
        src="../../assets/materials/skills_certificates/green_pipe.svg" alt="green pipe">

        <div class="skill-certificate__certificates-wrapper">
            <div class="skill-certificate__text">Certificates</div>
            <a target="_blank"
             href="https://www.freecodecamp.org/certification/edenizk/responsive-web-design">
             <img
                    class="skill-certificate__certificate"
                    src="../../assets/materials/certificates/datacamp_certificate5.svg"
                    type="image"
                    aria-label="freecodecamp certificate"></a>
            <a target="_blank"
                href="https://drive.google.com/file/d/1AnP60QV4A7FheGgrNiRIqDConPRAyShK/view?usp=sharing">
                <img
                    class="skill-certificate__certificate"
                    src="../../assets/materials/certificates/datacamp_certificate4.svg"
                    type="image"
                    aria-label="scrum certificate">
            </a>
            <a target="_blank"
                href="https://www.datacamp.com/statement-of-accomplishment/course/2d0975892b23bdbfd3de44028229f3cfbcff121f">
                <img
                    class="skill-certificate__certificate"
                    src="../../assets/materials/certificates/datacamp_certificate1.svg"
                    type="image"
                    aria-label="datacamp certificate 1">
            </a>
            <a target="_blank"
                href="https://www.datacamp.com/statement-of-accomplishment/course/be0ce43746c9cf3d0f0dfd55ef663f810042f8f9">
                <img
                    class="skill-certificate__certificate"
                    src="../../assets/materials/certificates/datacamp_certificate2.svg"
                    type="image"
                    aria-label="datacamp certificate 2">
            </a>
            <a target="_blank"
                href="https://www.datacamp.com/statement-of-accomplishment/course/98327bb4212ce8de6aedac926079fb0c0f537fc4">
                <img
                    class="skill-certificate__certificate"
                    src="../../assets/materials/certificates/datacamp_certificate3.svg"
                    type="image"
                    aria-label="datacamp certificate 3">
            </a>
            <a target="_blank"
                href="https://analytics.google.com/analytics/academy/certificate/vSyxlz4QTmySfxl24TB1KQ">
                <img
                    class="skill-certificate__certificate"
                    src="../../assets/materials/certificates/google_analytics.svg"
                    type="image"
                    aria-label="Google Analytics Certificate">
            </a>
        </div>

        <img class="skill-certificate__stone" src="../../assets/svg/stone.svg" alt="stones">
    </section>
</template>

<script>
export default {
  name: 'SkillCertificate',
};
</script>
