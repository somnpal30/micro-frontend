export interface Rules {

  code: string;
  name: string;
  modules: Module[];
}

export interface Module {
  name: string;
  privileges: Privilege[];
}

export interface Privilege {
  code: string;
  name: string;
  gatewayTypes: string[];
  attributes: Attribute[];
}

export interface Attribute {
  attributeType: string;
  attributeValue: string[]
}

