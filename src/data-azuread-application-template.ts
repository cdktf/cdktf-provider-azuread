// https://www.terraform.io/docs/providers/azuread/d/application_template.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAzureadApplicationTemplateConfig extends cdktf.TerraformMetaArguments {
  /**
  * The display name for the application template
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/d/application_template.html#display_name DataAzureadApplicationTemplate#display_name}
  */
  readonly displayName?: string;
  /**
  * The application template's ID
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/d/application_template.html#template_id DataAzureadApplicationTemplate#template_id}
  */
  readonly templateId?: string;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/d/application_template.html#timeouts DataAzureadApplicationTemplate#timeouts}
  */
  readonly timeouts?: DataAzureadApplicationTemplateTimeouts;
}
export interface DataAzureadApplicationTemplateTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/d/application_template.html#read DataAzureadApplicationTemplate#read}
  */
  readonly read?: string;
}

function dataAzureadApplicationTemplateTimeoutsToTerraform(struct?: DataAzureadApplicationTemplateTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    read: cdktf.stringToTerraform(struct!.read),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/azuread/d/application_template.html azuread_application_template}
*/
export class DataAzureadApplicationTemplate extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "azuread_application_template";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/azuread/d/application_template.html azuread_application_template} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAzureadApplicationTemplateConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataAzureadApplicationTemplateConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'azuread_application_template',
      terraformGeneratorMetadata: {
        providerName: 'azuread'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._displayName = config.displayName;
    this._templateId = config.templateId;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // categories - computed: true, optional: false, required: false
  public get categories() {
    return this.getListAttribute('categories');
  }

  // display_name - computed: true, optional: true, required: false
  private _displayName?: string;
  public get displayName() {
    return this.getStringAttribute('display_name');
  }
  public set displayName(value: string) {
    this._displayName = value;
  }
  public resetDisplayName() {
    this._displayName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get displayNameInput() {
    return this._displayName
  }

  // homepage_url - computed: true, optional: false, required: false
  public get homepageUrl() {
    return this.getStringAttribute('homepage_url');
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // logo_url - computed: true, optional: false, required: false
  public get logoUrl() {
    return this.getStringAttribute('logo_url');
  }

  // publisher - computed: true, optional: false, required: false
  public get publisher() {
    return this.getStringAttribute('publisher');
  }

  // supported_provisioning_types - computed: true, optional: false, required: false
  public get supportedProvisioningTypes() {
    return this.getListAttribute('supported_provisioning_types');
  }

  // supported_single_sign_on_modes - computed: true, optional: false, required: false
  public get supportedSingleSignOnModes() {
    return this.getListAttribute('supported_single_sign_on_modes');
  }

  // template_id - computed: true, optional: true, required: false
  private _templateId?: string;
  public get templateId() {
    return this.getStringAttribute('template_id');
  }
  public set templateId(value: string) {
    this._templateId = value;
  }
  public resetTemplateId() {
    this._templateId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get templateIdInput() {
    return this._templateId
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: DataAzureadApplicationTemplateTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: DataAzureadApplicationTemplateTimeouts ) {
    this._timeouts = value;
  }
  public resetTimeouts() {
    this._timeouts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      display_name: cdktf.stringToTerraform(this._displayName),
      template_id: cdktf.stringToTerraform(this._templateId),
      timeouts: dataAzureadApplicationTemplateTimeoutsToTerraform(this._timeouts),
    };
  }
}
