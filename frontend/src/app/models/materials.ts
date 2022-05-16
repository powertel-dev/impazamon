export class Material {
  "description": string;
}

export class MaterialGroup {
  disabled?: boolean;
  "label": string;
  "materials": Material[];
}