module.exports = {
  locales: ['cs', 'en', 'de', 'es'],
  catalogs: [
    {
      path: '<rootDir>/locales/{locale}/messages',
      include: [
        '<rootDir>/components/**',
        '<rootDir>/lib/**',
        '<rootDir>/locales/**',
        '<rootDir>/pages/**',
        '<rootDir>/providers/**',
        '<rootDir>/services/**',
        '<rootDir>/utils/**',
      ],
      exclude: ['**/node_modules/**'],
    },
  ],
  format: 'po',
}
