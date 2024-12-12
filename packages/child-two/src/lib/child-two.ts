import { buildable } from '@emeria-pkg-test/buildable';

export function childTwo(): string {
  return `child-two + ${buildable()}`;
}
