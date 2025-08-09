/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/azuread/3.5.0/docs/data-sources/users
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAzureadUsersConfig extends cdktf.TerraformMetaArguments {
  /**
  * The employee identifier assigned to the user by the organisation
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.5.0/docs/data-sources/users#employee_ids DataAzureadUsers#employee_ids}
  */
  readonly employeeIds?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.5.0/docs/data-sources/users#id DataAzureadUsers#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Ignore missing users and return users that were found. The data source will still fail if no users are found
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.5.0/docs/data-sources/users#ignore_missing DataAzureadUsers#ignore_missing}
  */
  readonly ignoreMissing?: boolean | cdktf.IResolvable;
  /**
  * The email aliases of the users
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.5.0/docs/data-sources/users#mail_nicknames DataAzureadUsers#mail_nicknames}
  */
  readonly mailNicknames?: string[];
  /**
  * The SMTP address of the users
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.5.0/docs/data-sources/users#mails DataAzureadUsers#mails}
  */
  readonly mails?: string[];
  /**
  * The object IDs of the users
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.5.0/docs/data-sources/users#object_ids DataAzureadUsers#object_ids}
  */
  readonly objectIds?: string[];
  /**
  * Fetch all users with no filter and return all that were found. The data source will still fail if no users are found.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.5.0/docs/data-sources/users#return_all DataAzureadUsers#return_all}
  */
  readonly returnAll?: boolean | cdktf.IResolvable;
  /**
  * The user principal names (UPNs) of the users
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.5.0/docs/data-sources/users#user_principal_names DataAzureadUsers#user_principal_names}
  */
  readonly userPrincipalNames?: string[];
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.5.0/docs/data-sources/users#timeouts DataAzureadUsers#timeouts}
  */
  readonly timeouts?: DataAzureadUsersTimeouts;
}
export interface DataAzureadUsersUsers {
}

export function dataAzureadUsersUsersToTerraform(struct?: DataAzureadUsersUsers): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAzureadUsersUsersToHclTerraform(struct?: DataAzureadUsersUsers): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAzureadUsersUsersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataAzureadUsersUsers | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAzureadUsersUsers | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // account_enabled - computed: true, optional: false, required: false
  public get accountEnabled() {
    return this.getBooleanAttribute('account_enabled');
  }

  // display_name - computed: true, optional: false, required: false
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // employee_id - computed: true, optional: false, required: false
  public get employeeId() {
    return this.getStringAttribute('employee_id');
  }

  // mail - computed: true, optional: false, required: false
  public get mail() {
    return this.getStringAttribute('mail');
  }

  // mail_nickname - computed: true, optional: false, required: false
  public get mailNickname() {
    return this.getStringAttribute('mail_nickname');
  }

  // object_id - computed: true, optional: false, required: false
  public get objectId() {
    return this.getStringAttribute('object_id');
  }

  // onpremises_immutable_id - computed: true, optional: false, required: false
  public get onpremisesImmutableId() {
    return this.getStringAttribute('onpremises_immutable_id');
  }

  // onpremises_sam_account_name - computed: true, optional: false, required: false
  public get onpremisesSamAccountName() {
    return this.getStringAttribute('onpremises_sam_account_name');
  }

  // onpremises_user_principal_name - computed: true, optional: false, required: false
  public get onpremisesUserPrincipalName() {
    return this.getStringAttribute('onpremises_user_principal_name');
  }

  // usage_location - computed: true, optional: false, required: false
  public get usageLocation() {
    return this.getStringAttribute('usage_location');
  }

  // user_principal_name - computed: true, optional: false, required: false
  public get userPrincipalName() {
    return this.getStringAttribute('user_principal_name');
  }
}

export class DataAzureadUsersUsersList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataAzureadUsersUsersOutputReference {
    return new DataAzureadUsersUsersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAzureadUsersTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.5.0/docs/data-sources/users#read DataAzureadUsers#read}
  */
  readonly read?: string;
}

export function dataAzureadUsersTimeoutsToTerraform(struct?: DataAzureadUsersTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    read: cdktf.stringToTerraform(struct!.read),
  }
}


