import { isNode } from './lib/node';
import { secp256k1Derive } from './lib/secp256k1';
import { ellipticDerive } from './lib/elliptic';

import { checkPrivateKey, checkPublicKey } from './ecdsa';

export async function derive(
  privateKeyA: Buffer,
  publicKeyB: Buffer
): Promise<Buffer> {
  checkPrivateKey(privateKeyA);
  checkPublicKey(publicKeyB);
  return isNode()
    ? secp256k1Derive(publicKeyB, privateKeyA)
    : ellipticDerive(publicKeyB, privateKeyA);
}
