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
  },
  {
    id: 3,
    title: 'Democratic Rights',
    markup: 'Every citizen of Canada has the right to vote in an election of the members of the House of Commons or of a legislative assembly and to be qualified for membership therein.',
    wikipedia: 'http://en.wikipedia.org/wiki/Section_Three_of_the_Canadian_Charter_of_Rights_and_Freedoms'
  },
  {
    id: 4,
    title: 'Democratic Rights',
    markup: '<ol><li>No House of Commons and no legislative assembly shall continue for longer than five years from the date fixed for the return of the writs at a general election of its members.</li><li>In time of real or apprehended war, invasion or insurrection, a House of Commons may be continued by Parliament and a legislative assembly may be continued by the legislature beyond five years if such continuation is not opposed by the votes of more than one-third of the members of the House of Commons or the legislative assembly, as the case may be.</li></ol>',
    wikipedia: 'http://en.wikipedia.org/wiki/Section_Four_of_the_Canadian_Charter_of_Rights_and_Freedoms'
  },
  {
    id: 5,
    title: 'Democratic Rights',
    markup: 'There shall be a sitting of Parliament and of each legislature at least once every twelve months.',
    wikipedia: 'http://en.wikipedia.org/wiki/Section_Five_of_the_Canadian_Charter_of_Rights_and_Freedoms'
  },
  {
    id: 6,
    title: 'Mobility Rights',
    markup: '<ol><li>Every citizen of Canada has the right to enter, remain in and leave Canada.</li><li>Every citizen of Canada and every person who has the status of a permanent resident of Canada has the right<ul><li>to move to and take up residence in any province; and</li><li>to pursue the gaining of a livelihood in any province.</li></ul></li><li>The rights specified in subsection (2) are subject to<ul><li>any laws or practices of general application in force in a province other than those that discriminate among persons primarily on the basis of province of present or previous residence; and</li><li>any laws providing for reasonable residency requirements as a qualification for the receipt of publicly provided social services.</li></ul></li><li>Subsections (2) and (3) do not preclude any law, program or activity that has as its object the amelioration in a province of conditions of individuals in that province who are socially or economically disadvantaged if the rate of employment in that province is below the rate of employment in Canada.</li></ol>',
    wikipedia: 'http://en.wikipedia.org/wiki/Section_Six_of_the_Canadian_Charter_of_Rights_and_Freedoms'
  },
  {
    id: 7,
    title: 'Legal Rights',
    markup: 'Everyone has the right to life, liberty and security of the person and the right not to be deprived thereof except in accordance with the principles of fundamental justice.',
    wikipedia: 'http://en.wikipedia.org/wiki/Section_Seven_of_the_Canadian_Charter_of_Rights_and_Freedoms'
  },
  {
    id: 8,
    title: 'Legal Rights',
    markup: 'Everyone has the right to be secure against unreasonable search or seizure.',
    wikipedia: 'http://en.wikipedia.org/wiki/Section_Eight_of_the_Canadian_Charter_of_Rights_and_Freedoms'
  },
  {
    id: 9,
    title: 'Legal Rights',
    markup: 'Everyone has the right not to be arbitrarily detained or imprisoned.',
    wikipedia: 'http://en.wikipedia.org/wiki/Section_Nine_of_the_Canadian_Charter_of_Rights_and_Freedoms'
  },
  {
    id: 10,
    title: 'Legal Rights',
    markup: 'Everyone has the right on arrest or detention<ul><li>to be informed promptly of the reasons therefore;</li><li>to retain and instruct counsel without delay and to be informed of that right; and</li><li>to have the validity of the detention determined by way of habeas corpus and to be released if the detention is not lawful.</li></ul>',
    wikipedia: 'http://en.wikipedia.org/wiki/Section_Ten_of_the_Canadian_Charter_of_Rights_and_Freedoms'
  },
  {
    id: 11,
    title: 'Legal Rights',
    markup: 'Any person charged with an offence has the right<ul><li>to be informed without unreasonable delay of the specific offence;</li></ul>',
    wikipedia: 'http://en.wikipedia.org/wiki/Section_Eleven_of_the_Canadian_Charter_of_Rights_and_Freedoms'
  },
  {
    id: 12,
    title: 'Legal Rights',
    markup: '',
    wikipedia: 'http://en.wikipedia.org/wiki/Section_Twelve_of_the_Canadian_Charter_of_Rights_and_Freedoms'
  },
  {
    id: 13,
    title: 'Legal Rights',
    markup: '',
    wikipedia: 'http://en.wikipedia.org/wiki/Section_Thirteen_of_the_Canadian_Charter_of_Rights_and_Freedoms'
  },
  {
    id: 14,
    title: 'Legal Rights',
    markup: '',
    wikipedia: 'http://en.wikipedia.org/wiki/Section_Fourteen_of_the_Canadian_Charter_of_Rights_and_Freedoms'
  },
  {
    id: 15,
    title: '',
    markup: '',
    wikipedia: 'http://en.wikipedia.org/wiki/Section_Fifteen_of_the_Canadian_Charter_of_Rights_and_Freedoms'
  },
  {
    id: 16,
    title: '',
    markup: '',
    wikipedia: 'http://en.wikipedia.org/wiki/Section_Sixteen_of_the_Canadian_Charter_of_Rights_and_Freedoms'
  },
  {
    id: 16.1,
    title: '',
    markup: '',
    wikipedia: 'http://en.wikipedia.org/wiki/Section_16.1_of_the_Canadian_Charter_of_Rights_and_Freedoms'
  },
  {
    id: 17,
    title: '',
    markup: '',
    wikipedia: 'http://en.wikipedia.org/wiki/Section_Seventeen_of_the_Canadian_Charter_of_Rights_and_Freedoms'
  },
  {
    id: 18,
    title: '',
    markup: '',
    wikipedia: 'http://en.wikipedia.org/wiki/Section_Eighteen_of_the_Canadian_Charter_of_Rights_and_Freedoms'
  },
  {
    id: 19,
    title: '',
    markup: '',
    wikipedia: 'http://en.wikipedia.org/wiki/Section_Nineteen_of_the_Canadian_Charter_of_Rights_and_Freedoms'
  },
  {
    id: 20,
    title: '',
    markup: '',
    wikipedia: 'http://en.wikipedia.org/wiki/Section_Twenty_of_the_Canadian_Charter_of_Rights_and_Freedoms'
  },
  {
    id: 21,
    title: '',
    markup: '',
    wikipedia: 'http://en.wikipedia.org/wiki/Section_Twenty-one_of_the_Canadian_Charter_of_Rights_and_Freedoms'
  },
  {
    id: 22,
    title: '',
    markup: '',
    wikipedia: 'http://en.wikipedia.org/wiki/Section_Twenty-two_of_the_Canadian_Charter_of_Rights_and_Freedoms'
  },
  {
    id: 23,
    title: '',
    markup: '',
    wikipedia: 'http://en.wikipedia.org/wiki/Section_Twenty-three_of_the_Canadian_Charter_of_Rights_and_Freedoms'
  },
  {
    id: 24,
    title: '',
    markup: '',
    wikipedia: 'http://en.wikipedia.org/wiki/Section_Twenty-four_of_the_Canadian_Charter_of_Rights_and_Freedoms'
  },
  {
    id: 25,
    title: '',
    markup: '',
    wikipedia: 'http://en.wikipedia.org/wiki/Section_Twenty-five_of_the_Canadian_Charter_of_Rights_and_Freedoms'
  },
  {
    id: 26,
    title: '',
    markup: '',
    wikipedia: 'http://en.wikipedia.org/wiki/Section_Twenty-six_of_the_Canadian_Charter_of_Rights_and_Freedoms'
  },
  {
    id: 27,
    title: '',
    markup: '',
    wikipedia: 'http://en.wikipedia.org/wiki/Section_Twenty-seven_of_the_Canadian_Charter_of_Rights_and_Freedoms'
  },
  {
    id: 28,
    title: '',
    markup: '',
    wikipedia: 'http://en.wikipedia.org/wiki/Section_Twenty-eight_of_the_Canadian_Charter_of_Rights_and_Freedoms'
  },
  {
    id: 29,
    title: '',
    markup: '',
    wikipedia: 'http://en.wikipedia.org/wiki/Section_Twenty-nine_of_the_Canadian_Charter_of_Rights_and_Freedoms'
  },
  {
    id: 30,
    title: '',
    markup: '',
    wikipedia: 'http://en.wikipedia.org/wiki/Section_Thirty_of_the_Canadian_Charter_of_Rights_and_Freedoms'
  },
  {
    id: 31,
    title: '',
    markup: '',
    wikipedia: 'http://en.wikipedia.org/wiki/Section_Thirty-one_of_the_Canadian_Charter_of_Rights_and_Freedoms'
  },
  {
    id: 32,
    title: '',
    markup: '',
    wikipedia: 'http://en.wikipedia.org/wiki/Section_Thirty-two_of_the_Canadian_Charter_of_Rights_and_Freedoms'
  },
  {
    id: 33,
    title: '',
    markup: '',
    wikipedia: 'http://en.wikipedia.org/wiki/Section_Thirty-three_of_the_Canadian_Charter_of_Rights_and_Freedoms'
  },
  {
    id: 34,
    title: '',
    markup: '',
    wikipedia: 'http://en.wikipedia.org/wiki/Section_Thirty-four_of_the_Canadian_Charter_of_Rights_and_Freedoms'
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
