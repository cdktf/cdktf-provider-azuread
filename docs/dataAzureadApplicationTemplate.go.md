# `dataAzureadApplicationTemplate` Submodule <a name="`dataAzureadApplicationTemplate` Submodule" id="@cdktf/provider-azuread.dataAzureadApplicationTemplate"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAzureadApplicationTemplate <a name="DataAzureadApplicationTemplate" id="@cdktf/provider-azuread.dataAzureadApplicationTemplate.DataAzureadApplicationTemplate"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azuread/2.47.0/docs/data-sources/application_template azuread_application_template}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azuread.dataAzureadApplicationTemplate.DataAzureadApplicationTemplate.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azuread-go/azuread/v11/dataazureadapplicationtemplate"

dataazureadapplicationtemplate.NewDataAzureadApplicationTemplate(scope Construct, id *string, config DataAzureadApplicationTemplateConfig) DataAzureadApplicationTemplate
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.dataAzureadApplicationTemplate.DataAzureadApplicationTemplate.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azuread.dataAzureadApplicationTemplate.DataAzureadApplicationTemplate.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azuread.dataAzureadApplicationTemplate.DataAzureadApplicationTemplate.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azuread.dataAzureadApplicationTemplate.DataAzureadApplicationTemplateConfig">DataAzureadApplicationTemplateConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azuread.dataAzureadApplicationTemplate.DataAzureadApplicationTemplate.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azuread.dataAzureadApplicationTemplate.DataAzureadApplicationTemplate.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktf/provider-azuread.dataAzureadApplicationTemplate.DataAzureadApplicationTemplate.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azuread.dataAzureadApplicationTemplate.DataAzureadApplicationTemplateConfig">DataAzureadApplicationTemplateConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azuread.dataAzureadApplicationTemplate.DataAzureadApplicationTemplate.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azuread.dataAzureadApplicationTemplate.DataAzureadApplicationTemplate.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadApplicationTemplate.DataAzureadApplicationTemplate.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azuread.dataAzureadApplicationTemplate.DataAzureadApplicationTemplate.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azuread.dataAzureadApplicationTemplate.DataAzureadApplicationTemplate.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadApplicationTemplate.DataAzureadApplicationTemplate.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azuread.dataAzureadApplicationTemplate.DataAzureadApplicationTemplate.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadApplicationTemplate.DataAzureadApplicationTemplate.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadApplicationTemplate.DataAzureadApplicationTemplate.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadApplicationTemplate.DataAzureadApplicationTemplate.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadApplicationTemplate.DataAzureadApplicationTemplate.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadApplicationTemplate.DataAzureadApplicationTemplate.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadApplicationTemplate.DataAzureadApplicationTemplate.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadApplicationTemplate.DataAzureadApplicationTemplate.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadApplicationTemplate.DataAzureadApplicationTemplate.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadApplicationTemplate.DataAzureadApplicationTemplate.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadApplicationTemplate.DataAzureadApplicationTemplate.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadApplicationTemplate.DataAzureadApplicationTemplate.resetDisplayName">ResetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadApplicationTemplate.DataAzureadApplicationTemplate.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadApplicationTemplate.DataAzureadApplicationTemplate.resetTemplateId">ResetTemplateId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadApplicationTemplate.DataAzureadApplicationTemplate.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azuread.dataAzureadApplicationTemplate.DataAzureadApplicationTemplate.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-azuread.dataAzureadApplicationTemplate.DataAzureadApplicationTemplate.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azuread.dataAzureadApplicationTemplate.DataAzureadApplicationTemplate.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azuread.dataAzureadApplicationTemplate.DataAzureadApplicationTemplate.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-azuread.dataAzureadApplicationTemplate.DataAzureadApplicationTemplate.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azuread.dataAzureadApplicationTemplate.DataAzureadApplicationTemplate.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-azuread.dataAzureadApplicationTemplate.DataAzureadApplicationTemplate.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-azuread.dataAzureadApplicationTemplate.DataAzureadApplicationTemplate.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-azuread.dataAzureadApplicationTemplate.DataAzureadApplicationTemplate.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azuread.dataAzureadApplicationTemplate.DataAzureadApplicationTemplate.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.dataAzureadApplicationTemplate.DataAzureadApplicationTemplate.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azuread.dataAzureadApplicationTemplate.DataAzureadApplicationTemplate.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.dataAzureadApplicationTemplate.DataAzureadApplicationTemplate.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azuread.dataAzureadApplicationTemplate.DataAzureadApplicationTemplate.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.dataAzureadApplicationTemplate.DataAzureadApplicationTemplate.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azuread.dataAzureadApplicationTemplate.DataAzureadApplicationTemplate.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.dataAzureadApplicationTemplate.DataAzureadApplicationTemplate.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azuread.dataAzureadApplicationTemplate.DataAzureadApplicationTemplate.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.dataAzureadApplicationTemplate.DataAzureadApplicationTemplate.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azuread.dataAzureadApplicationTemplate.DataAzureadApplicationTemplate.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.dataAzureadApplicationTemplate.DataAzureadApplicationTemplate.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azuread.dataAzureadApplicationTemplate.DataAzureadApplicationTemplate.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.dataAzureadApplicationTemplate.DataAzureadApplicationTemplate.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azuread.dataAzureadApplicationTemplate.DataAzureadApplicationTemplate.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.dataAzureadApplicationTemplate.DataAzureadApplicationTemplate.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azuread.dataAzureadApplicationTemplate.DataAzureadApplicationTemplate.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.dataAzureadApplicationTemplate.DataAzureadApplicationTemplate.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azuread.dataAzureadApplicationTemplate.DataAzureadApplicationTemplate.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.dataAzureadApplicationTemplate.DataAzureadApplicationTemplate.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-azuread.dataAzureadApplicationTemplate.DataAzureadApplicationTemplate.putTimeouts"></a>

