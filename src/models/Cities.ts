import { z } from 'zod';

// Schema for the local_names field
const localNamesSchema = z.record(z.string());

// Schema for each object in the array
export const LocationSchema = z.object({
	name: z.string(),
	local_names: localNamesSchema.optional(),
	lat: z.number(),
	lon: z.number(),
	country: z.string(),
	state: z.string().optional()
});

// Schema for the array of locations
export const LocationsArraySchema = z.array(LocationSchema);

export type LocationsT = z.infer<typeof LocationsArraySchema>;
