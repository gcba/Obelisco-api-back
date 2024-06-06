import { ObeliscoVersion } from '../interfaces/versions.interfaces';
import {
  OBELISCO_VERSIONS_1_58,
  OBELISCO_VERSIONS_1_57,
  OBELISCO_VERSIONS_1_56,
  OBELISCO_VERSIONS_1_55,
  OBELISCO_VERSIONS_1_54,
} from './version-number.constant';

export const OBELISCO_VERSIONS: { versions: ObeliscoVersion[] } = {
  versions: [
    ...OBELISCO_VERSIONS_1_58,
    ...OBELISCO_VERSIONS_1_57,
    ...OBELISCO_VERSIONS_1_56,
    ...OBELISCO_VERSIONS_1_55,
    ...OBELISCO_VERSIONS_1_54,
    // ...OBELISCO_VERSIONS_1_53,
    // ...OBELISCO_VERSIONS_1_52,
    // ...OBELISCO_VERSIONS_1_51,
    // ...OBELISCO_VERSIONS_1_50,
    // ...OBELISCO_VERSIONS_1_49,
    // ...OBELISCO_VERSIONS_1_48,
    // ...OBELISCO_VERSIONS_1_47,
    // ...OBELISCO_VERSIONS_1_46,
    // ...OBELISCO_VERSIONS_1_45,
    // ...OBELISCO_VERSIONS_1_44,
    // ...OBELISCO_VERSIONS_1_43,
    // ...OBELISCO_VERSIONS_1_42,
    // ...OBELISCO_VERSIONS_1_41,
    // ...OBELISCO_VERSIONS_1_40,
    // ...OBELISCO_VERSIONS_1_39,
  ].filter((version) => version !== undefined),
};
