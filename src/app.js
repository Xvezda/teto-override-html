window.onload = function() {
  let currentScene = 0;
  const scenes = [
    'scene-1',
    'scene-1',
    'scene-1',
    'scene-1',
    'scene-2',
    'scene-3',
    'scene-2',
    'scene-3',
    'scene-2',
    'scene-3',
    'scene-2',
    'scene-3',
    'scene-4',
    'scene-4',
    'scene-4',
    'scene-4',
    'scene-2',
    'scene-3',
    'scene-2',
    'scene-3',
    'scene-2',
    'scene-3',
    'scene-2',
    'scene-3',
  ];

  const nextScene = () => {
    currentScene++;
    document.body.className = scenes[currentScene % scenes.length];
  };

  setInterval(nextScene, 300 * 4);

  const audioButton = document.getElementById('audio');
  audioButton.addEventListener('click', () => {
    const audio = document.querySelector('audio');
    if (audio.paused) {
      audio.play();
      audioButton.className = 'unmuted';
    } else {
      audio.pause();
      audioButton.className = 'muted';
    }
  });
};
