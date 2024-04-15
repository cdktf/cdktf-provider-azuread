/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/azuread/2.48.0/docs/resources/invitation
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface InvitationConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.48.0/docs/resources/invitation#id Invitation#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The URL that the user should be redirected to once the invitation is redeemed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.48.0/docs/resources/invitation#redirect_url Invitation#redirect_url}
  */
  readonly redirectUrl: string;
  /**
  * The display name of the user being invited
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.48.0/docs/resources/invitation#user_display_name Invitation#user_display_name}
  */
  readonly userDisplayName?: string;
  /**
  * The email address of the user being invited
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.48.0/docs/resources/invitation#user_email_address Invitation#user_email_address}
  */
  readonly userEmailAddress: string;
  /**
  * The user type of the user being invited
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.48.0/docs/resources/invitation#user_type Invitation#user_type}
  */
  readonly userType?: string;
  /**
  * message block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.48.0/docs/resources/invitation#message Invitation#message}
  */
  readonly message?: InvitationMessage;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.48.0/docs/resources/invitation#timeouts Invitation#timeouts}
  */
  readonly timeouts?: InvitationTimeouts;
}
export interface InvitationMessage {
  /**
  * Email addresses of additional recipients the invitation message should be sent to
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.48.0/docs/resources/invitation#additional_recipients Invitation#additional_recipients}
  */
  readonly additionalRecipients?: string[];
  /**
  * Customized message body you want to send if you don't want to send the default message
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.48.0/docs/resources/invitation#body Invitation#body}
  */
  readonly body?: string;
  /**
  * The language you want to send the default message in
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.48.0/docs/resources/invitation#language Invitation#language}
  */
  readonly language?: string;
}

export function invitationMessageToTerraform(struct?: InvitationMessageOutputReference | InvitationMessage): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    additional_recipients: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.additionalRecipients),
    body: cdktf.stringToTerraform(struct!.body),
    language: cdktf.stringToTerraform(struct!.language),
  }
}


