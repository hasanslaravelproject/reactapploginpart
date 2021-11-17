import { Switch } from '@material-ui/core';
import React from 'react';
import Avatar from 'react-avatar';
import Input from "@material-ui/core/Input";

/*
In order to validate errors on the input field you can
override the editComponent of the Material Table to add a new material-ui Input fields
and use props for validation.
Information on material-ui Input element https://material-ui.com/api/input/
Information on material-table Props https://material-table.com/#/docs/all-props
You can also find an example of an overridden element bellow. Overriding the render method is not a must.
 */
const GetPersonal_Access_TokensColumns = (totalCount) => [
  {title: "Id", field: "id",hidden:true},

  {title: "TokenableType", field: "tokenable_type"},
{title: "TokenableId", field: "tokenable_id"},
{title: "Name", field: "name"},
{title: "Token", field: "token"},
{title: "Abilities", field: "abilities"},
{title: "LastUsedAt", field: "last_used_at",type:"datetime"},
{title: "CreatedAt", field: "created_at",type:"datetime"},
{title: "UpdatedAt", field: "updated_at",type:"datetime"},

]
export default GetPersonal_Access_TokensColumns;