```go
func PutTimeouts(value DataAzureadApplicationTemplateTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azuread.dataAzureadApplicationTemplate.DataAzureadApplicationTemplate.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azuread.dataAzureadApplicationTemplate.DataAzureadApplicationTemplateTimeouts">DataAzureadApplicationTemplateTimeouts</a>

---

##### `ResetDisplayName` <a name="ResetDisplayName" id="@cdktf/provider-azuread.dataAzureadApplicationTemplate.DataAzureadApplicationTemplate.resetDisplayName"></a>

```go
func ResetDisplayName()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-azuread.dataAzureadApplicationTemplate.DataAzureadApplicationTemplate.resetId"></a>

```go
func ResetId()
```

##### `ResetTemplateId` <a name="ResetTemplateId" id="@cdktf/provider-azuread.dataAzureadApplicationTemplate.DataAzureadApplicationTemplate.resetTemplateId"></a>

```go
func ResetTemplateId()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-azuread.dataAzureadApplicationTemplate.DataAzureadApplicationTemplate.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azuread.dataAzureadApplicationTemplate.DataAzureadApplicationTemplate.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azuread.dataAzureadApplicationTemplate.DataAzureadApplicationTemplate.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadApplicationTemplate.DataAzureadApplicationTemplate.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadApplicationTemplate.DataAzureadApplicationTemplate.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataAzureadApplicationTemplate resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-azuread.dataAzureadApplicationTemplate.DataAzureadApplicationTemplate.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-azuread-go/azuread/v11/dataazureadapplicationtemplate"

dataazureadapplicationtemplate.DataAzureadApplicationTemplate_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azuread.dataAzureadApplicationTemplate.DataAzureadApplicationTemplate.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-azuread.dataAzureadApplicationTemplate.DataAzureadApplicationTemplate.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-azuread-go/azuread/v11/dataazureadapplicationtemplate"

dataazureadapplicationtemplate.DataAzureadApplicationTemplate_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azuread.dataAzureadApplicationTemplate.DataAzureadApplicationTemplate.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-azuread.dataAzureadApplicationTemplate.DataAzureadApplicationTemplate.isTerraformDataSource"></a>

```go
import "github.com/cdktf/cdktf-provider-azuread-go/azuread/v11/dataazureadapplicationtemplate"

dataazureadapplicationtemplate.DataAzureadApplicationTemplate_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azuread.dataAzureadApplicationTemplate.DataAzureadApplicationTemplate.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-azuread.dataAzureadApplicationTemplate.DataAzureadApplicationTemplate.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-azuread-go/azuread/v11/dataazureadapplicationtemplate"

