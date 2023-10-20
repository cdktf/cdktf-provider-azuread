# `azuread_application_registration`

Refer to the Terraform Registory for docs: [`azuread_application_registration`](https://registry.terraform.io/providers/hashicorp/azuread/2.44.0/docs/resources/application_registration).

# `applicationRegistration` Submodule <a name="`applicationRegistration` Submodule" id="@cdktf/provider-azuread.applicationRegistration"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ApplicationRegistration <a name="ApplicationRegistration" id="@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azuread/2.44.0/docs/resources/application_registration azuread_application_registration}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azuread-go/azuread/v11/applicationregistration"

applicationregistration.NewApplicationRegistration(scope Construct, id *string, config ApplicationRegistrationConfig) ApplicationRegistration
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azuread.applicationRegistration.ApplicationRegistrationConfig">ApplicationRegistrationConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azuread.applicationRegistration.ApplicationRegistrationConfig">ApplicationRegistrationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.resetGroupMembershipClaims">ResetGroupMembershipClaims</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.resetHomepageUrl">ResetHomepageUrl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.resetImplicitAccessTokenIssuanceEnabled">ResetImplicitAccessTokenIssuanceEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.resetImplicitIdTokenIssuanceEnabled">ResetImplicitIdTokenIssuanceEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.resetLogoutUrl">ResetLogoutUrl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.resetMarketingUrl">ResetMarketingUrl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.resetNotes">ResetNotes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.resetPrivacyStatementUrl">ResetPrivacyStatementUrl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.resetRequestedAccessTokenVersion">ResetRequestedAccessTokenVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.resetServiceManagementReference">ResetServiceManagementReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.resetSignInAudience">ResetSignInAudience</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.resetSupportUrl">ResetSupportUrl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.resetTermsOfServiceUrl">ResetTermsOfServiceUrl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.putTimeouts"></a>

```go
func PutTimeouts(value ApplicationRegistrationTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azuread.applicationRegistration.ApplicationRegistrationTimeouts">ApplicationRegistrationTimeouts</a>

---

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetGroupMembershipClaims` <a name="ResetGroupMembershipClaims" id="@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.resetGroupMembershipClaims"></a>

```go
func ResetGroupMembershipClaims()
```

##### `ResetHomepageUrl` <a name="ResetHomepageUrl" id="@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.resetHomepageUrl"></a>

```go
func ResetHomepageUrl()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.resetId"></a>

```go
func ResetId()
```

##### `ResetImplicitAccessTokenIssuanceEnabled` <a name="ResetImplicitAccessTokenIssuanceEnabled" id="@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.resetImplicitAccessTokenIssuanceEnabled"></a>

```go
func ResetImplicitAccessTokenIssuanceEnabled()
```

##### `ResetImplicitIdTokenIssuanceEnabled` <a name="ResetImplicitIdTokenIssuanceEnabled" id="@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.resetImplicitIdTokenIssuanceEnabled"></a>

```go
func ResetImplicitIdTokenIssuanceEnabled()
```

##### `ResetLogoutUrl` <a name="ResetLogoutUrl" id="@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.resetLogoutUrl"></a>

```go
func ResetLogoutUrl()
```

##### `ResetMarketingUrl` <a name="ResetMarketingUrl" id="@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.resetMarketingUrl"></a>

```go
func ResetMarketingUrl()
```

##### `ResetNotes` <a name="ResetNotes" id="@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.resetNotes"></a>

```go
func ResetNotes()
```

##### `ResetPrivacyStatementUrl` <a name="ResetPrivacyStatementUrl" id="@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.resetPrivacyStatementUrl"></a>

```go
func ResetPrivacyStatementUrl()
```

##### `ResetRequestedAccessTokenVersion` <a name="ResetRequestedAccessTokenVersion" id="@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.resetRequestedAccessTokenVersion"></a>

```go
func ResetRequestedAccessTokenVersion()
```

##### `ResetServiceManagementReference` <a name="ResetServiceManagementReference" id="@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.resetServiceManagementReference"></a>

```go
func ResetServiceManagementReference()
```

##### `ResetSignInAudience` <a name="ResetSignInAudience" id="@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.resetSignInAudience"></a>

```go
func ResetSignInAudience()
```

##### `ResetSupportUrl` <a name="ResetSupportUrl" id="@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.resetSupportUrl"></a>

```go
func ResetSupportUrl()
```

##### `ResetTermsOfServiceUrl` <a name="ResetTermsOfServiceUrl" id="@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.resetTermsOfServiceUrl"></a>

```go
func ResetTermsOfServiceUrl()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a ApplicationRegistration resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-azuread-go/azuread/v11/applicationregistration"

applicationregistration.ApplicationRegistration_IsConstruct(x interface{}) *bool
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-azuread-go/azuread/v11/applicationregistration"

applicationregistration.ApplicationRegistration_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-azuread-go/azuread/v11/applicationregistration"

applicationregistration.ApplicationRegistration_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-azuread-go/azuread/v11/applicationregistration"

applicationregistration.ApplicationRegistration_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a ApplicationRegistration resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the ApplicationRegistration to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing ApplicationRegistration that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azuread/2.44.0/docs/resources/application_registration#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the ApplicationRegistration to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.property.clientId">ClientId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.property.disabledByMicrosoft">DisabledByMicrosoft</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.property.objectId">ObjectId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.property.publisherDomain">PublisherDomain</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azuread.applicationRegistration.ApplicationRegistrationTimeoutsOutputReference">ApplicationRegistrationTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.property.displayNameInput">DisplayNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.property.groupMembershipClaimsInput">GroupMembershipClaimsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.property.homepageUrlInput">HomepageUrlInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.property.implicitAccessTokenIssuanceEnabledInput">ImplicitAccessTokenIssuanceEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.property.implicitIdTokenIssuanceEnabledInput">ImplicitIdTokenIssuanceEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.property.logoutUrlInput">LogoutUrlInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.property.marketingUrlInput">MarketingUrlInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.property.notesInput">NotesInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.property.privacyStatementUrlInput">PrivacyStatementUrlInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.property.requestedAccessTokenVersionInput">RequestedAccessTokenVersionInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.property.serviceManagementReferenceInput">ServiceManagementReferenceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.property.signInAudienceInput">SignInAudienceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.property.supportUrlInput">SupportUrlInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.property.termsOfServiceUrlInput">TermsOfServiceUrlInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.property.groupMembershipClaims">GroupMembershipClaims</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.property.homepageUrl">HomepageUrl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.property.implicitAccessTokenIssuanceEnabled">ImplicitAccessTokenIssuanceEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.property.implicitIdTokenIssuanceEnabled">ImplicitIdTokenIssuanceEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.property.logoutUrl">LogoutUrl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.property.marketingUrl">MarketingUrl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.property.notes">Notes</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.property.privacyStatementUrl">PrivacyStatementUrl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.property.requestedAccessTokenVersion">RequestedAccessTokenVersion</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.property.serviceManagementReference">ServiceManagementReference</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.property.signInAudience">SignInAudience</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.property.supportUrl">SupportUrl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.property.termsOfServiceUrl">TermsOfServiceUrl</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ClientId`<sup>Required</sup> <a name="ClientId" id="@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.property.clientId"></a>

```go
func ClientId() *string
```

- *Type:* *string

---

##### `DisabledByMicrosoft`<sup>Required</sup> <a name="DisabledByMicrosoft" id="@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.property.disabledByMicrosoft"></a>

```go
func DisabledByMicrosoft() *string
```

- *Type:* *string

---

##### `ObjectId`<sup>Required</sup> <a name="ObjectId" id="@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.property.objectId"></a>

```go
func ObjectId() *string
```

- *Type:* *string

---

##### `PublisherDomain`<sup>Required</sup> <a name="PublisherDomain" id="@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.property.publisherDomain"></a>

```go
func PublisherDomain() *string
```

- *Type:* *string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.property.timeouts"></a>

```go
func Timeouts() ApplicationRegistrationTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azuread.applicationRegistration.ApplicationRegistrationTimeoutsOutputReference">ApplicationRegistrationTimeoutsOutputReference</a>

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.property.displayNameInput"></a>

```go
func DisplayNameInput() *string
```

- *Type:* *string

---

##### `GroupMembershipClaimsInput`<sup>Optional</sup> <a name="GroupMembershipClaimsInput" id="@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.property.groupMembershipClaimsInput"></a>

```go
func GroupMembershipClaimsInput() *[]*string
```

- *Type:* *[]*string

---

##### `HomepageUrlInput`<sup>Optional</sup> <a name="HomepageUrlInput" id="@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.property.homepageUrlInput"></a>

```go
func HomepageUrlInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `ImplicitAccessTokenIssuanceEnabledInput`<sup>Optional</sup> <a name="ImplicitAccessTokenIssuanceEnabledInput" id="@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.property.implicitAccessTokenIssuanceEnabledInput"></a>

```go
func ImplicitAccessTokenIssuanceEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `ImplicitIdTokenIssuanceEnabledInput`<sup>Optional</sup> <a name="ImplicitIdTokenIssuanceEnabledInput" id="@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.property.implicitIdTokenIssuanceEnabledInput"></a>

```go
func ImplicitIdTokenIssuanceEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `LogoutUrlInput`<sup>Optional</sup> <a name="LogoutUrlInput" id="@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.property.logoutUrlInput"></a>

```go
func LogoutUrlInput() *string
```

- *Type:* *string

---

##### `MarketingUrlInput`<sup>Optional</sup> <a name="MarketingUrlInput" id="@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.property.marketingUrlInput"></a>

```go
func MarketingUrlInput() *string
```

- *Type:* *string

---

##### `NotesInput`<sup>Optional</sup> <a name="NotesInput" id="@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.property.notesInput"></a>

```go
func NotesInput() *string
```

- *Type:* *string

---

##### `PrivacyStatementUrlInput`<sup>Optional</sup> <a name="PrivacyStatementUrlInput" id="@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.property.privacyStatementUrlInput"></a>

```go
func PrivacyStatementUrlInput() *string
```

- *Type:* *string

---

##### `RequestedAccessTokenVersionInput`<sup>Optional</sup> <a name="RequestedAccessTokenVersionInput" id="@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.property.requestedAccessTokenVersionInput"></a>

```go
func RequestedAccessTokenVersionInput() *f64
```

- *Type:* *f64

---

##### `ServiceManagementReferenceInput`<sup>Optional</sup> <a name="ServiceManagementReferenceInput" id="@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.property.serviceManagementReferenceInput"></a>

```go
func ServiceManagementReferenceInput() *string
```

- *Type:* *string

---

##### `SignInAudienceInput`<sup>Optional</sup> <a name="SignInAudienceInput" id="@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.property.signInAudienceInput"></a>

```go
func SignInAudienceInput() *string
```

- *Type:* *string

---

##### `SupportUrlInput`<sup>Optional</sup> <a name="SupportUrlInput" id="@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.property.supportUrlInput"></a>

```go
func SupportUrlInput() *string
```

- *Type:* *string

---

##### `TermsOfServiceUrlInput`<sup>Optional</sup> <a name="TermsOfServiceUrlInput" id="@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.property.termsOfServiceUrlInput"></a>

```go
func TermsOfServiceUrlInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `GroupMembershipClaims`<sup>Required</sup> <a name="GroupMembershipClaims" id="@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.property.groupMembershipClaims"></a>

```go
func GroupMembershipClaims() *[]*string
```

- *Type:* *[]*string

---

##### `HomepageUrl`<sup>Required</sup> <a name="HomepageUrl" id="@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.property.homepageUrl"></a>

```go
func HomepageUrl() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `ImplicitAccessTokenIssuanceEnabled`<sup>Required</sup> <a name="ImplicitAccessTokenIssuanceEnabled" id="@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.property.implicitAccessTokenIssuanceEnabled"></a>

```go
func ImplicitAccessTokenIssuanceEnabled() interface{}
```

- *Type:* interface{}

---

##### `ImplicitIdTokenIssuanceEnabled`<sup>Required</sup> <a name="ImplicitIdTokenIssuanceEnabled" id="@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.property.implicitIdTokenIssuanceEnabled"></a>

```go
func ImplicitIdTokenIssuanceEnabled() interface{}
```

- *Type:* interface{}

---

##### `LogoutUrl`<sup>Required</sup> <a name="LogoutUrl" id="@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.property.logoutUrl"></a>

```go
func LogoutUrl() *string
```

- *Type:* *string

---

##### `MarketingUrl`<sup>Required</sup> <a name="MarketingUrl" id="@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.property.marketingUrl"></a>

```go
func MarketingUrl() *string
```

- *Type:* *string

---

##### `Notes`<sup>Required</sup> <a name="Notes" id="@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.property.notes"></a>

```go
func Notes() *string
```

- *Type:* *string

---

##### `PrivacyStatementUrl`<sup>Required</sup> <a name="PrivacyStatementUrl" id="@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.property.privacyStatementUrl"></a>

```go
func PrivacyStatementUrl() *string
```

- *Type:* *string

---

##### `RequestedAccessTokenVersion`<sup>Required</sup> <a name="RequestedAccessTokenVersion" id="@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.property.requestedAccessTokenVersion"></a>

```go
func RequestedAccessTokenVersion() *f64
```

- *Type:* *f64

---

##### `ServiceManagementReference`<sup>Required</sup> <a name="ServiceManagementReference" id="@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.property.serviceManagementReference"></a>

```go
func ServiceManagementReference() *string
```

- *Type:* *string

---

##### `SignInAudience`<sup>Required</sup> <a name="SignInAudience" id="@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.property.signInAudience"></a>

```go
func SignInAudience() *string
```

- *Type:* *string

---

##### `SupportUrl`<sup>Required</sup> <a name="SupportUrl" id="@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.property.supportUrl"></a>

```go
func SupportUrl() *string
```

- *Type:* *string

---

##### `TermsOfServiceUrl`<sup>Required</sup> <a name="TermsOfServiceUrl" id="@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.property.termsOfServiceUrl"></a>

```go
func TermsOfServiceUrl() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### ApplicationRegistrationConfig <a name="ApplicationRegistrationConfig" id="@cdktf/provider-azuread.applicationRegistration.ApplicationRegistrationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azuread.applicationRegistration.ApplicationRegistrationConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azuread-go/azuread/v11/applicationregistration"

&applicationregistration.ApplicationRegistrationConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	DisplayName: *string,
	Description: *string,
	GroupMembershipClaims: *[]*string,
	HomepageUrl: *string,
	Id: *string,
	ImplicitAccessTokenIssuanceEnabled: interface{},
	ImplicitIdTokenIssuanceEnabled: interface{},
	LogoutUrl: *string,
	MarketingUrl: *string,
	Notes: *string,
	PrivacyStatementUrl: *string,
	RequestedAccessTokenVersion: *f64,
	ServiceManagementReference: *string,
	SignInAudience: *string,
	SupportUrl: *string,
	TermsOfServiceUrl: *string,
	Timeouts: github.com/cdktf/cdktf-provider-azuread-go/azuread/v11.applicationRegistration.ApplicationRegistrationTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.applicationRegistration.ApplicationRegistrationConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationRegistration.ApplicationRegistrationConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationRegistration.ApplicationRegistrationConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationRegistration.ApplicationRegistrationConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationRegistration.ApplicationRegistrationConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationRegistration.ApplicationRegistrationConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationRegistration.ApplicationRegistrationConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationRegistration.ApplicationRegistrationConfig.property.displayName">DisplayName</a></code> | <code>*string</code> | The display name for the application. |
| <code><a href="#@cdktf/provider-azuread.applicationRegistration.ApplicationRegistrationConfig.property.description">Description</a></code> | <code>*string</code> | Description of the application as shown to end users. |
| <code><a href="#@cdktf/provider-azuread.applicationRegistration.ApplicationRegistrationConfig.property.groupMembershipClaims">GroupMembershipClaims</a></code> | <code>*[]*string</code> | Configures the `groups` claim that the app expects issued in a user or OAuth access token. |
| <code><a href="#@cdktf/provider-azuread.applicationRegistration.ApplicationRegistrationConfig.property.homepageUrl">HomepageUrl</a></code> | <code>*string</code> | URL of the home page for the application. |
| <code><a href="#@cdktf/provider-azuread.applicationRegistration.ApplicationRegistrationConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.44.0/docs/resources/application_registration#id ApplicationRegistration#id}. |
| <code><a href="#@cdktf/provider-azuread.applicationRegistration.ApplicationRegistrationConfig.property.implicitAccessTokenIssuanceEnabled">ImplicitAccessTokenIssuanceEnabled</a></code> | <code>interface{}</code> | Whether this application can request an access token using OAuth implicit flow. |
| <code><a href="#@cdktf/provider-azuread.applicationRegistration.ApplicationRegistrationConfig.property.implicitIdTokenIssuanceEnabled">ImplicitIdTokenIssuanceEnabled</a></code> | <code>interface{}</code> | Whether this application can request an ID token using OAuth implicit flow. |
| <code><a href="#@cdktf/provider-azuread.applicationRegistration.ApplicationRegistrationConfig.property.logoutUrl">LogoutUrl</a></code> | <code>*string</code> | URL of the logout page for the application, where the session is cleared for single sign-out. |
| <code><a href="#@cdktf/provider-azuread.applicationRegistration.ApplicationRegistrationConfig.property.marketingUrl">MarketingUrl</a></code> | <code>*string</code> | URL of the marketing page for the application. |
| <code><a href="#@cdktf/provider-azuread.applicationRegistration.ApplicationRegistrationConfig.property.notes">Notes</a></code> | <code>*string</code> | User-specified notes relevant for the management of the application. |
| <code><a href="#@cdktf/provider-azuread.applicationRegistration.ApplicationRegistrationConfig.property.privacyStatementUrl">PrivacyStatementUrl</a></code> | <code>*string</code> | URL of the privacy statement for the application. |
| <code><a href="#@cdktf/provider-azuread.applicationRegistration.ApplicationRegistrationConfig.property.requestedAccessTokenVersion">RequestedAccessTokenVersion</a></code> | <code>*f64</code> | The access token version expected by this resource. |
| <code><a href="#@cdktf/provider-azuread.applicationRegistration.ApplicationRegistrationConfig.property.serviceManagementReference">ServiceManagementReference</a></code> | <code>*string</code> | References application or contact information from a service or asset management database. |
| <code><a href="#@cdktf/provider-azuread.applicationRegistration.ApplicationRegistrationConfig.property.signInAudience">SignInAudience</a></code> | <code>*string</code> | The Microsoft account types that are supported for the current application. |
| <code><a href="#@cdktf/provider-azuread.applicationRegistration.ApplicationRegistrationConfig.property.supportUrl">SupportUrl</a></code> | <code>*string</code> | URL of the support page for the application. |
| <code><a href="#@cdktf/provider-azuread.applicationRegistration.ApplicationRegistrationConfig.property.termsOfServiceUrl">TermsOfServiceUrl</a></code> | <code>*string</code> | URL of the terms of service statement for the application. |
| <code><a href="#@cdktf/provider-azuread.applicationRegistration.ApplicationRegistrationConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azuread.applicationRegistration.ApplicationRegistrationTimeouts">ApplicationRegistrationTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azuread.applicationRegistration.ApplicationRegistrationConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azuread.applicationRegistration.ApplicationRegistrationConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azuread.applicationRegistration.ApplicationRegistrationConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azuread.applicationRegistration.ApplicationRegistrationConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azuread.applicationRegistration.ApplicationRegistrationConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azuread.applicationRegistration.ApplicationRegistrationConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azuread.applicationRegistration.ApplicationRegistrationConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktf/provider-azuread.applicationRegistration.ApplicationRegistrationConfig.property.displayName"></a>

```go
DisplayName *string
```

- *Type:* *string

The display name for the application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.44.0/docs/resources/application_registration#display_name ApplicationRegistration#display_name}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-azuread.applicationRegistration.ApplicationRegistrationConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

Description of the application as shown to end users.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.44.0/docs/resources/application_registration#description ApplicationRegistration#description}

---

##### `GroupMembershipClaims`<sup>Optional</sup> <a name="GroupMembershipClaims" id="@cdktf/provider-azuread.applicationRegistration.ApplicationRegistrationConfig.property.groupMembershipClaims"></a>

```go
GroupMembershipClaims *[]*string
```

- *Type:* *[]*string

Configures the `groups` claim that the app expects issued in a user or OAuth access token.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.44.0/docs/resources/application_registration#group_membership_claims ApplicationRegistration#group_membership_claims}

---

##### `HomepageUrl`<sup>Optional</sup> <a name="HomepageUrl" id="@cdktf/provider-azuread.applicationRegistration.ApplicationRegistrationConfig.property.homepageUrl"></a>

```go
HomepageUrl *string
```

- *Type:* *string

URL of the home page for the application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.44.0/docs/resources/application_registration#homepage_url ApplicationRegistration#homepage_url}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-azuread.applicationRegistration.ApplicationRegistrationConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.44.0/docs/resources/application_registration#id ApplicationRegistration#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ImplicitAccessTokenIssuanceEnabled`<sup>Optional</sup> <a name="ImplicitAccessTokenIssuanceEnabled" id="@cdktf/provider-azuread.applicationRegistration.ApplicationRegistrationConfig.property.implicitAccessTokenIssuanceEnabled"></a>

```go
ImplicitAccessTokenIssuanceEnabled interface{}
```

- *Type:* interface{}

Whether this application can request an access token using OAuth implicit flow.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.44.0/docs/resources/application_registration#implicit_access_token_issuance_enabled ApplicationRegistration#implicit_access_token_issuance_enabled}

---

##### `ImplicitIdTokenIssuanceEnabled`<sup>Optional</sup> <a name="ImplicitIdTokenIssuanceEnabled" id="@cdktf/provider-azuread.applicationRegistration.ApplicationRegistrationConfig.property.implicitIdTokenIssuanceEnabled"></a>

```go
ImplicitIdTokenIssuanceEnabled interface{}
```

- *Type:* interface{}

Whether this application can request an ID token using OAuth implicit flow.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.44.0/docs/resources/application_registration#implicit_id_token_issuance_enabled ApplicationRegistration#implicit_id_token_issuance_enabled}

---

##### `LogoutUrl`<sup>Optional</sup> <a name="LogoutUrl" id="@cdktf/provider-azuread.applicationRegistration.ApplicationRegistrationConfig.property.logoutUrl"></a>

```go
LogoutUrl *string
```

- *Type:* *string

URL of the logout page for the application, where the session is cleared for single sign-out.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.44.0/docs/resources/application_registration#logout_url ApplicationRegistration#logout_url}

---

##### `MarketingUrl`<sup>Optional</sup> <a name="MarketingUrl" id="@cdktf/provider-azuread.applicationRegistration.ApplicationRegistrationConfig.property.marketingUrl"></a>

```go
MarketingUrl *string
```

- *Type:* *string

URL of the marketing page for the application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.44.0/docs/resources/application_registration#marketing_url ApplicationRegistration#marketing_url}

---

##### `Notes`<sup>Optional</sup> <a name="Notes" id="@cdktf/provider-azuread.applicationRegistration.ApplicationRegistrationConfig.property.notes"></a>

```go
Notes *string
```

- *Type:* *string

User-specified notes relevant for the management of the application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.44.0/docs/resources/application_registration#notes ApplicationRegistration#notes}

---

##### `PrivacyStatementUrl`<sup>Optional</sup> <a name="PrivacyStatementUrl" id="@cdktf/provider-azuread.applicationRegistration.ApplicationRegistrationConfig.property.privacyStatementUrl"></a>

```go
PrivacyStatementUrl *string
```

- *Type:* *string

URL of the privacy statement for the application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.44.0/docs/resources/application_registration#privacy_statement_url ApplicationRegistration#privacy_statement_url}

---

##### `RequestedAccessTokenVersion`<sup>Optional</sup> <a name="RequestedAccessTokenVersion" id="@cdktf/provider-azuread.applicationRegistration.ApplicationRegistrationConfig.property.requestedAccessTokenVersion"></a>

```go
RequestedAccessTokenVersion *f64
```

- *Type:* *f64

The access token version expected by this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.44.0/docs/resources/application_registration#requested_access_token_version ApplicationRegistration#requested_access_token_version}

---

##### `ServiceManagementReference`<sup>Optional</sup> <a name="ServiceManagementReference" id="@cdktf/provider-azuread.applicationRegistration.ApplicationRegistrationConfig.property.serviceManagementReference"></a>

```go
ServiceManagementReference *string
```

- *Type:* *string

References application or contact information from a service or asset management database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.44.0/docs/resources/application_registration#service_management_reference ApplicationRegistration#service_management_reference}

---

##### `SignInAudience`<sup>Optional</sup> <a name="SignInAudience" id="@cdktf/provider-azuread.applicationRegistration.ApplicationRegistrationConfig.property.signInAudience"></a>

```go
SignInAudience *string
```

- *Type:* *string

The Microsoft account types that are supported for the current application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.44.0/docs/resources/application_registration#sign_in_audience ApplicationRegistration#sign_in_audience}

---

##### `SupportUrl`<sup>Optional</sup> <a name="SupportUrl" id="@cdktf/provider-azuread.applicationRegistration.ApplicationRegistrationConfig.property.supportUrl"></a>

```go
SupportUrl *string
```

- *Type:* *string

URL of the support page for the application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.44.0/docs/resources/application_registration#support_url ApplicationRegistration#support_url}

---

##### `TermsOfServiceUrl`<sup>Optional</sup> <a name="TermsOfServiceUrl" id="@cdktf/provider-azuread.applicationRegistration.ApplicationRegistrationConfig.property.termsOfServiceUrl"></a>

```go
TermsOfServiceUrl *string
```

- *Type:* *string

URL of the terms of service statement for the application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.44.0/docs/resources/application_registration#terms_of_service_url ApplicationRegistration#terms_of_service_url}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-azuread.applicationRegistration.ApplicationRegistrationConfig.property.timeouts"></a>

```go
Timeouts ApplicationRegistrationTimeouts
```

- *Type:* <a href="#@cdktf/provider-azuread.applicationRegistration.ApplicationRegistrationTimeouts">ApplicationRegistrationTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.44.0/docs/resources/application_registration#timeouts ApplicationRegistration#timeouts}

---

### ApplicationRegistrationTimeouts <a name="ApplicationRegistrationTimeouts" id="@cdktf/provider-azuread.applicationRegistration.ApplicationRegistrationTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azuread.applicationRegistration.ApplicationRegistrationTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azuread-go/azuread/v11/applicationregistration"

&applicationregistration.ApplicationRegistrationTimeouts {
	Create: *string,
	Delete: *string,
	Read: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.applicationRegistration.ApplicationRegistrationTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.44.0/docs/resources/application_registration#create ApplicationRegistration#create}. |
| <code><a href="#@cdktf/provider-azuread.applicationRegistration.ApplicationRegistrationTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.44.0/docs/resources/application_registration#delete ApplicationRegistration#delete}. |
| <code><a href="#@cdktf/provider-azuread.applicationRegistration.ApplicationRegistrationTimeouts.property.read">Read</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.44.0/docs/resources/application_registration#read ApplicationRegistration#read}. |
| <code><a href="#@cdktf/provider-azuread.applicationRegistration.ApplicationRegistrationTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.44.0/docs/resources/application_registration#update ApplicationRegistration#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-azuread.applicationRegistration.ApplicationRegistrationTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.44.0/docs/resources/application_registration#create ApplicationRegistration#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-azuread.applicationRegistration.ApplicationRegistrationTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.44.0/docs/resources/application_registration#delete ApplicationRegistration#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-azuread.applicationRegistration.ApplicationRegistrationTimeouts.property.read"></a>

```go
Read *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.44.0/docs/resources/application_registration#read ApplicationRegistration#read}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-azuread.applicationRegistration.ApplicationRegistrationTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.44.0/docs/resources/application_registration#update ApplicationRegistration#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ApplicationRegistrationTimeoutsOutputReference <a name="ApplicationRegistrationTimeoutsOutputReference" id="@cdktf/provider-azuread.applicationRegistration.ApplicationRegistrationTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azuread.applicationRegistration.ApplicationRegistrationTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azuread-go/azuread/v11/applicationregistration"

applicationregistration.NewApplicationRegistrationTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ApplicationRegistrationTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.applicationRegistration.ApplicationRegistrationTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azuread.applicationRegistration.ApplicationRegistrationTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azuread.applicationRegistration.ApplicationRegistrationTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.applicationRegistration.ApplicationRegistrationTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azuread.applicationRegistration.ApplicationRegistrationTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationRegistration.ApplicationRegistrationTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationRegistration.ApplicationRegistrationTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationRegistration.ApplicationRegistrationTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationRegistration.ApplicationRegistrationTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationRegistration.ApplicationRegistrationTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationRegistration.ApplicationRegistrationTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationRegistration.ApplicationRegistrationTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationRegistration.ApplicationRegistrationTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationRegistration.ApplicationRegistrationTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationRegistration.ApplicationRegistrationTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationRegistration.ApplicationRegistrationTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azuread.applicationRegistration.ApplicationRegistrationTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azuread.applicationRegistration.ApplicationRegistrationTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationRegistration.ApplicationRegistrationTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationRegistration.ApplicationRegistrationTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationRegistration.ApplicationRegistrationTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azuread.applicationRegistration.ApplicationRegistrationTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azuread.applicationRegistration.ApplicationRegistrationTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.applicationRegistration.ApplicationRegistrationTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azuread.applicationRegistration.ApplicationRegistrationTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.applicationRegistration.ApplicationRegistrationTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azuread.applicationRegistration.ApplicationRegistrationTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.applicationRegistration.ApplicationRegistrationTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azuread.applicationRegistration.ApplicationRegistrationTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.applicationRegistration.ApplicationRegistrationTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azuread.applicationRegistration.ApplicationRegistrationTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.applicationRegistration.ApplicationRegistrationTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azuread.applicationRegistration.ApplicationRegistrationTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.applicationRegistration.ApplicationRegistrationTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azuread.applicationRegistration.ApplicationRegistrationTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.applicationRegistration.ApplicationRegistrationTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azuread.applicationRegistration.ApplicationRegistrationTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.applicationRegistration.ApplicationRegistrationTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azuread.applicationRegistration.ApplicationRegistrationTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.applicationRegistration.ApplicationRegistrationTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azuread.applicationRegistration.ApplicationRegistrationTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azuread.applicationRegistration.ApplicationRegistrationTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azuread.applicationRegistration.ApplicationRegistrationTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azuread.applicationRegistration.ApplicationRegistrationTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azuread.applicationRegistration.ApplicationRegistrationTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-azuread.applicationRegistration.ApplicationRegistrationTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-azuread.applicationRegistration.ApplicationRegistrationTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-azuread.applicationRegistration.ApplicationRegistrationTimeoutsOutputReference.resetRead"></a>

```go
func ResetRead()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-azuread.applicationRegistration.ApplicationRegistrationTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.applicationRegistration.ApplicationRegistrationTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azuread.applicationRegistration.ApplicationRegistrationTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationRegistration.ApplicationRegistrationTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationRegistration.ApplicationRegistrationTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationRegistration.ApplicationRegistrationTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationRegistration.ApplicationRegistrationTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationRegistration.ApplicationRegistrationTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationRegistration.ApplicationRegistrationTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationRegistration.ApplicationRegistrationTimeoutsOutputReference.property.read">Read</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationRegistration.ApplicationRegistrationTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationRegistration.ApplicationRegistrationTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azuread.applicationRegistration.ApplicationRegistrationTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azuread.applicationRegistration.ApplicationRegistrationTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-azuread.applicationRegistration.ApplicationRegistrationTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-azuread.applicationRegistration.ApplicationRegistrationTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-azuread.applicationRegistration.ApplicationRegistrationTimeoutsOutputReference.property.readInput"></a>

```go
func ReadInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-azuread.applicationRegistration.ApplicationRegistrationTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-azuread.applicationRegistration.ApplicationRegistrationTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-azuread.applicationRegistration.ApplicationRegistrationTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-azuread.applicationRegistration.ApplicationRegistrationTimeoutsOutputReference.property.read"></a>

```go
func Read() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-azuread.applicationRegistration.ApplicationRegistrationTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azuread.applicationRegistration.ApplicationRegistrationTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



