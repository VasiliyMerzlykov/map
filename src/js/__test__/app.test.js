import Team from '../app';

test('Adding character', () => {
  const team = new Team();
  team.add('Daemon');

  expect(team.members.size).toBe(1);
});

test('Adding more than one character', () => {
  const team = new Team();
  team.add('Swordmaster');
  team.add('Daemon');

  expect(team.members.size).toBe(2);
});

test('Mistake: characters are duplicated', () => {
  expect(() => {
    const team = new Team();
    team.add('Daemon');
    team.add('Daemon');
  }).toThrow('The character is already in the team');
});

test('Add all', () => {
  const team = new Team();
  const characters = ['Magician', 'Daemon', 'Bowerman', 'Swordsman'];
  team.addAll([...characters, characters[0]]);
  expect(team.members.size).toBe(4);
});

test('converting to an array', () => {
  const team = new Team();
  const characters = ['Magician', 'Daemon', 'Bowerman', 'Swordsman'];
  team.addAll(characters);
  expect(team.toArray()).toEqual(characters);
});