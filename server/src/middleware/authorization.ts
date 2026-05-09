export type Role = "ADMIN" | "DOCTOR" | "NURSE" | "PATIENT";

export const hasRole = (
  role: Role | undefined,
  allowedRoles: Role[],
): boolean => {
  if (!role) return false;

  if (role === "ADMIN") return true;

  return allowedRoles.includes(role);
};
