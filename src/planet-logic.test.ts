import test from 'node:test';
import assert from 'node:assert/strict';
import { ORDER, PLANETS, getSideSlots, validateNextPlanet, getOrbitalTrajectory } from './planet-logic.ts';

test('ORDER contains all 8 planets in canonical solar distance sequence', () => {
  assert.deepEqual(ORDER, [
    'mercury',
    'venus',
    'earth',
    'mars',
    'jupiter',
    'saturn',
    'uranus',
    'neptune'
  ]);
});

test('Mercury has Neptune on left and Venus on right', () => {
  const slots = getSideSlots('mercury');
  assert.equal(slots.left, 'neptune');
  assert.equal(slots.right, 'venus');
});

test('Venus has Mercury on left and Earth on right', () => {
  const slots = getSideSlots('venus');
  assert.equal(slots.left, 'mercury');
  assert.equal(slots.right, 'earth');
});

test('Neptune has Uranus on left and Mercury on right', () => {
  const slots = getSideSlots('neptune');
  assert.equal(slots.left, 'uranus');
  assert.equal(slots.right, 'mercury');
});

test('full 8-planet orbital rotation cycle is completely reversible', () => {
  let current: string = 'mercury';
  for (let i = 0; i < ORDER.length; i++) {
    const slots = getSideSlots(current as any);
    current = slots.right;
  }
  assert.equal(current, 'mercury');

  for (let i = 0; i < ORDER.length; i++) {
    const slots = getSideSlots(current as any);
    current = slots.left;
  }
  assert.equal(current, 'mercury');
});

test('all 8 planets have complete stats and educational facts', () => {
  for (const id of ORDER) {
    const p = PLANETS[id];
    assert.ok(p.name, `${id} must have a name`);
    assert.ok(p.type, `${id} must have a planetary type`);
    assert.ok(p.stats.distance, `${id} must have distance`);
    assert.ok(p.stats.orbitPeriod, `${id} must have orbitPeriod`);
    assert.ok(p.stats.gravity, `${id} must have gravity`);
    assert.ok(p.facts.length >= 3, `${id} must have at least 3 facts`);
    assert.ok(p.still.startsWith('https://'), `${id} still URL must be https`);
    assert.ok(p.cutout.startsWith('https://'), `${id} cutout URL must be https`);
  }
});

test('validateNextPlanet validates all 8 planets correctly', () => {
  for (const id of ORDER) {
    assert.equal(validateNextPlanet(id), id);
  }
  assert.equal(validateNextPlanet('pluto'), null);
  assert.equal(validateNextPlanet(''), null);
});

test('getOrbitalTrajectory returns valid solar trajectory metrics for all 8 planets', () => {
  for (const id of ORDER) {
    const traj = getOrbitalTrajectory(id);
    assert.equal(traj.planetId, id);
    assert.ok(traj.semiMajorAxisAU > 0, `${id} AU must be positive`);
    assert.ok(traj.orbitalSpeedKmS > 0, `${id} speed must be positive`);
    assert.ok(traj.periodDays > 0, `${id} period must be positive`);
    assert.ok(traj.themeColor.startsWith('rgba('), `${id} themeColor must be rgba`);
    assert.ok(traj.glowColor.startsWith('rgba('), `${id} glowColor must be rgba`);
    assert.ok(traj.telemetryLabel.includes(id.toUpperCase()), `${id} label must include uppercase name`);
  }

  // Verify Keplerian orbital speed relationship: inner planets orbit faster than outer planets
  const mercurySpeed = getOrbitalTrajectory('mercury').orbitalSpeedKmS;
  const earthSpeed = getOrbitalTrajectory('earth').orbitalSpeedKmS;
  const neptuneSpeed = getOrbitalTrajectory('neptune').orbitalSpeedKmS;
  assert.ok(mercurySpeed > earthSpeed, 'Mercury must orbit faster than Earth');
  assert.ok(earthSpeed > neptuneSpeed, 'Earth must orbit faster than Neptune');
});