export function dataAzureadUsersTimeoutsToHclTerraform(struct?: DataAzureadUsersTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    read: {
      value: cdktf.stringToHclTerraform(struct!.read),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataAzureadUsersTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAzureadUsersTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._read !== undefined) {
      hasAnyValues = true;
      internalValueResult.read = this._read;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAzureadUsersTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._read = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._read = value.read;
    }
  }

  // read - computed: false, optional: true, required: false
  private _read?: string; 
  public get read() {
    return this.getStringAttribute('read');
  }
  public set read(value: string) {
    this._read = value;
  }
  public resetRead() {
    this._read = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readInput() {
    return this._read;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/azuread/3.5.0/docs/data-sources/users azuread_users}
*/
export class DataAzureadUsers extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "azuread_users";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataAzureadUsers resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAzureadUsers to import
  * @param importFromId The id of the existing DataAzureadUsers that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/azuread/3.5.0/docs/data-sources/users#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAzureadUsers to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "azuread_users", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/azuread/3.5.0/docs/data-sources/users azuread_users} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAzureadUsersConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataAzureadUsersConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'azuread_users',
      terraformGeneratorMetadata: {
        providerName: 'azuread',
        providerVersion: '3.5.0',
        providerVersionConstraint: '~> 3.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._employeeIds = config.employeeIds;
    this._id = config.id;
    this._ignoreMissing = config.ignoreMissing;
    this._mailNicknames = config.mailNicknames;
    this._mails = config.mails;
    this._objectIds = config.objectIds;
    this._returnAll = config.returnAll;
    this._userPrincipalNames = config.userPrincipalNames;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // employee_ids - computed: true, optional: true, required: false
  private _employeeIds?: string[]; 
  public get employeeIds() {
    return this.getListAttribute('employee_ids');
  }
  public set employeeIds(value: string[]) {
    this._employeeIds = value;
  }
  public resetEmployeeIds() {
    this._employeeIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get employeeIdsInput() {
    return this._employeeIds;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // ignore_missing - computed: false, optional: true, required: false
  private _ignoreMissing?: boolean | cdktf.IResolvable; 
  public get ignoreMissing() {
    return this.getBooleanAttribute('ignore_missing');
  }
  public set ignoreMissing(value: boolean | cdktf.IResolvable) {
    this._ignoreMissing = value;
  }
  public resetIgnoreMissing() {
    this._ignoreMissing = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ignoreMissingInput() {
    return this._ignoreMissing;
  }

  // mail_nicknames - computed: true, optional: true, required: false
  private _mailNicknames?: string[]; 
  public get mailNicknames() {
    return this.getListAttribute('mail_nicknames');
  }
  public set mailNicknames(value: string[]) {
    this._mailNicknames = value;
  }
  public resetMailNicknames() {
    this._mailNicknames = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mailNicknamesInput() {
    return this._mailNicknames;
  }

  // mails - computed: true, optional: true, required: false
  private _mails?: string[]; 
  public get mails() {
    return this.getListAttribute('mails');
  }
  public set mails(value: string[]) {
    this._mails = value;
  }
  public resetMails() {
    this._mails = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mailsInput() {
    return this._mails;
  }

  // object_ids - computed: true, optional: true, required: false
  private _objectIds?: string[]; 
  public get objectIds() {
    return this.getListAttribute('object_ids');
  }
  public set objectIds(value: string[]) {
    this._objectIds = value;
  }
  public resetObjectIds() {
    this._objectIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get objectIdsInput() {
    return this._objectIds;
  }

  // return_all - computed: false, optional: true, required: false
  private _returnAll?: boolean | cdktf.IResolvable; 
  public get returnAll() {
    return this.getBooleanAttribute('return_all');
  }
  public set returnAll(value: boolean | cdktf.IResolvable) {
    this._returnAll = value;
  }
  public resetReturnAll() {
    this._returnAll = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get returnAllInput() {
    return this._returnAll;
  }

  // user_principal_names - computed: true, optional: true, required: false
  private _userPrincipalNames?: string[]; 
  public get userPrincipalNames() {
    return this.getListAttribute('user_principal_names');
  }
  public set userPrincipalNames(value: string[]) {
    this._userPrincipalNames = value;
  }
  public resetUserPrincipalNames() {
    this._userPrincipalNames = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userPrincipalNamesInput() {
    return this._userPrincipalNames;
  }

  // users - computed: true, optional: false, required: false
  private _users = new DataAzureadUsersUsersList(this, "users", false);
  public get users() {
    return this._users;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new DataAzureadUsersTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: DataAzureadUsersTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      employee_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._employeeIds),
      id: cdktf.stringToTerraform(this._id),
      ignore_missing: cdktf.booleanToTerraform(this._ignoreMissing),
      mail_nicknames: cdktf.listMapper(cdktf.stringToTerraform, false)(this._mailNicknames),
      mails: cdktf.listMapper(cdktf.stringToTerraform, false)(this._mails),
      object_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._objectIds),
      return_all: cdktf.booleanToTerraform(this._returnAll),
      user_principal_names: cdktf.listMapper(cdktf.stringToTerraform, false)(this._userPrincipalNames),
      timeouts: dataAzureadUsersTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      employee_ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._employeeIds),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ignore_missing: {
        value: cdktf.booleanToHclTerraform(this._ignoreMissing),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      mail_nicknames: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._mailNicknames),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      mails: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._mails),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      object_ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._objectIds),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      return_all: {
        value: cdktf.booleanToHclTerraform(this._returnAll),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      user_principal_names: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._userPrincipalNames),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      timeouts: {
        value: dataAzureadUsersTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataAzureadUsersTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
