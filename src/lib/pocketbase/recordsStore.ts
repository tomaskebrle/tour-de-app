import { writable } from 'svelte/store';
import type { RecordsResponse } from './types';

export const recordsStore = writable<RecordsResponse[]>([]);