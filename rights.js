var _ = require('underscore');

var rights = [
  {
    id: 0,
    title: 'Preamble',
    markup: 'Whereas Canada is founded upon principles that recognize the supremacy of God and the rule of law',
    wikipedia: 'http://en.wikipedia.org/wiki/Preamble_to_the_Canadian_Charter_of_Rights_and_Freedoms'
  },
  {
    id: 1,
    title: 'Guarantee of Rights and Freedoms',
    markup: 'The <em>Canadian Charter of Rights and Freedoms</em> guarantees the rights and freedoms set out in it subject only to such reasonable limits prescribed by law as can be demonstrably justified in a free and democratic society.',
    wikipedia: 'http://en.wikipedia.org/wiki/Section_One_of_the_Canadian_Charter_of_Rights_and_Freedoms'
  },
  {
    id: 2,
    title: 'Fundamental Freedoms',
    markup: 'Everyone has the following fundamental freedoms:<ul><li>freedom of conscience and religion;</li><li>freedom of thought, belief, opinion and expression, including freedom of the press and other media of communication;</li><li>freedom of peaceful assembly; and</li><li>freedom of association.</li></ul>',
    wikipedia: 'http://en.wikipedia.org/wiki/Section_Two_of_the_Canadian_Charter_of_Rights_and_Freedoms'
  }
];

module.exports.getRight = function(num, callback) {
  // List all rights
  if (!num) {
    callback(rights);
    return;
  }

  // List single right
  _.find(rights, function(right) {
    if (right.id == num) {
      callback(right);
      return;
    }
  });

  callback(null);
}
