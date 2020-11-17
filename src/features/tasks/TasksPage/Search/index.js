import React from "react";
import { Input } from "../Input";
import { useQueryParameter, useReplaceQueryParameter } from "../queryParameters";
import { searchQueryParamName } from "../searchQueryName";
import { Wrapper } from "./styled";

export const Search = () => {
  const query = useQueryParameter(searchQueryParamName);
  const replaceQueryParameter = useReplaceQueryParameter();

  const onInputChange = ({ target }) => {
    replaceQueryParameter({
      key: searchQueryParamName,
      value: target.value.trim() === "" ? undefined : target.value
    })
  };

  return (
    <Wrapper>
      <Input
        placeholder="Filtruj zadania"
        value={query}
        onChange={onInputChange}
      />
    </Wrapper>
  );
};
