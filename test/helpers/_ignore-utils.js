import requireHacker from 'require-hacker';

requireHacker.hook('jpg', () => 'module.exports = ""');
requireHacker.hook('svg', () => 'module.exports = ""');
