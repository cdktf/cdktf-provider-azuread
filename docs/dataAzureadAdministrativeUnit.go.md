# `dataAzureadAdministrativeUnit` Submodule <a name="`dataAzureadAdministrativeUnit` Submodule" id="@cdktf/provider-azuread.dataAzureadAdministrativeUnit"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAzureadAdministrativeUnit <a name="DataAzureadAdministrativeUnit" id="@cdktf/provider-azuread.dataAzureadAdministrativeUnit.DataAzureadAdministrativeUnit"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azuread/2.49.1/docs/data-sources/administrative_unit azuread_administrative_unit}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azuread.dataAzureadAdministrativeUnit.DataAzureadAdministrativeUnit.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azuread-go/azuread/dataazureadadministrativeunit"

dataazureadadministrativeunit.NewDataAzureadAdministrativeUnit(scope Construct, id *string, config DataAzureadAdministrativeUnitConfig) DataAzureadAdministrativeUnit
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.dataAzureadAdministrativeUnit.DataAzureadAdministrativeUnit.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azuread.dataAzureadAdministrativeUnit.DataAzureadAdministrativeUnit.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azuread.dataAzureadAdministrativeUnit.DataAzureadAdministrativeUnit.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azuread.dataAzureadAdministrativeUnit.DataAzureadAdministrativeUnitConfig">DataAzureadAdministrativeUnitConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azuread.dataAzureadAdministrativeUnit.DataAzureadAdministrativeUnit.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azuread.dataAzureadAdministrativeUnit.DataAzureadAdministrativeUnit.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktf/provider-azuread.dataAzureadAdministrativeUnit.DataAzureadAdministrativeUnit.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azuread.dataAzureadAdministrativeUnit.DataAzureadAdministrativeUnitConfig">DataAzureadAdministrativeUnitConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azuread.dataAzureadAdministrativeUnit.DataAzureadAdministrativeUnit.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azuread.dataAzureadAdministrativeUnit.DataAzureadAdministrativeUnit.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadAdministrativeUnit.DataAzureadAdministrativeUnit.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azuread.dataAzureadAdministrativeUnit.DataAzureadAdministrativeUnit.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azuread.dataAzureadAdministrativeUnit.DataAzureadAdministrativeUnit.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azuread.dataAzureadAdministrativeUnit.DataAzureadAdministrativeUnit.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadAdministrativeUnit.DataAzureadAdministrativeUnit.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azuread.dataAzureadAdministrativeUnit.DataAzureadAdministrativeUnit.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadAdministrativeUnit.DataAzureadAdministrativeUnit.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadAdministrativeUnit.DataAzureadAdministrativeUnit.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadAdministrativeUnit.DataAzureadAdministrativeUnit.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadAdministrativeUnit.DataAzureadAdministrativeUnit.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadAdministrativeUnit.DataAzureadAdministrativeUnit.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadAdministrativeUnit.DataAzureadAdministrativeUnit.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadAdministrativeUnit.DataAzureadAdministrativeUnit.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadAdministrativeUnit.DataAzureadAdministrativeUnit.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadAdministrativeUnit.DataAzureadAdministrativeUnit.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadAdministrativeUnit.DataAzureadAdministrativeUnit.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadAdministrativeUnit.DataAzureadAdministrativeUnit.resetDisplayName">ResetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadAdministrativeUnit.DataAzureadAdministrativeUnit.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadAdministrativeUnit.DataAzureadAdministrativeUnit.resetObjectId">ResetObjectId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadAdministrativeUnit.DataAzureadAdministrativeUnit.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azuread.dataAzureadAdministrativeUnit.DataAzureadAdministrativeUnit.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-azuread.dataAzureadAdministrativeUnit.DataAzureadAdministrativeUnit.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azuread.dataAzureadAdministrativeUnit.DataAzureadAdministrativeUnit.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azuread.dataAzureadAdministrativeUnit.DataAzureadAdministrativeUnit.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-azuread.dataAzureadAdministrativeUnit.DataAzureadAdministrativeUnit.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azuread.dataAzureadAdministrativeUnit.DataAzureadAdministrativeUnit.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-azuread.dataAzureadAdministrativeUnit.DataAzureadAdministrativeUnit.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-azuread.dataAzureadAdministrativeUnit.DataAzureadAdministrativeUnit.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-azuread.dataAzureadAdministrativeUnit.DataAzureadAdministrativeUnit.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-azuread.dataAzureadAdministrativeUnit.DataAzureadAdministrativeUnit.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azuread.dataAzureadAdministrativeUnit.DataAzureadAdministrativeUnit.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.dataAzureadAdministrativeUnit.DataAzureadAdministrativeUnit.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azuread.dataAzureadAdministrativeUnit.DataAzureadAdministrativeUnit.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.dataAzureadAdministrativeUnit.DataAzureadAdministrativeUnit.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azuread.dataAzureadAdministrativeUnit.DataAzureadAdministrativeUnit.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.dataAzureadAdministrativeUnit.DataAzureadAdministrativeUnit.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azuread.dataAzureadAdministrativeUnit.DataAzureadAdministrativeUnit.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.dataAzureadAdministrativeUnit.DataAzureadAdministrativeUnit.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azuread.dataAzureadAdministrativeUnit.DataAzureadAdministrativeUnit.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.dataAzureadAdministrativeUnit.DataAzureadAdministrativeUnit.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azuread.dataAzureadAdministrativeUnit.DataAzureadAdministrativeUnit.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.dataAzureadAdministrativeUnit.DataAzureadAdministrativeUnit.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azuread.dataAzureadAdministrativeUnit.DataAzureadAdministrativeUnit.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.dataAzureadAdministrativeUnit.DataAzureadAdministrativeUnit.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azuread.dataAzureadAdministrativeUnit.DataAzureadAdministrativeUnit.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.dataAzureadAdministrativeUnit.DataAzureadAdministrativeUnit.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azuread.dataAzureadAdministrativeUnit.DataAzureadAdministrativeUnit.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.dataAzureadAdministrativeUnit.DataAzureadAdministrativeUnit.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azuread.dataAzureadAdministrativeUnit.DataAzureadAdministrativeUnit.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.dataAzureadAdministrativeUnit.DataAzureadAdministrativeUnit.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-azuread.dataAzureadAdministrativeUnit.DataAzureadAdministrativeUnit.putTimeouts"></a>

