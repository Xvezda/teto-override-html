window.onload = function() {
  let currentScene = 0;
  const scenes = [
    'scene-1', 'scene-1', 'scene-1', 'scene-1',
    'scene-2', 'scene-3', 'scene-2', 'scene-3',
    'scene-2', 'scene-3', 'scene-2', 'scene-3',
    'scene-4', 'scene-4', 'scene-4', 'scene-4',
    'scene-2', 'scene-3', 'scene-2', 'scene-3',
    'scene-2', 'scene-3', 'scene-2', 'scene-3',
    'scene-5', 'scene-6', 'scene-5', 'scene-6',
    'scene-5', 'scene-6', 'scene-5', 'scene-6',
    'scene-2', 'scene-3', 'scene-2', 'scene-3',
    'scene-2', 'scene-3', 'scene-2', 'scene-3',
    'scene-1', 'scene-1', 'scene-1', 'scene-1',
  ];

  const nextScene = () => {
    const scene = scenes[++currentScene % scenes.length];
    if (document.body.className !== scene) {
      document.body.className = scene;
    }
  };

  let interval = setInterval(nextScene, 300 * 4);

  window.addEventListener('keydown', (e) => {
    switch (e.key) {
      case '1': case '2': case '3': case '4': case '5': case '6':
        clearInterval(interval);
        document.body.className = `scene-${e.key}`;
        break;
      case '0':
        setInterval(nextScene, 300 * 4);
        break;
      default:
        break;
    }
  });

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