export function invitationMessageToHclTerraform(struct?: InvitationMessageOutputReference | InvitationMessage): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    additional_recipients: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.additionalRecipients),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    body: {
      value: cdktf.stringToHclTerraform(struct!.body),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    language: {
      value: cdktf.stringToHclTerraform(struct!.language),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class InvitationMessageOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): InvitationMessage | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._additionalRecipients !== undefined) {
      hasAnyValues = true;
      internalValueResult.additionalRecipients = this._additionalRecipients;
    }
    if (this._body !== undefined) {
      hasAnyValues = true;
      internalValueResult.body = this._body;
    }
    if (this._language !== undefined) {
      hasAnyValues = true;
      internalValueResult.language = this._language;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: InvitationMessage | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._additionalRecipients = undefined;
      this._body = undefined;
      this._language = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._additionalRecipients = value.additionalRecipients;
      this._body = value.body;
      this._language = value.language;
    }
  }

  // additional_recipients - computed: false, optional: true, required: false
  private _additionalRecipients?: string[]; 
  public get additionalRecipients() {
    return this.getListAttribute('additional_recipients');
  }
  public set additionalRecipients(value: string[]) {
    this._additionalRecipients = value;
  }
  public resetAdditionalRecipients() {
    this._additionalRecipients = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get additionalRecipientsInput() {
    return this._additionalRecipients;
  }

  // body - computed: false, optional: true, required: false
  private _body?: string; 
  public get body() {
    return this.getStringAttribute('body');
  }
  public set body(value: string) {
    this._body = value;
  }
  public resetBody() {
    this._body = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bodyInput() {
    return this._body;
  }

  // language - computed: false, optional: true, required: false
  private _language?: string; 
  public get language() {
    return this.getStringAttribute('language');
  }
  public set language(value: string) {
    this._language = value;
  }
  public resetLanguage() {
    this._language = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get languageInput() {
    return this._language;
  }
}
export interface InvitationTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.48.0/docs/resources/invitation#create Invitation#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.48.0/docs/resources/invitation#delete Invitation#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.48.0/docs/resources/invitation#read Invitation#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.48.0/docs/resources/invitation#update Invitation#update}
  */
  readonly update?: string;
}

export function invitationTimeoutsToTerraform(struct?: InvitationTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    read: cdktf.stringToTerraform(struct!.read),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


export function invitationTimeoutsToHclTerraform(struct?: InvitationTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    create: {
      value: cdktf.stringToHclTerraform(struct!.create),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    delete: {
      value: cdktf.stringToHclTerraform(struct!.delete),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    read: {
      value: cdktf.stringToHclTerraform(struct!.read),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    update: {
      value: cdktf.stringToHclTerraform(struct!.update),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class InvitationTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): InvitationTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    if (this._delete !== undefined) {
      hasAnyValues = true;
      internalValueResult.delete = this._delete;
    }
    if (this._read !== undefined) {
      hasAnyValues = true;
      internalValueResult.read = this._read;
    }
    if (this._update !== undefined) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: InvitationTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
      this._read = undefined;
      this._update = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._create = value.create;
      this._delete = value.delete;
      this._read = value.read;
      this._update = value.update;
    }
  }

  // create - computed: false, optional: true, required: false
  private _create?: string; 
  public get create() {
    return this.getStringAttribute('create');
  }
  public set create(value: string) {
    this._create = value;
  }
  public resetCreate() {
    this._create = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createInput() {
    return this._create;
  }

  // delete - computed: false, optional: true, required: false
  private _delete?: string; 
  public get delete() {
    return this.getStringAttribute('delete');
  }
  public set delete(value: string) {
    this._delete = value;
  }
  public resetDelete() {
    this._delete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteInput() {
    return this._delete;
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

  // update - computed: false, optional: true, required: false
  private _update?: string; 
  public get update() {
    return this.getStringAttribute('update');
  }
  public set update(value: string) {
    this._update = value;
  }
  public resetUpdate() {
    this._update = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateInput() {
    return this._update;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/azuread/2.48.0/docs/resources/invitation azuread_invitation}
*/
export class Invitation extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "azuread_invitation";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Invitation resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Invitation to import
  * @param importFromId The id of the existing Invitation that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/azuread/2.48.0/docs/resources/invitation#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Invitation to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "azuread_invitation", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/azuread/2.48.0/docs/resources/invitation azuread_invitation} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options InvitationConfig
  */
  public constructor(scope: Construct, id: string, config: InvitationConfig) {
    super(scope, id, {
      terraformResourceType: 'azuread_invitation',
      terraformGeneratorMetadata: {
        providerName: 'azuread',
        providerVersion: '2.48.0',
        providerVersionConstraint: '~> 2.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._id = config.id;
    this._redirectUrl = config.redirectUrl;
    this._userDisplayName = config.userDisplayName;
    this._userEmailAddress = config.userEmailAddress;
    this._userType = config.userType;
    this._message.internalValue = config.message;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // redeem_url - computed: true, optional: false, required: false
  public get redeemUrl() {
    return this.getStringAttribute('redeem_url');
  }

  // redirect_url - computed: false, optional: false, required: true
  private _redirectUrl?: string; 
  public get redirectUrl() {
    return this.getStringAttribute('redirect_url');
  }
  public set redirectUrl(value: string) {
    this._redirectUrl = value;
  }
  // Temporarily expose input value. Use with caution.
  public get redirectUrlInput() {
    return this._redirectUrl;
  }

  // user_display_name - computed: false, optional: true, required: false
  private _userDisplayName?: string; 
  public get userDisplayName() {
    return this.getStringAttribute('user_display_name');
  }
  public set userDisplayName(value: string) {
    this._userDisplayName = value;
  }
  public resetUserDisplayName() {
    this._userDisplayName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userDisplayNameInput() {
    return this._userDisplayName;
  }

  // user_email_address - computed: false, optional: false, required: true
  private _userEmailAddress?: string; 
  public get userEmailAddress() {
    return this.getStringAttribute('user_email_address');
  }
  public set userEmailAddress(value: string) {
    this._userEmailAddress = value;
  }
  // Temporarily expose input value. Use with caution.
  public get userEmailAddressInput() {
    return this._userEmailAddress;
  }

  // user_id - computed: true, optional: false, required: false
  public get userId() {
    return this.getStringAttribute('user_id');
  }

  // user_type - computed: false, optional: true, required: false
  private _userType?: string; 
  public get userType() {
    return this.getStringAttribute('user_type');
  }
  public set userType(value: string) {
    this._userType = value;
  }
  public resetUserType() {
    this._userType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userTypeInput() {
    return this._userType;
  }

  // message - computed: false, optional: true, required: false
  private _message = new InvitationMessageOutputReference(this, "message");
  public get message() {
    return this._message;
  }
  public putMessage(value: InvitationMessage) {
    this._message.internalValue = value;
  }
  public resetMessage() {
    this._message.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get messageInput() {
    return this._message.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new InvitationTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: InvitationTimeouts) {
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
      id: cdktf.stringToTerraform(this._id),
      redirect_url: cdktf.stringToTerraform(this._redirectUrl),
      user_display_name: cdktf.stringToTerraform(this._userDisplayName),
      user_email_address: cdktf.stringToTerraform(this._userEmailAddress),
      user_type: cdktf.stringToTerraform(this._userType),
      message: invitationMessageToTerraform(this._message.internalValue),
      timeouts: invitationTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      redirect_url: {
        value: cdktf.stringToHclTerraform(this._redirectUrl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      user_display_name: {
        value: cdktf.stringToHclTerraform(this._userDisplayName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      user_email_address: {
        value: cdktf.stringToHclTerraform(this._userEmailAddress),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      user_type: {
        value: cdktf.stringToHclTerraform(this._userType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      message: {
        value: invitationMessageToHclTerraform(this._message.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "InvitationMessageList",
      },
      timeouts: {
        value: invitationTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "InvitationTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