```go
func PutTimeouts(value DataAzureadAdministrativeUnitTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azuread.dataAzureadAdministrativeUnit.DataAzureadAdministrativeUnit.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azuread.dataAzureadAdministrativeUnit.DataAzureadAdministrativeUnitTimeouts">DataAzureadAdministrativeUnitTimeouts</a>

---

##### `ResetDisplayName` <a name="ResetDisplayName" id="@cdktf/provider-azuread.dataAzureadAdministrativeUnit.DataAzureadAdministrativeUnit.resetDisplayName"></a>

```go
func ResetDisplayName()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-azuread.dataAzureadAdministrativeUnit.DataAzureadAdministrativeUnit.resetId"></a>

```go
func ResetId()
```

##### `ResetObjectId` <a name="ResetObjectId" id="@cdktf/provider-azuread.dataAzureadAdministrativeUnit.DataAzureadAdministrativeUnit.resetObjectId"></a>

```go
func ResetObjectId()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-azuread.dataAzureadAdministrativeUnit.DataAzureadAdministrativeUnit.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azuread.dataAzureadAdministrativeUnit.DataAzureadAdministrativeUnit.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azuread.dataAzureadAdministrativeUnit.DataAzureadAdministrativeUnit.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadAdministrativeUnit.DataAzureadAdministrativeUnit.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadAdministrativeUnit.DataAzureadAdministrativeUnit.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataAzureadAdministrativeUnit resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-azuread.dataAzureadAdministrativeUnit.DataAzureadAdministrativeUnit.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-azuread-go/azuread/dataazureadadministrativeunit"

dataazureadadministrativeunit.DataAzureadAdministrativeUnit_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azuread.dataAzureadAdministrativeUnit.DataAzureadAdministrativeUnit.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-azuread.dataAzureadAdministrativeUnit.DataAzureadAdministrativeUnit.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-azuread-go/azuread/dataazureadadministrativeunit"

dataazureadadministrativeunit.DataAzureadAdministrativeUnit_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azuread.dataAzureadAdministrativeUnit.DataAzureadAdministrativeUnit.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-azuread.dataAzureadAdministrativeUnit.DataAzureadAdministrativeUnit.isTerraformDataSource"></a>

```go
import "github.com/cdktf/cdktf-provider-azuread-go/azuread/dataazureadadministrativeunit"