dataazureadapplicationtemplate.DataAzureadApplicationTemplate_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataAzureadApplicationTemplate resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azuread.dataAzureadApplicationTemplate.DataAzureadApplicationTemplate.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azuread.dataAzureadApplicationTemplate.DataAzureadApplicationTemplate.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataAzureadApplicationTemplate to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azuread.dataAzureadApplicationTemplate.DataAzureadApplicationTemplate.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataAzureadApplicationTemplate that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azuread/2.47.0/docs/data-sources/application_template#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azuread.dataAzureadApplicationTemplate.DataAzureadApplicationTemplate.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataAzureadApplicationTemplate to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.dataAzureadApplicationTemplate.DataAzureadApplicationTemplate.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azuread.dataAzureadApplicationTemplate.DataAzureadApplicationTemplate.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadApplicationTemplate.DataAzureadApplicationTemplate.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadApplicationTemplate.DataAzureadApplicationTemplate.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadApplicationTemplate.DataAzureadApplicationTemplate.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadApplicationTemplate.DataAzureadApplicationTemplate.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadApplicationTemplate.DataAzureadApplicationTemplate.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadApplicationTemplate.DataAzureadApplicationTemplate.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadApplicationTemplate.DataAzureadApplicationTemplate.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadApplicationTemplate.DataAzureadApplicationTemplate.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadApplicationTemplate.DataAzureadApplicationTemplate.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadApplicationTemplate.DataAzureadApplicationTemplate.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadApplicationTemplate.DataAzureadApplicationTemplate.property.categories">Categories</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadApplicationTemplate.DataAzureadApplicationTemplate.property.homepageUrl">HomepageUrl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadApplicationTemplate.DataAzureadApplicationTemplate.property.logoUrl">LogoUrl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadApplicationTemplate.DataAzureadApplicationTemplate.property.publisher">Publisher</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadApplicationTemplate.DataAzureadApplicationTemplate.property.supportedProvisioningTypes">SupportedProvisioningTypes</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadApplicationTemplate.DataAzureadApplicationTemplate.property.supportedSingleSignOnModes">SupportedSingleSignOnModes</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadApplicationTemplate.DataAzureadApplicationTemplate.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azuread.dataAzureadApplicationTemplate.DataAzureadApplicationTemplateTimeoutsOutputReference">DataAzureadApplicationTemplateTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadApplicationTemplate.DataAzureadApplicationTemplate.property.displayNameInput">DisplayNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadApplicationTemplate.DataAzureadApplicationTemplate.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadApplicationTemplate.DataAzureadApplicationTemplate.property.templateIdInput">TemplateIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadApplicationTemplate.DataAzureadApplicationTemplate.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadApplicationTemplate.DataAzureadApplicationTemplate.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadApplicationTemplate.DataAzureadApplicationTemplate.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadApplicationTemplate.DataAzureadApplicationTemplate.property.templateId">TemplateId</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-azuread.dataAzureadApplicationTemplate.DataAzureadApplicationTemplate.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-azuread.dataAzureadApplicationTemplate.DataAzureadApplicationTemplate.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azuread.dataAzureadApplicationTemplate.DataAzureadApplicationTemplate.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-azuread.dataAzureadApplicationTemplate.DataAzureadApplicationTemplate.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-azuread.dataAzureadApplicationTemplate.DataAzureadApplicationTemplate.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-azuread.dataAzureadApplicationTemplate.DataAzureadApplicationTemplate.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-azuread.dataAzureadApplicationTemplate.DataAzureadApplicationTemplate.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azuread.dataAzureadApplicationTemplate.DataAzureadApplicationTemplate.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azuread.dataAzureadApplicationTemplate.DataAzureadApplicationTemplate.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azuread.dataAzureadApplicationTemplate.DataAzureadApplicationTemplate.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azuread.dataAzureadApplicationTemplate.DataAzureadApplicationTemplate.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azuread.dataAzureadApplicationTemplate.DataAzureadApplicationTemplate.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Categories`<sup>Required</sup> <a name="Categories" id="@cdktf/provider-azuread.dataAzureadApplicationTemplate.DataAzureadApplicationTemplate.property.categories"></a>

```go
func Categories() *[]*string
```

- *Type:* *[]*string

---

##### `HomepageUrl`<sup>Required</sup> <a name="HomepageUrl" id="@cdktf/provider-azuread.dataAzureadApplicationTemplate.DataAzureadApplicationTemplate.property.homepageUrl"></a>

```go
func HomepageUrl() *string
```

- *Type:* *string

---

