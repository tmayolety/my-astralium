const iconPaths = {
    ahead: 'ahead.svg',
    astern: 'astern.svg',
    airquality: 'air-quality.svg',
    alarms: 'alarms.svg',
    alert: 'alert.svg',
    anchor: 'anchor.svg',
    arrow1bottom: 'arrow-1-bottom.svg',
    arrow1left: 'arrow-1-left.svg',
    arrow1right: 'arrow-1-right.svg',
    arrow1top: 'arrow-1-top.svg',
    batteries: 'batteries.svg',
    bilges: 'bilges.svg',
    boat: 'boat.svg',
    callpoint: 'callpoint.svg',
    callpoint2: 'callpoint2.svg',
    camera: 'camera.svg',
    circle: 'circle.svg',
    close: 'close.svg',
    depth: 'depth.svg',
    depth2: 'depth2.svg',
    door: 'door.svg',
    engines: 'engines.svg',
    fire: 'fire.svg',
    flame: 'flame.svg',
    generators: 'generators.svg',
    hatch: 'hatch.svg',
    hatch2: 'hatch2.svg',
    hatches: 'hatches.svg',
    inclinometer: 'inclinometer.svg',
    menu: 'menu.svg',
    mute: 'mute.svg',
    navLights: 'nav-lights.svg',
    navigation: 'navigation.svg',
    neutral: 'neutral.svg',
    notification: 'notification.svg',
    off: 'off.svg',
    onOff: 'on-off.svg',
    on: 'on.svg',
    options: 'options.svg',
    phoneRotate: 'phone-rotate.svg',
    piston: 'piston.svg',
    playground: 'playground.svg',
    pressure: 'pressure.svg',
    reset: 'reset.svg',
    rpm: 'rpm.svg',
    screenCleaner: 'screen-cleaner.svg',
    screenLock: 'screen-lock.svg',
    screenMode: 'screen-mode.svg',
    settings: 'settings.svg',
    shore: 'shore.svg',
    signalList: 'signal-list.svg',
    singleLine: 'singleline.svg',
    smoke: 'smoke.svg',
    smoke2: 'smoke2.svg',
    smoke3: 'smoke3.svg',
    sogCogDir: 'sog-cog-dir.svg',
    sogCog: 'sog-cog.svg',
    sound: 'sound.svg',
    square: 'square.svg',
    square2: 'square2.svg',
    tanks: 'tanks.svg',
    temperature: 'temperature.svg',
    temps: 'temps.svg',
    triangle: 'triangle.svg',
    tripping: 'tripping.svg',
    turbo: 'turbo.svg',
    userAdmin: 'user-admin.svg',
    userCaptain: 'user-captain.svg',
    userEngineer: 'user-engineer.svg',
    userGuess: 'user-guess.svg',
    userTools: 'user-tools.svg',
    userWorker: 'user-worker.svg',
    user: 'user.svg',
    valve: 'valve.svg',
    various: 'various.svg',
    vibrations: 'vibrations.svg',
    windGauge: 'wind-gauge.svg',
    windroseDir: 'windrose-dir.svg',
    windrose: 'windrose.svg',
};

const iconRegistry = {};

function loadIcons(iconPaths) {
    for (const key in iconPaths) {
        if (iconPaths.hasOwnProperty(key)) {
            loadIcon(key, `@/../framework/3-modules/icons/${iconPaths[key]}`);
        }
    }
}

function loadIcon(key, path) {
    fetch(path)
        .then(response => response.text())
        .then(svgContent => {
            iconRegistry[key] = svgContent;
        })
        .catch(error => {
            console.error(`Error loading SVG (${key}):`, error);
        });
}

loadIcons(iconPaths);


