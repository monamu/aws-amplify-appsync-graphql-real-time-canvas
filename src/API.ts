/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateCanvasInput = {
  id?: string | null,
  clientId: string,
  data: string,
};

export type ModelCanvasConditionInput = {
  clientId?: ModelStringInput | null,
  data?: ModelStringInput | null,
  and?: Array< ModelCanvasConditionInput | null > | null,
  or?: Array< ModelCanvasConditionInput | null > | null,
  not?: ModelCanvasConditionInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type UpdateCanvasInput = {
  id: string,
  clientId?: string | null,
  data?: string | null,
};

export type DeleteCanvasInput = {
  id?: string | null,
};

export type ModelCanvasFilterInput = {
  id?: ModelIDInput | null,
  clientId?: ModelStringInput | null,
  data?: ModelStringInput | null,
  and?: Array< ModelCanvasFilterInput | null > | null,
  or?: Array< ModelCanvasFilterInput | null > | null,
  not?: ModelCanvasFilterInput | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type CreateCanvasMutationVariables = {
  input: CreateCanvasInput,
  condition?: ModelCanvasConditionInput | null,
};

export type CreateCanvasMutation = {
  createCanvas:  {
    __typename: "Canvas",
    id: string,
    clientId: string,
    data: string,
  } | null,
};

export type UpdateCanvasMutationVariables = {
  input: UpdateCanvasInput,
  condition?: ModelCanvasConditionInput | null,
};

export type UpdateCanvasMutation = {
  updateCanvas:  {
    __typename: "Canvas",
    id: string,
    clientId: string,
    data: string,
  } | null,
};

export type DeleteCanvasMutationVariables = {
  input: DeleteCanvasInput,
  condition?: ModelCanvasConditionInput | null,
};

export type DeleteCanvasMutation = {
  deleteCanvas:  {
    __typename: "Canvas",
    id: string,
    clientId: string,
    data: string,
  } | null,
};

export type GetCanvasQueryVariables = {
  id: string,
};

export type GetCanvasQuery = {
  getCanvas:  {
    __typename: "Canvas",
    id: string,
    clientId: string,
    data: string,
  } | null,
};

export type ListCanvassQueryVariables = {
  filter?: ModelCanvasFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListCanvassQuery = {
  listCanvass:  {
    __typename: "ModelCanvasConnection",
    items:  Array< {
      __typename: "Canvas",
      id: string,
      clientId: string,
      data: string,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type OnCreateCanvasSubscription = {
  onCreateCanvas:  {
    __typename: "Canvas",
    id: string,
    clientId: string,
    data: string,
  } | null,
};

export type OnUpdateCanvasSubscription = {
  onUpdateCanvas:  {
    __typename: "Canvas",
    id: string,
    clientId: string,
    data: string,
  } | null,
};

export type OnDeleteCanvasSubscription = {
  onDeleteCanvas:  {
    __typename: "Canvas",
    id: string,
    clientId: string,
    data: string,
  } | null,
};