dataazureadadministrativeunit.DataAzureadAdministrativeUnit_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azuread.dataAzureadAdministrativeUnit.DataAzureadAdministrativeUnit.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-azuread.dataAzureadAdministrativeUnit.DataAzureadAdministrativeUnit.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-azuread-go/azuread/dataazureadadministrativeunit"

dataazureadadministrativeunit.DataAzureadAdministrativeUnit_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataAzureadAdministrativeUnit resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azuread.dataAzureadAdministrativeUnit.DataAzureadAdministrativeUnit.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azuread.dataAzureadAdministrativeUnit.DataAzureadAdministrativeUnit.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataAzureadAdministrativeUnit to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azuread.dataAzureadAdministrativeUnit.DataAzureadAdministrativeUnit.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataAzureadAdministrativeUnit that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azuread/2.49.1/docs/data-sources/administrative_unit#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azuread.dataAzureadAdministrativeUnit.DataAzureadAdministrativeUnit.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataAzureadAdministrativeUnit to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.dataAzureadAdministrativeUnit.DataAzureadAdministrativeUnit.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azuread.dataAzureadAdministrativeUnit.DataAzureadAdministrativeUnit.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadAdministrativeUnit.DataAzureadAdministrativeUnit.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadAdministrativeUnit.DataAzureadAdministrativeUnit.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadAdministrativeUnit.DataAzureadAdministrativeUnit.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadAdministrativeUnit.DataAzureadAdministrativeUnit.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadAdministrativeUnit.DataAzureadAdministrativeUnit.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadAdministrativeUnit.DataAzureadAdministrativeUnit.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadAdministrativeUnit.DataAzureadAdministrativeUnit.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadAdministrativeUnit.DataAzureadAdministrativeUnit.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadAdministrativeUnit.DataAzureadAdministrativeUnit.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadAdministrativeUnit.DataAzureadAdministrativeUnit.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadAdministrativeUnit.DataAzureadAdministrativeUnit.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadAdministrativeUnit.DataAzureadAdministrativeUnit.property.members">Members</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadAdministrativeUnit.DataAzureadAdministrativeUnit.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azuread.dataAzureadAdministrativeUnit.DataAzureadAdministrativeUnitTimeoutsOutputReference">DataAzureadAdministrativeUnitTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadAdministrativeUnit.DataAzureadAdministrativeUnit.property.visibility">Visibility</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadAdministrativeUnit.DataAzureadAdministrativeUnit.property.displayNameInput">DisplayNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadAdministrativeUnit.DataAzureadAdministrativeUnit.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadAdministrativeUnit.DataAzureadAdministrativeUnit.property.objectIdInput">ObjectIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadAdministrativeUnit.DataAzureadAdministrativeUnit.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadAdministrativeUnit.DataAzureadAdministrativeUnit.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadAdministrativeUnit.DataAzureadAdministrativeUnit.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadAdministrativeUnit.DataAzureadAdministrativeUnit.property.objectId">ObjectId</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-azuread.dataAzureadAdministrativeUnit.DataAzureadAdministrativeUnit.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-azuread.dataAzureadAdministrativeUnit.DataAzureadAdministrativeUnit.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azuread.dataAzureadAdministrativeUnit.DataAzureadAdministrativeUnit.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-azuread.dataAzureadAdministrativeUnit.DataAzureadAdministrativeUnit.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-azuread.dataAzureadAdministrativeUnit.DataAzureadAdministrativeUnit.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-azuread.dataAzureadAdministrativeUnit.DataAzureadAdministrativeUnit.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-azuread.dataAzureadAdministrativeUnit.DataAzureadAdministrativeUnit.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azuread.dataAzureadAdministrativeUnit.DataAzureadAdministrativeUnit.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azuread.dataAzureadAdministrativeUnit.DataAzureadAdministrativeUnit.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azuread.dataAzureadAdministrativeUnit.DataAzureadAdministrativeUnit.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azuread.dataAzureadAdministrativeUnit.DataAzureadAdministrativeUnit.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azuread.dataAzureadAdministrativeUnit.DataAzureadAdministrativeUnit.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-azuread.dataAzureadAdministrativeUnit.DataAzureadAdministrativeUnit.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Members`<sup>Required</sup> <a name="Members" id="@cdktf/provider-azuread.dataAzureadAdministrativeUnit.DataAzureadAdministrativeUnit.property.members"></a>

