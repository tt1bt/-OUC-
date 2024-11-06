// ==UserScript==
// @name         中国海洋大学OUC党课自动跳过脚本
// @namespace    http://tampermonkey.net/
// @version      1.1
// @description  Skip video to the end and continue playing.
// @match        *://dxzx.ouc.edu.cn/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    console.log("Tampermonkey script loaded");

    // Check for video element and skip once it's available
    const skipAndPlayVideo = setInterval(() => {
        console.log("Checking for video element...");

        const video = document.querySelector('video'); // 查找页面上的第一个视频元素

        if (video && video.readyState >= 2) { // 确保视频已加载
            console.log("Skipping video to the end and continuing playback");

            // 将视频跳到结尾并继续播放
            video.currentTime = video.duration; // 跳到视频接近末尾位置
            video.play(); // 确保视频继续播放

            clearInterval(skipAndPlayVideo); // 停止轮询
            console.log("Video skipped and playing, interval cleared.");
        }
    }, 200); // 每200毫秒检查一次
})();