##### `LogoUrl`<sup>Required</sup> <a name="LogoUrl" id="@cdktf/provider-azuread.dataAzureadApplicationTemplate.DataAzureadApplicationTemplate.property.logoUrl"></a>

```go
func LogoUrl() *string
```

- *Type:* *string

---

##### `Publisher`<sup>Required</sup> <a name="Publisher" id="@cdktf/provider-azuread.dataAzureadApplicationTemplate.DataAzureadApplicationTemplate.property.publisher"></a>

```go
func Publisher() *string
```

- *Type:* *string

---

##### `SupportedProvisioningTypes`<sup>Required</sup> <a name="SupportedProvisioningTypes" id="@cdktf/provider-azuread.dataAzureadApplicationTemplate.DataAzureadApplicationTemplate.property.supportedProvisioningTypes"></a>

```go
func SupportedProvisioningTypes() *[]*string
```

- *Type:* *[]*string

---

##### `SupportedSingleSignOnModes`<sup>Required</sup> <a name="SupportedSingleSignOnModes" id="@cdktf/provider-azuread.dataAzureadApplicationTemplate.DataAzureadApplicationTemplate.property.supportedSingleSignOnModes"></a>

```go
func SupportedSingleSignOnModes() *[]*string
```

- *Type:* *[]*string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-azuread.dataAzureadApplicationTemplate.DataAzureadApplicationTemplate.property.timeouts"></a>

```go
func Timeouts() DataAzureadApplicationTemplateTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azuread.dataAzureadApplicationTemplate.DataAzureadApplicationTemplateTimeoutsOutputReference">DataAzureadApplicationTemplateTimeoutsOutputReference</a>

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="@cdktf/provider-azuread.dataAzureadApplicationTemplate.DataAzureadApplicationTemplate.property.displayNameInput"></a>

```go
func DisplayNameInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azuread.dataAzureadApplicationTemplate.DataAzureadApplicationTemplate.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `TemplateIdInput`<sup>Optional</sup> <a name="TemplateIdInput" id="@cdktf/provider-azuread.dataAzureadApplicationTemplate.DataAzureadApplicationTemplate.property.templateIdInput"></a>

```go
func TemplateIdInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-azuread.dataAzureadApplicationTemplate.DataAzureadApplicationTemplate.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktf/provider-azuread.dataAzureadApplicationTemplate.DataAzureadApplicationTemplate.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azuread.dataAzureadApplicationTemplate.DataAzureadApplicationTemplate.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `TemplateId`<sup>Required</sup> <a name="TemplateId" id="@cdktf/provider-azuread.dataAzureadApplicationTemplate.DataAzureadApplicationTemplate.property.templateId"></a>

```go
func TemplateId() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.dataAzureadApplicationTemplate.DataAzureadApplicationTemplate.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-azuread.dataAzureadApplicationTemplate.DataAzureadApplicationTemplate.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAzureadApplicationTemplateConfig <a name="DataAzureadApplicationTemplateConfig" id="@cdktf/provider-azuread.dataAzureadApplicationTemplate.DataAzureadApplicationTemplateConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azuread.dataAzureadApplicationTemplate.DataAzureadApplicationTemplateConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azuread-go/azuread/v11/dataazureadapplicationtemplate"

&dataazureadapplicationtemplate.DataAzureadApplicationTemplateConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	DisplayName: *string,
	Id: *string,
	TemplateId: *string,
	Timeouts: github.com/cdktf/cdktf-provider-azuread-go/azuread/v11.dataAzureadApplicationTemplate.DataAzureadApplicationTemplateTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.dataAzureadApplicationTemplate.DataAzureadApplicationTemplateConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadApplicationTemplate.DataAzureadApplicationTemplateConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadApplicationTemplate.DataAzureadApplicationTemplateConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadApplicationTemplate.DataAzureadApplicationTemplateConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadApplicationTemplate.DataAzureadApplicationTemplateConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadApplicationTemplate.DataAzureadApplicationTemplateConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadApplicationTemplate.DataAzureadApplicationTemplateConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadApplicationTemplate.DataAzureadApplicationTemplateConfig.property.displayName">DisplayName</a></code> | <code>*string</code> | The display name for the application template. |