```go
func Members() *[]*string
```

- *Type:* *[]*string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-azuread.dataAzureadAdministrativeUnit.DataAzureadAdministrativeUnit.property.timeouts"></a>

```go
func Timeouts() DataAzureadAdministrativeUnitTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azuread.dataAzureadAdministrativeUnit.DataAzureadAdministrativeUnitTimeoutsOutputReference">DataAzureadAdministrativeUnitTimeoutsOutputReference</a>

---

##### `Visibility`<sup>Required</sup> <a name="Visibility" id="@cdktf/provider-azuread.dataAzureadAdministrativeUnit.DataAzureadAdministrativeUnit.property.visibility"></a>

```go
func Visibility() *string
```

- *Type:* *string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="@cdktf/provider-azuread.dataAzureadAdministrativeUnit.DataAzureadAdministrativeUnit.property.displayNameInput"></a>

```go
func DisplayNameInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azuread.dataAzureadAdministrativeUnit.DataAzureadAdministrativeUnit.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `ObjectIdInput`<sup>Optional</sup> <a name="ObjectIdInput" id="@cdktf/provider-azuread.dataAzureadAdministrativeUnit.DataAzureadAdministrativeUnit.property.objectIdInput"></a>

```go
func ObjectIdInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-azuread.dataAzureadAdministrativeUnit.DataAzureadAdministrativeUnit.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktf/provider-azuread.dataAzureadAdministrativeUnit.DataAzureadAdministrativeUnit.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azuread.dataAzureadAdministrativeUnit.DataAzureadAdministrativeUnit.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `ObjectId`<sup>Required</sup> <a name="ObjectId" id="@cdktf/provider-azuread.dataAzureadAdministrativeUnit.DataAzureadAdministrativeUnit.property.objectId"></a>

```go
func ObjectId() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.dataAzureadAdministrativeUnit.DataAzureadAdministrativeUnit.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-azuread.dataAzureadAdministrativeUnit.DataAzureadAdministrativeUnit.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAzureadAdministrativeUnitConfig <a name="DataAzureadAdministrativeUnitConfig" id="@cdktf/provider-azuread.dataAzureadAdministrativeUnit.DataAzureadAdministrativeUnitConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azuread.dataAzureadAdministrativeUnit.DataAzureadAdministrativeUnitConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azuread-go/azuread/dataazureadadministrativeunit"

&dataazureadadministrativeunit.DataAzureadAdministrativeUnitConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	DisplayName: *string,
	Id: *string,
	ObjectId: *string,
	Timeouts: github.com/cdktf/cdktf-provider-azuread-go/azuread.dataAzureadAdministrativeUnit.DataAzureadAdministrativeUnitTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.dataAzureadAdministrativeUnit.DataAzureadAdministrativeUnitConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadAdministrativeUnit.DataAzureadAdministrativeUnitConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadAdministrativeUnit.DataAzureadAdministrativeUnitConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadAdministrativeUnit.DataAzureadAdministrativeUnitConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadAdministrativeUnit.DataAzureadAdministrativeUnitConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadAdministrativeUnit.DataAzureadAdministrativeUnitConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadAdministrativeUnit.DataAzureadAdministrativeUnitConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadAdministrativeUnit.DataAzureadAdministrativeUnitConfig.property.displayName">DisplayName</a></code> | <code>*string</code> | The display name for the administrative unit. |
