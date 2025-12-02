module.exports = {
  repositories: ['neumantm/renovate-reproduction-35428'],
  globalExtends: [
    'docker:pinDigests',
  ],
  printConfig: true,
  packageRules: [
    {
      "matchDatasources": [
        "docker"
      ],
      "pinDigests": false
    },
  ],
};
