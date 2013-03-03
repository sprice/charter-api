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
    markup: '<ol><li>Every citizen of Canada has the right to enter, remain in and leave Canada.</li><li>Every citizen of Canada and every person who has the status of a permanent resident of Canada has the right<ol><li>to move to and take up residence in any province; and</li><li>to pursue the gaining of a livelihood in any province.</li></ol></li><li>The rights specified in subsection (2) are subject to<ol><li>any laws or practices of general application in force in a province other than those that discriminate among persons primarily on the basis of province of present or previous residence; and</li><li>any laws providing for reasonable residency requirements as a qualification for the receipt of publicly provided social services.</li></ol></li><li>Subsections (2) and (3) do not preclude any law, program or activity that has as its object the amelioration in a province of conditions of individuals in that province who are socially or economically disadvantaged if the rate of employment in that province is below the rate of employment in Canada.</li></ol>',
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
    markup: 'Everyone has the right not to be subjected to any cruel and unusual treatment or punishment.',
    wikipedia: 'http://en.wikipedia.org/wiki/Section_Twelve_of_the_Canadian_Charter_of_Rights_and_Freedoms'
  },
  {
    id: 13,
    title: 'Legal Rights',
    markup: 'A witness who testifies in any proceedings has the right not to have any incriminating evidence so given used to incriminate that witness in any other proceedings, except in a prosecution for perjury or for the giving of contradictory evidence.',
    wikipedia: 'http://en.wikipedia.org/wiki/Section_Thirteen_of_the_Canadian_Charter_of_Rights_and_Freedoms'
  },
  {
    id: 14,
    title: 'Legal Rights',
    markup: 'A party or witness in any proceedings who does not understand or speak the language in which the proceedings are conducted or who is deaf has the right to the assistance of an interpreter.',
    wikipedia: 'http://en.wikipedia.org/wiki/Section_Fourteen_of_the_Canadian_Charter_of_Rights_and_Freedoms'
  },
  {
    id: 15,
    title: 'Equality Rights',
    markup: '<ol><li>Every individual is equal before and under the law and has the right to the equal protection and equal benefit of the law without discrimination and, in particular, without discrimination based on race, national or ethnic origin, colour, religion, sex, age or mental or physical disability.</li><li>Subsection (1) does not preclude any law, program or activity that has as its object the amelioration of conditions of disadvantaged individuals or groups including those that are disadvantaged because of race, national or ethnic origin, colour, religion, sex, age or mental or physical disability.</li></ol>',
    wikipedia: 'http://en.wikipedia.org/wiki/Section_Fifteen_of_the_Canadian_Charter_of_Rights_and_Freedoms'
  },
  {
    id: 16,
    title: 'Official Languages of Canada',
    markup: '<ol><li>English and French are the official languages of Canada and have the equality of status and equal rights and privileges as to their use in all institutions of the Parliament and government of Canada.</li><li>English and French are the official languages of New Brunswick and have equality of status and equal rights and privileges as to their use in all institutions of the legislature and government of New Brunswick.</li><li>Nothing in this Charter limits the authority of Parliament or a legislature to advance the equality of status or use of English and French.</li></ol>',
    wikipedia: 'http://en.wikipedia.org/wiki/Section_Sixteen_of_the_Canadian_Charter_of_Rights_and_Freedoms'
  },
  {
    id: 16.1,
    title: 'Official Languages of Canada',
    markup: '<ol><li>The English linguistic community and the French linguistic community in New Brunswick have equality of status and equal rights and privileges, including the right to distinct educational institutions and such distinct cultural institutions as are necessary for the preservation and promotion of those communities.</li><li>The role of the legislature and government of New Brunswick to preserve and promote the status, rights and privileges referred to subsection (1) is affirmed.</li></ol>',
    wikipedia: 'http://en.wikipedia.org/wiki/Section_16.1_of_the_Canadian_Charter_of_Rights_and_Freedoms'
  },
  {
    id: 17,
    title: 'Official Languages of Canada',
    markup: '<ol><li>Everyone has the right to use English or French in any debates and other proceedings of Parliament.</li><li>Everyone has the right to use English or French in any debates and other proceedings of the legislature of New Brunswick.</li></ol>',
    wikipedia: 'http://en.wikipedia.org/wiki/Section_Seventeen_of_the_Canadian_Charter_of_Rights_and_Freedoms'
  },
  {
    id: 18,
    title: 'Official Languages of Canada',
    markup: '<ol><li>The statutes, records and journals of Parliament shall be printed and published in English and French and both language versions are equally authoritative.</li><li>The statutes, records and journals of the legislature of New Brunswick shall be printed and published in English and French and both language versions are equally authoritative.</li></ol>',
    wikipedia: 'http://en.wikipedia.org/wiki/Section_Eighteen_of_the_Canadian_Charter_of_Rights_and_Freedoms'
  },
  {
    id: 19,
    title: 'Official Languages of Canada',
    markup: '<ol><li>Either English or French may be used by any person in, or in any pleading in or process issuing from, any court established by Parliament.</li><li>Either English or French may be used by any person in, or in any pleading in or process issuing from, any court of New Brunswick.</li></ol>',
    wikipedia: 'http://en.wikipedia.org/wiki/Section_Nineteen_of_the_Canadian_Charter_of_Rights_and_Freedoms'
  },
  {
    id: 20,
    title: 'Official Languages of Canada',
    markup: '<ol><li>Any member of the public in Canada has the right to communicate with, and to receive available services from, any head or central office of an institution of the Parliament or government of Canada in English or French, and has the same right with respect to any other office of any such institution where<ol><li>there is a significant demand for communications with and services from that office in such language; or</li><li>due to the nature of the office, it is reasonable that communications with and services from that office be available in both English and French.</li></ol></li><li>Any member of the public in New Brunswick has the right to communicate with, and to receive available services from, any office of an institution of the legislature or government of New Brunswick in English or French.</li></ol>',
    wikipedia: 'http://en.wikipedia.org/wiki/Section_Twenty_of_the_Canadian_Charter_of_Rights_and_Freedoms'
  },
  {
    id: 21,
    title: 'Official Languages of Canada',
    markup: 'Nothing in sections 16 to 20 abrogates or derogates from any right, privilege or obligation with respect to the English and French languages, or either of them, that exists or is continued by virtue of any other provision of the Constitution of Canada.',
    wikipedia: 'http://en.wikipedia.org/wiki/Section_Twenty-one_of_the_Canadian_Charter_of_Rights_and_Freedoms'
  },
  {
    id: 22,
    title: 'Official Languages of Canada',
    markup: 'Nothing in sections 16 to 20 abrogates or derogates from any legal or customary right or privilege acquired or enjoyed either before or after the coming into force of this Charter with respect to any language that is not English or French.',
    wikipedia: 'http://en.wikipedia.org/wiki/Section_Twenty-two_of_the_Canadian_Charter_of_Rights_and_Freedoms'
  },
  {
    id: 23,
    title: 'Minority Language Educational Rights',
    markup: '<ol><li>Citizens of Canada<ol><li>whose first language learned and still understood is that of the English or French linguistic minority population of the province in which they reside, or</li><li>who have received their primary school instruction in Canada in English or French and reside in a province where the language in which they received that instruction is the language of the English or French linguistic minority population of the province,</li></ol>have the right to have their children receive primary and secondary school instruction in that language in that province.</li><li>Citizens of Canada of whom any child has received or is receiving primary or secondary school instruction in English or French in Canada, have the right to have all their children receive primary and secondary school instruction in the same language.</li><li>The right of citizens of Canada under subsections (1) and (2) to have their children receive primary and secondary school instruction in the language of the English or French linguistic minority population of a province<ol><li>applies wherever in the province the number of children of citizens who have such a right is sufficient to warrant the provision to them out of public funds of minority language instruction; and</li><li>includes, where the number of those children so warrants, the right to have them receive that instruction in minority language educational facilities provided out of public funds.</li></ol></li></ol>',
    wikipedia: 'http://en.wikipedia.org/wiki/Section_Twenty-three_of_the_Canadian_Charter_of_Rights_and_Freedoms'
  },
  {
    id: 24,
    title: 'Enforcement',
    markup: '<ol><li>Anyone whose rights or freedoms, as guaranteed by this Charter, have been infringed or denied may apply to a court of competent jurisdiction to obtain such remedy as the court considers appropriate and just in the circumstances.</li><li>Where, in proceedings under subsection (1), a court concludes that evidence was obtained in a manner that infringed or denied any rights or freedoms guaranteed by this Charter, the evidence shall be excluded if it is established that, having regard to all the circumstances, the admission of it in the proceedings would bring the administration of justice into disrepute.</li></ol>',
    wikipedia: 'http://en.wikipedia.org/wiki/Section_Twenty-four_of_the_Canadian_Charter_of_Rights_and_Freedoms'
  },
  {
    id: 25,
    title: 'General',
    markup: 'The guarantee in this Charter of certain rights and freedoms shall not be construed as to abrogate or derogate from any aboriginal, treaty or other rights or freedoms that pertain to the aboriginal peoples of Canada including<ul><li>any rights or freedoms that have been recognized by the Royal Proclamation of October 7, 1763; and</li><li>any rights or freedoms that now exist by way of land claims agreements or may be so acquired.</li></ul>',
    wikipedia: 'http://en.wikipedia.org/wiki/Section_Twenty-five_of_the_Canadian_Charter_of_Rights_and_Freedoms'
  },
  {
    id: 26,
    title: 'General',
    markup: 'The guarantee in this Charter of certain rights and freedoms shall not be construed as denying the existence of any other rights or freedoms that exist in Canada.',
    wikipedia: 'http://en.wikipedia.org/wiki/Section_Twenty-six_of_the_Canadian_Charter_of_Rights_and_Freedoms'
  },
  {
    id: 27,
    title: 'General',
    markup: 'This Charter shall be interpreted in a manner consistent with the preservation and enhancement of the multicultural heritage of Canadians.',
    wikipedia: 'http://en.wikipedia.org/wiki/Section_Twenty-seven_of_the_Canadian_Charter_of_Rights_and_Freedoms'
  },
  {
    id: 28,
    title: 'General',
    markup: 'Notwithstanding anything in this Charter, the rights and freedoms referred to in it are guaranteed equally to male and female persons.',
    wikipedia: 'http://en.wikipedia.org/wiki/Section_Twenty-eight_of_the_Canadian_Charter_of_Rights_and_Freedoms'
  },
  {
    id: 29,
    title: 'General',
    markup: 'Nothing in this Charter abrogates or derogates from any rights or privileges guaranteed by or under the Constitution of Canada in respect of denominational, separate or dissentient schools.',
    wikipedia: 'http://en.wikipedia.org/wiki/Section_Twenty-nine_of_the_Canadian_Charter_of_Rights_and_Freedoms'
  },
  {
    id: 30,
    title: 'General',
    markup: 'A reference in this Charter to a province or to the legislative assembly or legislature of a province shall be deemed to include a reference to the Yukon Territory and the Northwest Territories, or to the appropriate legislative authority thereof, as the case may be.',
    wikipedia: 'http://en.wikipedia.org/wiki/Section_Thirty_of_the_Canadian_Charter_of_Rights_and_Freedoms'
  },
  {
    id: 31,
    title: 'General',
    markup: 'Nothing in this Charter extends the legislative powers of any body or authority.',
    wikipedia: 'http://en.wikipedia.org/wiki/Section_Thirty-one_of_the_Canadian_Charter_of_Rights_and_Freedoms'
  },
  {
    id: 32,
    title: 'Application of Charter',
    markup: '<ol><li>This Charter applies<ol><li>to the Parliament and government of Canada in respect of all matters within the authority of Parliament including all matters relating to the Yukon Territory and Northwest Territories; and</li><li>to the legislature and government of each province in respect of all matters within the authority of the legislature of each province.</li></ol></li><li>Notwithstanding subsection (1), section 15 shall not have effect until three years after this section comes into force.</li></ol>',
    wikipedia: 'http://en.wikipedia.org/wiki/Section_Thirty-two_of_the_Canadian_Charter_of_Rights_and_Freedoms'
  },
  {
    id: 33,
    title: 'Application of Charter',
    markup: '<ol><li>Parliament or the legislature of a province may expressly declare in an Act of Parliament or of the legislature, as the case may be, that the Act or a provision thereof shall operate notwithstanding a provision included in section 2 or sections 7 to 15.</li><li>An Act or a provision of an Act in respect of which a declaration made under this section is in effect shall have such operation as it would have but for the provision of this Charter referred to in the declaration.</li><li>A declaration made under subsection (1) shall cease to have effect five years after it comes into force or on such earlier date as may be specified in the declaration.</li><li>Parliament or the legislature of a province may re-enact a declaration made under subsection (1).</li><li>Subsection (3) applies in respect of a re-enactment made under subsection (4).</li></ol>',
    wikipedia: 'http://en.wikipedia.org/wiki/Section_Thirty-three_of_the_Canadian_Charter_of_Rights_and_Freedoms'
  },
  {
    id: 34,
    title: 'Citation',
    markup: 'This Part may be cited as the Canadian Charter of Rights and Freedoms.',
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