| <code><a href="#@cdktf/provider-azuread.dataAzureadAdministrativeUnit.DataAzureadAdministrativeUnitConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.49.1/docs/data-sources/administrative_unit#id DataAzureadAdministrativeUnit#id}. |
| <code><a href="#@cdktf/provider-azuread.dataAzureadAdministrativeUnit.DataAzureadAdministrativeUnitConfig.property.objectId">ObjectId</a></code> | <code>*string</code> | The object ID of the administrative unit. |
| <code><a href="#@cdktf/provider-azuread.dataAzureadAdministrativeUnit.DataAzureadAdministrativeUnitConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azuread.dataAzureadAdministrativeUnit.DataAzureadAdministrativeUnitTimeouts">DataAzureadAdministrativeUnitTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azuread.dataAzureadAdministrativeUnit.DataAzureadAdministrativeUnitConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azuread.dataAzureadAdministrativeUnit.DataAzureadAdministrativeUnitConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azuread.dataAzureadAdministrativeUnit.DataAzureadAdministrativeUnitConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azuread.dataAzureadAdministrativeUnit.DataAzureadAdministrativeUnitConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azuread.dataAzureadAdministrativeUnit.DataAzureadAdministrativeUnitConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azuread.dataAzureadAdministrativeUnit.DataAzureadAdministrativeUnitConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azuread.dataAzureadAdministrativeUnit.DataAzureadAdministrativeUnitConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `DisplayName`<sup>Optional</sup> <a name="DisplayName" id="@cdktf/provider-azuread.dataAzureadAdministrativeUnit.DataAzureadAdministrativeUnitConfig.property.displayName"></a>

```go
DisplayName *string
```

- *Type:* *string

The display name for the administrative unit.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.49.1/docs/data-sources/administrative_unit#display_name DataAzureadAdministrativeUnit#display_name}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-azuread.dataAzureadAdministrativeUnit.DataAzureadAdministrativeUnitConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.49.1/docs/data-sources/administrative_unit#id DataAzureadAdministrativeUnit#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ObjectId`<sup>Optional</sup> <a name="ObjectId" id="@cdktf/provider-azuread.dataAzureadAdministrativeUnit.DataAzureadAdministrativeUnitConfig.property.objectId"></a>

```go
ObjectId *string
```

- *Type:* *string

The object ID of the administrative unit.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.49.1/docs/data-sources/administrative_unit#object_id DataAzureadAdministrativeUnit#object_id}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-azuread.dataAzureadAdministrativeUnit.DataAzureadAdministrativeUnitConfig.property.timeouts"></a>

```go
Timeouts DataAzureadAdministrativeUnitTimeouts
```

- *Type:* <a href="#@cdktf/provider-azuread.dataAzureadAdministrativeUnit.DataAzureadAdministrativeUnitTimeouts">DataAzureadAdministrativeUnitTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.49.1/docs/data-sources/administrative_unit#timeouts DataAzureadAdministrativeUnit#timeouts}

---

### DataAzureadAdministrativeUnitTimeouts <a name="DataAzureadAdministrativeUnitTimeouts" id="@cdktf/provider-azuread.dataAzureadAdministrativeUnit.DataAzureadAdministrativeUnitTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azuread.dataAzureadAdministrativeUnit.DataAzureadAdministrativeUnitTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azuread-go/azuread/dataazureadadministrativeunit"

