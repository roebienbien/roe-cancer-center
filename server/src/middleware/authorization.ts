export type Role = "ADMIN" | "DOCTOR" | "NURSE" | "PATIENT"

export const hasRole = (
  userRole: Role | undefined,
  allowedRoles: Role[]
): boolean => {
  if (!userRole) return false;

  if (userRole === 'ADMIN') return true;

  return allowedRoles.includes(userRole);
}