| <code><a href="#@cdktf/provider-azuread.dataAzureadApplicationTemplate.DataAzureadApplicationTemplateConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.47.0/docs/data-sources/application_template#id DataAzureadApplicationTemplate#id}. |
| <code><a href="#@cdktf/provider-azuread.dataAzureadApplicationTemplate.DataAzureadApplicationTemplateConfig.property.templateId">TemplateId</a></code> | <code>*string</code> | The application template's ID. |
| <code><a href="#@cdktf/provider-azuread.dataAzureadApplicationTemplate.DataAzureadApplicationTemplateConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azuread.dataAzureadApplicationTemplate.DataAzureadApplicationTemplateTimeouts">DataAzureadApplicationTemplateTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azuread.dataAzureadApplicationTemplate.DataAzureadApplicationTemplateConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azuread.dataAzureadApplicationTemplate.DataAzureadApplicationTemplateConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azuread.dataAzureadApplicationTemplate.DataAzureadApplicationTemplateConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azuread.dataAzureadApplicationTemplate.DataAzureadApplicationTemplateConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azuread.dataAzureadApplicationTemplate.DataAzureadApplicationTemplateConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azuread.dataAzureadApplicationTemplate.DataAzureadApplicationTemplateConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azuread.dataAzureadApplicationTemplate.DataAzureadApplicationTemplateConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `DisplayName`<sup>Optional</sup> <a name="DisplayName" id="@cdktf/provider-azuread.dataAzureadApplicationTemplate.DataAzureadApplicationTemplateConfig.property.displayName"></a>

```go
DisplayName *string
```

- *Type:* *string

The display name for the application template.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.47.0/docs/data-sources/application_template#display_name DataAzureadApplicationTemplate#display_name}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-azuread.dataAzureadApplicationTemplate.DataAzureadApplicationTemplateConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.47.0/docs/data-sources/application_template#id DataAzureadApplicationTemplate#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `TemplateId`<sup>Optional</sup> <a name="TemplateId" id="@cdktf/provider-azuread.dataAzureadApplicationTemplate.DataAzureadApplicationTemplateConfig.property.templateId"></a>

```go
TemplateId *string
```

- *Type:* *string

The application template's ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.47.0/docs/data-sources/application_template#template_id DataAzureadApplicationTemplate#template_id}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-azuread.dataAzureadApplicationTemplate.DataAzureadApplicationTemplateConfig.property.timeouts"></a>

```go
Timeouts DataAzureadApplicationTemplateTimeouts
```

- *Type:* <a href="#@cdktf/provider-azuread.dataAzureadApplicationTemplate.DataAzureadApplicationTemplateTimeouts">DataAzureadApplicationTemplateTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.47.0/docs/data-sources/application_template#timeouts DataAzureadApplicationTemplate#timeouts}

---

### DataAzureadApplicationTemplateTimeouts <a name="DataAzureadApplicationTemplateTimeouts" id="@cdktf/provider-azuread.dataAzureadApplicationTemplate.DataAzureadApplicationTemplateTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azuread.dataAzureadApplicationTemplate.DataAzureadApplicationTemplateTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azuread-go/azuread/v11/dataazureadapplicationtemplate"