&dataazureadadministrativeunit.DataAzureadAdministrativeUnitTimeouts {
	Create: *string,
	Delete: *string,
	Read: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.dataAzureadAdministrativeUnit.DataAzureadAdministrativeUnitTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.49.1/docs/data-sources/administrative_unit#create DataAzureadAdministrativeUnit#create}. |
| <code><a href="#@cdktf/provider-azuread.dataAzureadAdministrativeUnit.DataAzureadAdministrativeUnitTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.49.1/docs/data-sources/administrative_unit#delete DataAzureadAdministrativeUnit#delete}. |
| <code><a href="#@cdktf/provider-azuread.dataAzureadAdministrativeUnit.DataAzureadAdministrativeUnitTimeouts.property.read">Read</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.49.1/docs/data-sources/administrative_unit#read DataAzureadAdministrativeUnit#read}. |
| <code><a href="#@cdktf/provider-azuread.dataAzureadAdministrativeUnit.DataAzureadAdministrativeUnitTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.49.1/docs/data-sources/administrative_unit#update DataAzureadAdministrativeUnit#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-azuread.dataAzureadAdministrativeUnit.DataAzureadAdministrativeUnitTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.49.1/docs/data-sources/administrative_unit#create DataAzureadAdministrativeUnit#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-azuread.dataAzureadAdministrativeUnit.DataAzureadAdministrativeUnitTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.49.1/docs/data-sources/administrative_unit#delete DataAzureadAdministrativeUnit#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-azuread.dataAzureadAdministrativeUnit.DataAzureadAdministrativeUnitTimeouts.property.read"></a>

```go
Read *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.49.1/docs/data-sources/administrative_unit#read DataAzureadAdministrativeUnit#read}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-azuread.dataAzureadAdministrativeUnit.DataAzureadAdministrativeUnitTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.49.1/docs/data-sources/administrative_unit#update DataAzureadAdministrativeUnit#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataAzureadAdministrativeUnitTimeoutsOutputReference <a name="DataAzureadAdministrativeUnitTimeoutsOutputReference" id="@cdktf/provider-azuread.dataAzureadAdministrativeUnit.DataAzureadAdministrativeUnitTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azuread.dataAzureadAdministrativeUnit.DataAzureadAdministrativeUnitTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azuread-go/azuread/dataazureadadministrativeunit"

dataazureadadministrativeunit.NewDataAzureadAdministrativeUnitTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAzureadAdministrativeUnitTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.dataAzureadAdministrativeUnit.DataAzureadAdministrativeUnitTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azuread.dataAzureadAdministrativeUnit.DataAzureadAdministrativeUnitTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azuread.dataAzureadAdministrativeUnit.DataAzureadAdministrativeUnitTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.dataAzureadAdministrativeUnit.DataAzureadAdministrativeUnitTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azuread.dataAzureadAdministrativeUnit.DataAzureadAdministrativeUnitTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadAdministrativeUnit.DataAzureadAdministrativeUnitTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadAdministrativeUnit.DataAzureadAdministrativeUnitTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadAdministrativeUnit.DataAzureadAdministrativeUnitTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadAdministrativeUnit.DataAzureadAdministrativeUnitTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadAdministrativeUnit.DataAzureadAdministrativeUnitTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadAdministrativeUnit.DataAzureadAdministrativeUnitTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadAdministrativeUnit.DataAzureadAdministrativeUnitTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadAdministrativeUnit.DataAzureadAdministrativeUnitTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadAdministrativeUnit.DataAzureadAdministrativeUnitTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadAdministrativeUnit.DataAzureadAdministrativeUnitTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadAdministrativeUnit.DataAzureadAdministrativeUnitTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azuread.dataAzureadAdministrativeUnit.DataAzureadAdministrativeUnitTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azuread.dataAzureadAdministrativeUnit.DataAzureadAdministrativeUnitTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadAdministrativeUnit.DataAzureadAdministrativeUnitTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadAdministrativeUnit.DataAzureadAdministrativeUnitTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadAdministrativeUnit.DataAzureadAdministrativeUnitTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azuread.dataAzureadAdministrativeUnit.DataAzureadAdministrativeUnitTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azuread.dataAzureadAdministrativeUnit.DataAzureadAdministrativeUnitTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.dataAzureadAdministrativeUnit.DataAzureadAdministrativeUnitTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azuread.dataAzureadAdministrativeUnit.DataAzureadAdministrativeUnitTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.dataAzureadAdministrativeUnit.DataAzureadAdministrativeUnitTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azuread.dataAzureadAdministrativeUnit.DataAzureadAdministrativeUnitTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.dataAzureadAdministrativeUnit.DataAzureadAdministrativeUnitTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azuread.dataAzureadAdministrativeUnit.DataAzureadAdministrativeUnitTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.dataAzureadAdministrativeUnit.DataAzureadAdministrativeUnitTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azuread.dataAzureadAdministrativeUnit.DataAzureadAdministrativeUnitTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.dataAzureadAdministrativeUnit.DataAzureadAdministrativeUnitTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azuread.dataAzureadAdministrativeUnit.DataAzureadAdministrativeUnitTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.dataAzureadAdministrativeUnit.DataAzureadAdministrativeUnitTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azuread.dataAzureadAdministrativeUnit.DataAzureadAdministrativeUnitTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.dataAzureadAdministrativeUnit.DataAzureadAdministrativeUnitTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azuread.dataAzureadAdministrativeUnit.DataAzureadAdministrativeUnitTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.dataAzureadAdministrativeUnit.DataAzureadAdministrativeUnitTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azuread.dataAzureadAdministrativeUnit.DataAzureadAdministrativeUnitTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.dataAzureadAdministrativeUnit.DataAzureadAdministrativeUnitTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azuread.dataAzureadAdministrativeUnit.DataAzureadAdministrativeUnitTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azuread.dataAzureadAdministrativeUnit.DataAzureadAdministrativeUnitTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azuread.dataAzureadAdministrativeUnit.DataAzureadAdministrativeUnitTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azuread.dataAzureadAdministrativeUnit.DataAzureadAdministrativeUnitTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azuread.dataAzureadAdministrativeUnit.DataAzureadAdministrativeUnitTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-azuread.dataAzureadAdministrativeUnit.DataAzureadAdministrativeUnitTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-azuread.dataAzureadAdministrativeUnit.DataAzureadAdministrativeUnitTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-azuread.dataAzureadAdministrativeUnit.DataAzureadAdministrativeUnitTimeoutsOutputReference.resetRead"></a>

```go
func ResetRead()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-azuread.dataAzureadAdministrativeUnit.DataAzureadAdministrativeUnitTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.dataAzureadAdministrativeUnit.DataAzureadAdministrativeUnitTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azuread.dataAzureadAdministrativeUnit.DataAzureadAdministrativeUnitTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadAdministrativeUnit.DataAzureadAdministrativeUnitTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadAdministrativeUnit.DataAzureadAdministrativeUnitTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadAdministrativeUnit.DataAzureadAdministrativeUnitTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadAdministrativeUnit.DataAzureadAdministrativeUnitTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadAdministrativeUnit.DataAzureadAdministrativeUnitTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadAdministrativeUnit.DataAzureadAdministrativeUnitTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadAdministrativeUnit.DataAzureadAdministrativeUnitTimeoutsOutputReference.property.read">Read</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadAdministrativeUnit.DataAzureadAdministrativeUnitTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadAdministrativeUnit.DataAzureadAdministrativeUnitTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azuread.dataAzureadAdministrativeUnit.DataAzureadAdministrativeUnitTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azuread.dataAzureadAdministrativeUnit.DataAzureadAdministrativeUnitTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-azuread.dataAzureadAdministrativeUnit.DataAzureadAdministrativeUnitTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-azuread.dataAzureadAdministrativeUnit.DataAzureadAdministrativeUnitTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-azuread.dataAzureadAdministrativeUnit.DataAzureadAdministrativeUnitTimeoutsOutputReference.property.readInput"></a>

```go
func ReadInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-azuread.dataAzureadAdministrativeUnit.DataAzureadAdministrativeUnitTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-azuread.dataAzureadAdministrativeUnit.DataAzureadAdministrativeUnitTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-azuread.dataAzureadAdministrativeUnit.DataAzureadAdministrativeUnitTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-azuread.dataAzureadAdministrativeUnit.DataAzureadAdministrativeUnitTimeoutsOutputReference.property.read"></a>

```go
func Read() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-azuread.dataAzureadAdministrativeUnit.DataAzureadAdministrativeUnitTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azuread.dataAzureadAdministrativeUnit.DataAzureadAdministrativeUnitTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



