const { describe, it } = require('mocha');
const { expect } = require('chai');
const generateLink = require('../helpers/link_generator');

describe('Testing link generator', () => {
  it('Get link of 0 is 1', () => {
    expect(generateLink('0')).equal('1');
  });

  it('Get link of m is Q', () => {
    expect(generateLink('0')).equal('1');
  });

  it('Get link of M is 00', () => {
    expect(generateLink('M')).equal('00');
  });

  it('Get link of MM is 000', () => {
    expect(generateLink('MM')).equal('000');
  });

  it('Get link of 23MM is 2400', () => {
    expect(generateLink('23MM')).equal('2400');
  });
});