&dataazureadapplicationtemplate.DataAzureadApplicationTemplateTimeouts {
	Read: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.dataAzureadApplicationTemplate.DataAzureadApplicationTemplateTimeouts.property.read">Read</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.47.0/docs/data-sources/application_template#read DataAzureadApplicationTemplate#read}. |

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-azuread.dataAzureadApplicationTemplate.DataAzureadApplicationTemplateTimeouts.property.read"></a>

```go
Read *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.47.0/docs/data-sources/application_template#read DataAzureadApplicationTemplate#read}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataAzureadApplicationTemplateTimeoutsOutputReference <a name="DataAzureadApplicationTemplateTimeoutsOutputReference" id="@cdktf/provider-azuread.dataAzureadApplicationTemplate.DataAzureadApplicationTemplateTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azuread.dataAzureadApplicationTemplate.DataAzureadApplicationTemplateTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azuread-go/azuread/v11/dataazureadapplicationtemplate"

dataazureadapplicationtemplate.NewDataAzureadApplicationTemplateTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAzureadApplicationTemplateTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.dataAzureadApplicationTemplate.DataAzureadApplicationTemplateTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azuread.dataAzureadApplicationTemplate.DataAzureadApplicationTemplateTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azuread.dataAzureadApplicationTemplate.DataAzureadApplicationTemplateTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.dataAzureadApplicationTemplate.DataAzureadApplicationTemplateTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azuread.dataAzureadApplicationTemplate.DataAzureadApplicationTemplateTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadApplicationTemplate.DataAzureadApplicationTemplateTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadApplicationTemplate.DataAzureadApplicationTemplateTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadApplicationTemplate.DataAzureadApplicationTemplateTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadApplicationTemplate.DataAzureadApplicationTemplateTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadApplicationTemplate.DataAzureadApplicationTemplateTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadApplicationTemplate.DataAzureadApplicationTemplateTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadApplicationTemplate.DataAzureadApplicationTemplateTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadApplicationTemplate.DataAzureadApplicationTemplateTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadApplicationTemplate.DataAzureadApplicationTemplateTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadApplicationTemplate.DataAzureadApplicationTemplateTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadApplicationTemplate.DataAzureadApplicationTemplateTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azuread.dataAzureadApplicationTemplate.DataAzureadApplicationTemplateTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azuread.dataAzureadApplicationTemplate.DataAzureadApplicationTemplateTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azuread.dataAzureadApplicationTemplate.DataAzureadApplicationTemplateTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azuread.dataAzureadApplicationTemplate.DataAzureadApplicationTemplateTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.dataAzureadApplicationTemplate.DataAzureadApplicationTemplateTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azuread.dataAzureadApplicationTemplate.DataAzureadApplicationTemplateTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.dataAzureadApplicationTemplate.DataAzureadApplicationTemplateTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azuread.dataAzureadApplicationTemplate.DataAzureadApplicationTemplateTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.dataAzureadApplicationTemplate.DataAzureadApplicationTemplateTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azuread.dataAzureadApplicationTemplate.DataAzureadApplicationTemplateTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.dataAzureadApplicationTemplate.DataAzureadApplicationTemplateTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azuread.dataAzureadApplicationTemplate.DataAzureadApplicationTemplateTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.dataAzureadApplicationTemplate.DataAzureadApplicationTemplateTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azuread.dataAzureadApplicationTemplate.DataAzureadApplicationTemplateTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.dataAzureadApplicationTemplate.DataAzureadApplicationTemplateTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azuread.dataAzureadApplicationTemplate.DataAzureadApplicationTemplateTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.dataAzureadApplicationTemplate.DataAzureadApplicationTemplateTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azuread.dataAzureadApplicationTemplate.DataAzureadApplicationTemplateTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.dataAzureadApplicationTemplate.DataAzureadApplicationTemplateTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azuread.dataAzureadApplicationTemplate.DataAzureadApplicationTemplateTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.dataAzureadApplicationTemplate.DataAzureadApplicationTemplateTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azuread.dataAzureadApplicationTemplate.DataAzureadApplicationTemplateTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azuread.dataAzureadApplicationTemplate.DataAzureadApplicationTemplateTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azuread.dataAzureadApplicationTemplate.DataAzureadApplicationTemplateTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azuread.dataAzureadApplicationTemplate.DataAzureadApplicationTemplateTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azuread.dataAzureadApplicationTemplate.DataAzureadApplicationTemplateTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-azuread.dataAzureadApplicationTemplate.DataAzureadApplicationTemplateTimeoutsOutputReference.resetRead"></a>

```go
func ResetRead()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.dataAzureadApplicationTemplate.DataAzureadApplicationTemplateTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azuread.dataAzureadApplicationTemplate.DataAzureadApplicationTemplateTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadApplicationTemplate.DataAzureadApplicationTemplateTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadApplicationTemplate.DataAzureadApplicationTemplateTimeoutsOutputReference.property.read">Read</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadApplicationTemplate.DataAzureadApplicationTemplateTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azuread.dataAzureadApplicationTemplate.DataAzureadApplicationTemplateTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azuread.dataAzureadApplicationTemplate.DataAzureadApplicationTemplateTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-azuread.dataAzureadApplicationTemplate.DataAzureadApplicationTemplateTimeoutsOutputReference.property.readInput"></a>

```go
func ReadInput() *string
```

- *Type:* *string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-azuread.dataAzureadApplicationTemplate.DataAzureadApplicationTemplateTimeoutsOutputReference.property.read"></a>

```go
func Read() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azuread.dataAzureadApplicationTemplate.DataAzureadApplicationTemplateTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



