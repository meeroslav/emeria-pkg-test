import { buildable } from '@emeria-pkg-test/buildable';

export function childOne(): string {
  return `child-one + ${buildable()}`;
}
