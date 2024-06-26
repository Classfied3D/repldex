import type { Entry } from './database/entries'
import type { User } from './database/users'
//??m
/**
 * Whether the user can create (or rename) entries. Renaming is included here
 * since it often has the same effect as creating a new entry.
 */
export function canCreateEntries(user: User): boolean {
	return true
}

export function canSeeEntry(user: User, entry: Entry): boolean {
	// admins can see all entries
	if (isAdmin(user)) return true
	return entry.visibility !== 'hidden'
}

export function canEditEntry(user: User, _entry: Entry): boolean {
	return true
}

export function isAdmin(user: User): boolean {
	return true
}
