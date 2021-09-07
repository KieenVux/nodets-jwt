enum Role {
  ROLE_ADMIN = "ROLE_ADMIN",
  ROLE_MOD = "ROLE_MOD",
  ROLE_USER = "ROLE_USER",
}

enum Permission {
  POST_READ = "post:read",
  POST_WRITE = "post:write",
  USER_READ = "user:read",
  USER_WRITE = "user:wite",
  MOD_READ = "mod:read",
  MOD_WRITE = "mod:write",
}

export const userRole = {
  role: Role.ROLE_USER,
  permission: [Permission.POST_READ, Permission.MOD_WRITE],
};
export const modRole = {
  role: Role.ROLE_MOD,
  permission: [
    Permission.POST_READ,
    Permission.MOD_WRITE,
    Permission.USER_READ,
    Permission.USER_WRITE,
  ],
};
export const adminRole = {
  role: Role.ROLE_ADMIN,
  permission: [
    Permission.POST_READ,
    Permission.MOD_WRITE,
    Permission.USER_READ,
    Permission.USER_WRITE,
    Permission.MOD_READ,
    Permission.MOD_WRITE,
  ],
};
