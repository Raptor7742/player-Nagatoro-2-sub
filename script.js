const playerInstance = jwplayer("player").setup({
  controls: true,
  sharing: true,
  displaytitle: true,
  displaydescription: true,
  abouttext: "",
  aboutlink: "",

  skin: {
    name: "netflix"
  },

  logo: {
    file:
      "",
    link: ""
  },

  captions: {
    color: "#FFF",
    fontSize: 14,
    backgroundOpacity: 0,
    edgeStyle: "raised"
  },

  playlist: [
    {
      title: "Arrête de me chauffer, Nagatoro  - épisode 1 VOSTFR",
      description: "Vous regardez",
      image: "https://cdn.statically.io/gh/Anime-Sama/IMG/img/animes/animes%20wallpapers/ijiranaide-nagatorocarousel.jpg",
      sources: [
        {
          file:
            "",
          label: "1080p",
          default: true
        },
        {
          file:
            "https://m110.syncusercontent.com/mfs-60:e73b7fed5878d47ba1109ac76f5ac03e=============================/p/épisode%202.mp4?allowdd=0&datakey=VXhOnl5BUVAiIEW3Nm171ACExGnsoES6G8yOVtkeTvUcfqMnyOhkYMpjL0sSkq9UwZTHAXm6WLCk4mpzFbG5RwVokWZghtiVPTmYYDQYP2UOo3idSVnZ9cZWGxzheou1Zcbwlk5S5wtFm+10waKadypCRmFh0wwhA0LE6YgiR8MDccsWyUL1N44VGgT+Ci34FyYfeEpk/nxaFpWxf0fIWdUv6CC6zz8MB8aYcLUcmjcXEBELHs4NFMRBJZDwP3R+qT0dGQIeaU+HsHjUZmoFAniCP3CkFhO2w6qLnu4DX1bKiZ2VXh9Cbjzo9x6FzTPZJKG8GrcI7bxzf4XzYTg8kA&engine=ln-2.3.7.3&errurl=A+Kz6A57sGXfOSKpKQImsmhd/LkGcZFTgwHMQbaHy0PDdzzOZdLuCBKSpfJAbQbNcZJLOQmw2HnEweFOiLXFzjuROP9lakY1M8QKBOqs5qD8mli0dv/bBESRNiKHSYKFiUMLJKzt8cNBCSPTCrrd+msNYqcqztO4Ih47PaAMVYID/rriSL1bpQ4DG6urFTBUMo3AdJjL+tohNOZncNu51xH1E1sUuCtC2sxSczNo7bmufBYzm6dtUCrfworK3Pnivdy9YyTfivSydDLUXQoKsafPff5b+n8kgPa7vx4+JHdwyWpqiAT+ezq+IFF8S4V9ZzNTfJ78zhl985Goe7cRZw==&header1=Q29udGVudC1UeXBlOiB2aWRlby9tcDQ&header2=Q29udGVudC1EaXNwb3NpdGlvbjogaW5saW5lOyBmaWxlbmFtZT0iJUMzJUE5cGlzb2RlJTIwMi5tcDQiO2ZpbGVuYW1lKj1VVEYtOCcnJUMzJUE5cGlzb2RlJTIwMi5tcDQ7&ipaddress=1458994159&linkcachekey=c6ab57c90&linkoid=1982860011&mode=101&sharelink_id=9628443630011&timestamp=1672607276184&uagent=220523ca5285197b0fad467e0e72e6907a6c5738&signature=2ba52b666270ec83ccac17dc471a1ad7a0bdc7e0&cachekey=60:e73b7fed5878d47ba1109ac76f5ac03e=============================",
          label: "720p"
        },
        {
          file:
            "",
          label: "480p"
        },
        {
          file:
            "",
          label: "360p"
        },
        {
          file:
            "",
          label: "240p"
        },
        {
          file:
            "",
          label: "160p"
        }
      ],
      
      tracks: [
        {
          file: "",
          kind: "thumbnails"
        }
      ]
    }
  ],
  advertising: {
    client: "vast",
    schedule: [
      {
        offset: "pre",
        tag:
          "https://www.videosprofitnetwork.com/watch.xml?key=d904b92c1f6cc769c59d030320a66f69"
      }
    ]
  }
});

playerInstance.on("ready", function () {
  const buttonId = "download-video-button";
  const iconPath =
    "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCIgd2lkdGg9IjY0IiBoZWlnaHQ9IjY0Ij48cGF0aCBmaWxsPSJub25lIiBkPSJNMCAwaDI0djI0SDB6Ii8+PHBhdGggZD0iTTMgMTloMTh2Mkgzdi0yem0xMC01LjgyOEwxOS4wNzEgNy4xbDEuNDE0IDEuNDE0TDEyIDE3IDMuNTE1IDguNTE1IDQuOTI5IDcuMSAxMSAxMy4xN1YyaDJ2MTEuMTcyeiIgZmlsbD0icmdiYSgyNDcsMjQ3LDI0NywxKSIvPjwvc3ZnPg==";
  const tooltipText = "Download Video";

  // Call the player's `addButton` API method to add the custom button
  playerInstance.addButton(iconPath, tooltipText, buttonClickAction, buttonId);

  // This function is executed when the button is clicked
  function buttonClickAction() {
    const playlistItem = playerInstance.getPlaylistItem();
    const anchor = document.createElement("a");
    const fileUrl = playlistItem.file;
    anchor.setAttribute("href", fileUrl);
    const downloadName = playlistItem.file.split("/").pop();
    anchor.setAttribute("download", downloadName);
    anchor.style.display = "none";
    document.body.appendChild(anchor);
    anchor.click();
    document.body.removeChild(anchor);
  }

  // Move the timeslider in-line with other controls
  const playerContainer = playerInstance.getContainer();
  const buttonContainer = playerContainer.querySelector(".jw-button-container");
  const spacer = buttonContainer.querySelector(".jw-spacer");
  const timeSlider = playerContainer.querySelector(".jw-slider-time");
  buttonContainer.replaceChild(timeSlider, spacer);

  // Detect adblock
  playerInstance.on("adBlock", () => {
    const modal = document.querySelector("div.modal");
    modal.style.display = "flex";

    document
      .getElementById("close")
      .addEventListener("click", () => location.reload());
  });

  // Forward 10 seconds
  const rewindContainer = playerContainer.querySelector(
    ".jw-display-icon-rewind"
  );
  const forwardContainer = rewindContainer.cloneNode(true);
  const forwardDisplayButton = forwardContainer.querySelector(
    ".jw-icon-rewind"
  );
  forwardDisplayButton.style.transform = "scaleX(-1)";
  forwardDisplayButton.ariaLabel = "Forward 10 Seconds";
  const nextContainer = playerContainer.querySelector(".jw-display-icon-next");
  nextContainer.parentNode.insertBefore(forwardContainer, nextContainer);

  // control bar icon
  playerContainer.querySelector(".jw-display-icon-next").style.display = "none"; // hide next button
  const rewindControlBarButton = buttonContainer.querySelector(
    ".jw-icon-rewind"
  );
  const forwardControlBarButton = rewindControlBarButton.cloneNode(true);
  forwardControlBarButton.style.transform = "scaleX(-1)";
  forwardControlBarButton.ariaLabel = "Forward 10 Seconds";
  rewindControlBarButton.parentNode.insertBefore(
    forwardControlBarButton,
    rewindControlBarButton.nextElementSibling
  );

  // add onclick handlers
  [forwardDisplayButton, forwardControlBarButton].forEach((button) => {
    button.onclick = () => {
      playerInstance.seek(playerInstance.getPosition() + 10);
    };
  });
});
