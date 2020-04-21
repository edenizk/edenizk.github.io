<template>
    <div id="projects_overlay">
        <div class="close_project_btn" onclick="closeProjectOverlay()">&times;</div>
        <div id="project_head_info">
            <h1 id="project_title"></h1>
            <img id="project_logo" src="" alt="project logo">
            <div id="project_used_tech">Used Technologies:</div>
            <div id="project_languages"></div>
        </div>
        <div id="project_desc"><span>Describtion</span><br><br></div>
        <a id="project_git_link" href="" target="_blank">Source Code</a>
    </div>
</template>

<script>
export default {
  name: 'ProjectsOverlay',
};
</script>
