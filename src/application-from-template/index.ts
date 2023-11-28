/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/azuread/2.46.0/docs/resources/application_from_template
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ApplicationFromTemplateConfig extends cdktf.TerraformMetaArguments {
  /**
  * The display name for the application
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.46.0/docs/resources/application_from_template#display_name ApplicationFromTemplate#display_name}
  */
  readonly displayName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.46.0/docs/resources/application_from_template#id ApplicationFromTemplate#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The UUID of the template to instantiate for this application
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.46.0/docs/resources/application_from_template#template_id ApplicationFromTemplate#template_id}
  */
  readonly templateId: string;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.46.0/docs/resources/application_from_template#timeouts ApplicationFromTemplate#timeouts}
  */
  readonly timeouts?: ApplicationFromTemplateTimeouts;
}
export interface ApplicationFromTemplateTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.46.0/docs/resources/application_from_template#create ApplicationFromTemplate#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.46.0/docs/resources/application_from_template#delete ApplicationFromTemplate#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.46.0/docs/resources/application_from_template#read ApplicationFromTemplate#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.46.0/docs/resources/application_from_template#update ApplicationFromTemplate#update}
  */
  readonly update?: string;
}

export function applicationFromTemplateTimeoutsToTerraform(struct?: ApplicationFromTemplateTimeouts | cdktf.IResolvable): any {
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

export class ApplicationFromTemplateTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ApplicationFromTemplateTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: ApplicationFromTemplateTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/azuread/2.46.0/docs/resources/application_from_template azuread_application_from_template}
*/
export class ApplicationFromTemplate extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "azuread_application_from_template";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ApplicationFromTemplate resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ApplicationFromTemplate to import
  * @param importFromId The id of the existing ApplicationFromTemplate that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/azuread/2.46.0/docs/resources/application_from_template#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ApplicationFromTemplate to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "azuread_application_from_template", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/azuread/2.46.0/docs/resources/application_from_template azuread_application_from_template} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ApplicationFromTemplateConfig
  */
  public constructor(scope: Construct, id: string, config: ApplicationFromTemplateConfig) {
    super(scope, id, {
      terraformResourceType: 'azuread_application_from_template',
      terraformGeneratorMetadata: {
        providerName: 'azuread',
        providerVersion: '2.46.0',
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
    this._displayName = config.displayName;
    this._id = config.id;
    this._templateId = config.templateId;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // application_id - computed: true, optional: false, required: false
  public get applicationId() {
    return this.getStringAttribute('application_id');
  }

  // application_object_id - computed: true, optional: false, required: false
  public get applicationObjectId() {
    return this.getStringAttribute('application_object_id');
  }

  // display_name - computed: false, optional: false, required: true
  private _displayName?: string; 
  public get displayName() {
    return this.getStringAttribute('display_name');
  }
  public set displayName(value: string) {
    this._displayName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get displayNameInput() {
    return this._displayName;
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

  // service_principal_id - computed: true, optional: false, required: false
  public get servicePrincipalId() {
    return this.getStringAttribute('service_principal_id');
  }

  // service_principal_object_id - computed: true, optional: false, required: false
  public get servicePrincipalObjectId() {
    return this.getStringAttribute('service_principal_object_id');
  }

  // template_id - computed: false, optional: false, required: true
  private _templateId?: string; 
  public get templateId() {
    return this.getStringAttribute('template_id');
  }
  public set templateId(value: string) {
    this._templateId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get templateIdInput() {
    return this._templateId;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new ApplicationFromTemplateTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: ApplicationFromTemplateTimeouts) {
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
      display_name: cdktf.stringToTerraform(this._displayName),
      id: cdktf.stringToTerraform(this._id),
      template_id: cdktf.stringToTerraform(this._templateId),
      timeouts: applicationFromTemplateTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }
}
