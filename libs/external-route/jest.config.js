module.exports = {
  name: 'external-route',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/libs/external-route',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
