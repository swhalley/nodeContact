var config = {
    local: {
        mode: 'local',
        port: 8000
    },
    friend: {
        mode: 'staging',
        port: 8080
    }
};

module.exports = function(mode) {
    return config[mode || process.argv[2] || 'local'] || config.local;
};