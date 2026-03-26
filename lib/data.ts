import fields from '@/data/fields.json';
import institutions from '@/data/institutions.json';
import investigators from '@/data/investigators.json';
import awards from '@/data/awards.json';
import geographies from '@/data/geographies.json';
import agencies from '@/data/agencies.json';
import trends from '@/data/trends.json';
import type { Agency, Award, Field, Geography, Institution, Investigator, Trend } from './types';

export const db = {
  fields: fields as Field[],
  institutions: institutions as Institution[],
  investigators: investigators as Investigator[],
  awards: awards as Award[],
  geographies: geographies as Geography[],
  agencies: agencies as Agency[],
  trends: trends as Trend[],
};

export const currency = (n: number) => new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 }).format(n);
