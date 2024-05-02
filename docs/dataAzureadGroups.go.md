# `dataAzureadGroups` Submodule <a name="`dataAzureadGroups` Submodule" id="@cdktf/provider-azuread.dataAzureadGroups"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAzureadGroups <a name="DataAzureadGroups" id="@cdktf/provider-azuread.dataAzureadGroups.DataAzureadGroups"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azuread/2.48.0/docs/data-sources/groups azuread_groups}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azuread.dataAzureadGroups.DataAzureadGroups.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azuread-go/azuread/v12/dataazureadgroups"

dataazureadgroups.NewDataAzureadGroups(scope Construct, id *string, config DataAzureadGroupsConfig) DataAzureadGroups
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.dataAzureadGroups.DataAzureadGroups.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azuread.dataAzureadGroups.DataAzureadGroups.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azuread.dataAzureadGroups.DataAzureadGroups.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azuread.dataAzureadGroups.DataAzureadGroupsConfig">DataAzureadGroupsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azuread.dataAzureadGroups.DataAzureadGroups.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azuread.dataAzureadGroups.DataAzureadGroups.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktf/provider-azuread.dataAzureadGroups.DataAzureadGroups.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azuread.dataAzureadGroups.DataAzureadGroupsConfig">DataAzureadGroupsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azuread.dataAzureadGroups.DataAzureadGroups.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azuread.dataAzureadGroups.DataAzureadGroups.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadGroups.DataAzureadGroups.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azuread.dataAzureadGroups.DataAzureadGroups.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azuread.dataAzureadGroups.DataAzureadGroups.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azuread.dataAzureadGroups.DataAzureadGroups.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadGroups.DataAzureadGroups.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azuread.dataAzureadGroups.DataAzureadGroups.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadGroups.DataAzureadGroups.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadGroups.DataAzureadGroups.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadGroups.DataAzureadGroups.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadGroups.DataAzureadGroups.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadGroups.DataAzureadGroups.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadGroups.DataAzureadGroups.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadGroups.DataAzureadGroups.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadGroups.DataAzureadGroups.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadGroups.DataAzureadGroups.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadGroups.DataAzureadGroups.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadGroups.DataAzureadGroups.resetDisplayNamePrefix">ResetDisplayNamePrefix</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadGroups.DataAzureadGroups.resetDisplayNames">ResetDisplayNames</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadGroups.DataAzureadGroups.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadGroups.DataAzureadGroups.resetIgnoreMissing">ResetIgnoreMissing</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadGroups.DataAzureadGroups.resetMailEnabled">ResetMailEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadGroups.DataAzureadGroups.resetObjectIds">ResetObjectIds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadGroups.DataAzureadGroups.resetReturnAll">ResetReturnAll</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadGroups.DataAzureadGroups.resetSecurityEnabled">ResetSecurityEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadGroups.DataAzureadGroups.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azuread.dataAzureadGroups.DataAzureadGroups.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-azuread.dataAzureadGroups.DataAzureadGroups.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azuread.dataAzureadGroups.DataAzureadGroups.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azuread.dataAzureadGroups.DataAzureadGroups.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-azuread.dataAzureadGroups.DataAzureadGroups.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azuread.dataAzureadGroups.DataAzureadGroups.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-azuread.dataAzureadGroups.DataAzureadGroups.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-azuread.dataAzureadGroups.DataAzureadGroups.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-azuread.dataAzureadGroups.DataAzureadGroups.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-azuread.dataAzureadGroups.DataAzureadGroups.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azuread.dataAzureadGroups.DataAzureadGroups.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.dataAzureadGroups.DataAzureadGroups.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azuread.dataAzureadGroups.DataAzureadGroups.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.dataAzureadGroups.DataAzureadGroups.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azuread.dataAzureadGroups.DataAzureadGroups.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.dataAzureadGroups.DataAzureadGroups.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azuread.dataAzureadGroups.DataAzureadGroups.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.dataAzureadGroups.DataAzureadGroups.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azuread.dataAzureadGroups.DataAzureadGroups.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.dataAzureadGroups.DataAzureadGroups.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azuread.dataAzureadGroups.DataAzureadGroups.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.dataAzureadGroups.DataAzureadGroups.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azuread.dataAzureadGroups.DataAzureadGroups.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.dataAzureadGroups.DataAzureadGroups.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azuread.dataAzureadGroups.DataAzureadGroups.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.dataAzureadGroups.DataAzureadGroups.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azuread.dataAzureadGroups.DataAzureadGroups.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.dataAzureadGroups.DataAzureadGroups.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azuread.dataAzureadGroups.DataAzureadGroups.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.dataAzureadGroups.DataAzureadGroups.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-azuread.dataAzureadGroups.DataAzureadGroups.putTimeouts"></a>

```go
func PutTimeouts(value DataAzureadGroupsTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azuread.dataAzureadGroups.DataAzureadGroups.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azuread.dataAzureadGroups.DataAzureadGroupsTimeouts">DataAzureadGroupsTimeouts</a>

---

##### `ResetDisplayNamePrefix` <a name="ResetDisplayNamePrefix" id="@cdktf/provider-azuread.dataAzureadGroups.DataAzureadGroups.resetDisplayNamePrefix"></a>

```go
func ResetDisplayNamePrefix()
```

##### `ResetDisplayNames` <a name="ResetDisplayNames" id="@cdktf/provider-azuread.dataAzureadGroups.DataAzureadGroups.resetDisplayNames"></a>

```go
func ResetDisplayNames()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-azuread.dataAzureadGroups.DataAzureadGroups.resetId"></a>

```go
func ResetId()
```

##### `ResetIgnoreMissing` <a name="ResetIgnoreMissing" id="@cdktf/provider-azuread.dataAzureadGroups.DataAzureadGroups.resetIgnoreMissing"></a>

```go
func ResetIgnoreMissing()
```

##### `ResetMailEnabled` <a name="ResetMailEnabled" id="@cdktf/provider-azuread.dataAzureadGroups.DataAzureadGroups.resetMailEnabled"></a>

```go
func ResetMailEnabled()
```

##### `ResetObjectIds` <a name="ResetObjectIds" id="@cdktf/provider-azuread.dataAzureadGroups.DataAzureadGroups.resetObjectIds"></a>

```go
func ResetObjectIds()
```

##### `ResetReturnAll` <a name="ResetReturnAll" id="@cdktf/provider-azuread.dataAzureadGroups.DataAzureadGroups.resetReturnAll"></a>

```go
func ResetReturnAll()
```

##### `ResetSecurityEnabled` <a name="ResetSecurityEnabled" id="@cdktf/provider-azuread.dataAzureadGroups.DataAzureadGroups.resetSecurityEnabled"></a>

```go
func ResetSecurityEnabled()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-azuread.dataAzureadGroups.DataAzureadGroups.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azuread.dataAzureadGroups.DataAzureadGroups.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azuread.dataAzureadGroups.DataAzureadGroups.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadGroups.DataAzureadGroups.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadGroups.DataAzureadGroups.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataAzureadGroups resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-azuread.dataAzureadGroups.DataAzureadGroups.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-azuread-go/azuread/v12/dataazureadgroups"

dataazureadgroups.DataAzureadGroups_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azuread.dataAzureadGroups.DataAzureadGroups.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-azuread.dataAzureadGroups.DataAzureadGroups.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-azuread-go/azuread/v12/dataazureadgroups"

dataazureadgroups.DataAzureadGroups_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azuread.dataAzureadGroups.DataAzureadGroups.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-azuread.dataAzureadGroups.DataAzureadGroups.isTerraformDataSource"></a>

```go
import "github.com/cdktf/cdktf-provider-azuread-go/azuread/v12/dataazureadgroups"

dataazureadgroups.DataAzureadGroups_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azuread.dataAzureadGroups.DataAzureadGroups.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-azuread.dataAzureadGroups.DataAzureadGroups.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-azuread-go/azuread/v12/dataazureadgroups"

dataazureadgroups.DataAzureadGroups_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataAzureadGroups resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azuread.dataAzureadGroups.DataAzureadGroups.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azuread.dataAzureadGroups.DataAzureadGroups.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataAzureadGroups to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azuread.dataAzureadGroups.DataAzureadGroups.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataAzureadGroups that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azuread/2.48.0/docs/data-sources/groups#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azuread.dataAzureadGroups.DataAzureadGroups.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataAzureadGroups to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.dataAzureadGroups.DataAzureadGroups.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azuread.dataAzureadGroups.DataAzureadGroups.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadGroups.DataAzureadGroups.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadGroups.DataAzureadGroups.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadGroups.DataAzureadGroups.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadGroups.DataAzureadGroups.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadGroups.DataAzureadGroups.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadGroups.DataAzureadGroups.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadGroups.DataAzureadGroups.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadGroups.DataAzureadGroups.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadGroups.DataAzureadGroups.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadGroups.DataAzureadGroups.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadGroups.DataAzureadGroups.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azuread.dataAzureadGroups.DataAzureadGroupsTimeoutsOutputReference">DataAzureadGroupsTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadGroups.DataAzureadGroups.property.displayNamePrefixInput">DisplayNamePrefixInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadGroups.DataAzureadGroups.property.displayNamesInput">DisplayNamesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadGroups.DataAzureadGroups.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadGroups.DataAzureadGroups.property.ignoreMissingInput">IgnoreMissingInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadGroups.DataAzureadGroups.property.mailEnabledInput">MailEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadGroups.DataAzureadGroups.property.objectIdsInput">ObjectIdsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadGroups.DataAzureadGroups.property.returnAllInput">ReturnAllInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadGroups.DataAzureadGroups.property.securityEnabledInput">SecurityEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadGroups.DataAzureadGroups.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadGroups.DataAzureadGroups.property.displayNamePrefix">DisplayNamePrefix</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadGroups.DataAzureadGroups.property.displayNames">DisplayNames</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadGroups.DataAzureadGroups.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadGroups.DataAzureadGroups.property.ignoreMissing">IgnoreMissing</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadGroups.DataAzureadGroups.property.mailEnabled">MailEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadGroups.DataAzureadGroups.property.objectIds">ObjectIds</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadGroups.DataAzureadGroups.property.returnAll">ReturnAll</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadGroups.DataAzureadGroups.property.securityEnabled">SecurityEnabled</a></code> | <code>interface{}</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-azuread.dataAzureadGroups.DataAzureadGroups.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-azuread.dataAzureadGroups.DataAzureadGroups.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azuread.dataAzureadGroups.DataAzureadGroups.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-azuread.dataAzureadGroups.DataAzureadGroups.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-azuread.dataAzureadGroups.DataAzureadGroups.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-azuread.dataAzureadGroups.DataAzureadGroups.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-azuread.dataAzureadGroups.DataAzureadGroups.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azuread.dataAzureadGroups.DataAzureadGroups.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azuread.dataAzureadGroups.DataAzureadGroups.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azuread.dataAzureadGroups.DataAzureadGroups.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azuread.dataAzureadGroups.DataAzureadGroups.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azuread.dataAzureadGroups.DataAzureadGroups.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-azuread.dataAzureadGroups.DataAzureadGroups.property.timeouts"></a>

```go
func Timeouts() DataAzureadGroupsTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azuread.dataAzureadGroups.DataAzureadGroupsTimeoutsOutputReference">DataAzureadGroupsTimeoutsOutputReference</a>

---

##### `DisplayNamePrefixInput`<sup>Optional</sup> <a name="DisplayNamePrefixInput" id="@cdktf/provider-azuread.dataAzureadGroups.DataAzureadGroups.property.displayNamePrefixInput"></a>

```go
func DisplayNamePrefixInput() *string
```

- *Type:* *string

---

##### `DisplayNamesInput`<sup>Optional</sup> <a name="DisplayNamesInput" id="@cdktf/provider-azuread.dataAzureadGroups.DataAzureadGroups.property.displayNamesInput"></a>

```go
func DisplayNamesInput() *[]*string
```

- *Type:* *[]*string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azuread.dataAzureadGroups.DataAzureadGroups.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `IgnoreMissingInput`<sup>Optional</sup> <a name="IgnoreMissingInput" id="@cdktf/provider-azuread.dataAzureadGroups.DataAzureadGroups.property.ignoreMissingInput"></a>

```go
func IgnoreMissingInput() interface{}
```

- *Type:* interface{}

---

##### `MailEnabledInput`<sup>Optional</sup> <a name="MailEnabledInput" id="@cdktf/provider-azuread.dataAzureadGroups.DataAzureadGroups.property.mailEnabledInput"></a>

```go
func MailEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `ObjectIdsInput`<sup>Optional</sup> <a name="ObjectIdsInput" id="@cdktf/provider-azuread.dataAzureadGroups.DataAzureadGroups.property.objectIdsInput"></a>

```go
func ObjectIdsInput() *[]*string
```

- *Type:* *[]*string

---

##### `ReturnAllInput`<sup>Optional</sup> <a name="ReturnAllInput" id="@cdktf/provider-azuread.dataAzureadGroups.DataAzureadGroups.property.returnAllInput"></a>

```go
func ReturnAllInput() interface{}
```

- *Type:* interface{}

---

##### `SecurityEnabledInput`<sup>Optional</sup> <a name="SecurityEnabledInput" id="@cdktf/provider-azuread.dataAzureadGroups.DataAzureadGroups.property.securityEnabledInput"></a>

```go
func SecurityEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-azuread.dataAzureadGroups.DataAzureadGroups.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `DisplayNamePrefix`<sup>Required</sup> <a name="DisplayNamePrefix" id="@cdktf/provider-azuread.dataAzureadGroups.DataAzureadGroups.property.displayNamePrefix"></a>

```go
func DisplayNamePrefix() *string
```

- *Type:* *string

---

##### `DisplayNames`<sup>Required</sup> <a name="DisplayNames" id="@cdktf/provider-azuread.dataAzureadGroups.DataAzureadGroups.property.displayNames"></a>

```go
func DisplayNames() *[]*string
```

- *Type:* *[]*string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azuread.dataAzureadGroups.DataAzureadGroups.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `IgnoreMissing`<sup>Required</sup> <a name="IgnoreMissing" id="@cdktf/provider-azuread.dataAzureadGroups.DataAzureadGroups.property.ignoreMissing"></a>

```go
func IgnoreMissing() interface{}
```

- *Type:* interface{}

---

##### `MailEnabled`<sup>Required</sup> <a name="MailEnabled" id="@cdktf/provider-azuread.dataAzureadGroups.DataAzureadGroups.property.mailEnabled"></a>

```go
func MailEnabled() interface{}
```

- *Type:* interface{}

---

##### `ObjectIds`<sup>Required</sup> <a name="ObjectIds" id="@cdktf/provider-azuread.dataAzureadGroups.DataAzureadGroups.property.objectIds"></a>

```go
func ObjectIds() *[]*string
```

- *Type:* *[]*string

---

##### `ReturnAll`<sup>Required</sup> <a name="ReturnAll" id="@cdktf/provider-azuread.dataAzureadGroups.DataAzureadGroups.property.returnAll"></a>

```go
func ReturnAll() interface{}
```

- *Type:* interface{}

---

##### `SecurityEnabled`<sup>Required</sup> <a name="SecurityEnabled" id="@cdktf/provider-azuread.dataAzureadGroups.DataAzureadGroups.property.securityEnabled"></a>

```go
func SecurityEnabled() interface{}
```

- *Type:* interface{}

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.dataAzureadGroups.DataAzureadGroups.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-azuread.dataAzureadGroups.DataAzureadGroups.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAzureadGroupsConfig <a name="DataAzureadGroupsConfig" id="@cdktf/provider-azuread.dataAzureadGroups.DataAzureadGroupsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azuread.dataAzureadGroups.DataAzureadGroupsConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azuread-go/azuread/v12/dataazureadgroups"

&dataazureadgroups.DataAzureadGroupsConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	DisplayNamePrefix: *string,
	DisplayNames: *[]*string,
	Id: *string,
	IgnoreMissing: interface{},
	MailEnabled: interface{},
	ObjectIds: *[]*string,
	ReturnAll: interface{},
	SecurityEnabled: interface{},
	Timeouts: github.com/cdktf/cdktf-provider-azuread-go/azuread/v12.dataAzureadGroups.DataAzureadGroupsTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.dataAzureadGroups.DataAzureadGroupsConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadGroups.DataAzureadGroupsConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadGroups.DataAzureadGroupsConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadGroups.DataAzureadGroupsConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadGroups.DataAzureadGroupsConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadGroups.DataAzureadGroupsConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadGroups.DataAzureadGroupsConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadGroups.DataAzureadGroupsConfig.property.displayNamePrefix">DisplayNamePrefix</a></code> | <code>*string</code> | Common display name prefix of the groups. |
| <code><a href="#@cdktf/provider-azuread.dataAzureadGroups.DataAzureadGroupsConfig.property.displayNames">DisplayNames</a></code> | <code>*[]*string</code> | The display names of the groups. |
| <code><a href="#@cdktf/provider-azuread.dataAzureadGroups.DataAzureadGroupsConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.48.0/docs/data-sources/groups#id DataAzureadGroups#id}. |
| <code><a href="#@cdktf/provider-azuread.dataAzureadGroups.DataAzureadGroupsConfig.property.ignoreMissing">IgnoreMissing</a></code> | <code>interface{}</code> | Ignore missing groups and return groups that were found. |
| <code><a href="#@cdktf/provider-azuread.dataAzureadGroups.DataAzureadGroupsConfig.property.mailEnabled">MailEnabled</a></code> | <code>interface{}</code> | Whether the groups are mail-enabled. |
| <code><a href="#@cdktf/provider-azuread.dataAzureadGroups.DataAzureadGroupsConfig.property.objectIds">ObjectIds</a></code> | <code>*[]*string</code> | The object IDs of the groups. |
| <code><a href="#@cdktf/provider-azuread.dataAzureadGroups.DataAzureadGroupsConfig.property.returnAll">ReturnAll</a></code> | <code>interface{}</code> | Retrieve all groups with no filter. |
| <code><a href="#@cdktf/provider-azuread.dataAzureadGroups.DataAzureadGroupsConfig.property.securityEnabled">SecurityEnabled</a></code> | <code>interface{}</code> | Whether the groups are security-enabled. |
| <code><a href="#@cdktf/provider-azuread.dataAzureadGroups.DataAzureadGroupsConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azuread.dataAzureadGroups.DataAzureadGroupsTimeouts">DataAzureadGroupsTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azuread.dataAzureadGroups.DataAzureadGroupsConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azuread.dataAzureadGroups.DataAzureadGroupsConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azuread.dataAzureadGroups.DataAzureadGroupsConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azuread.dataAzureadGroups.DataAzureadGroupsConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azuread.dataAzureadGroups.DataAzureadGroupsConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azuread.dataAzureadGroups.DataAzureadGroupsConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azuread.dataAzureadGroups.DataAzureadGroupsConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `DisplayNamePrefix`<sup>Optional</sup> <a name="DisplayNamePrefix" id="@cdktf/provider-azuread.dataAzureadGroups.DataAzureadGroupsConfig.property.displayNamePrefix"></a>

```go
DisplayNamePrefix *string
```

- *Type:* *string

Common display name prefix of the groups.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.48.0/docs/data-sources/groups#display_name_prefix DataAzureadGroups#display_name_prefix}

---

##### `DisplayNames`<sup>Optional</sup> <a name="DisplayNames" id="@cdktf/provider-azuread.dataAzureadGroups.DataAzureadGroupsConfig.property.displayNames"></a>

```go
DisplayNames *[]*string
```

- *Type:* *[]*string

The display names of the groups.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.48.0/docs/data-sources/groups#display_names DataAzureadGroups#display_names}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-azuread.dataAzureadGroups.DataAzureadGroupsConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.48.0/docs/data-sources/groups#id DataAzureadGroups#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `IgnoreMissing`<sup>Optional</sup> <a name="IgnoreMissing" id="@cdktf/provider-azuread.dataAzureadGroups.DataAzureadGroupsConfig.property.ignoreMissing"></a>

```go
IgnoreMissing interface{}
```

- *Type:* interface{}

Ignore missing groups and return groups that were found.

The data source will still fail if no groups are found

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.48.0/docs/data-sources/groups#ignore_missing DataAzureadGroups#ignore_missing}

---

##### `MailEnabled`<sup>Optional</sup> <a name="MailEnabled" id="@cdktf/provider-azuread.dataAzureadGroups.DataAzureadGroupsConfig.property.mailEnabled"></a>

```go
MailEnabled interface{}
```

- *Type:* interface{}

Whether the groups are mail-enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.48.0/docs/data-sources/groups#mail_enabled DataAzureadGroups#mail_enabled}

---

##### `ObjectIds`<sup>Optional</sup> <a name="ObjectIds" id="@cdktf/provider-azuread.dataAzureadGroups.DataAzureadGroupsConfig.property.objectIds"></a>

```go
ObjectIds *[]*string
```

- *Type:* *[]*string

The object IDs of the groups.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.48.0/docs/data-sources/groups#object_ids DataAzureadGroups#object_ids}

---

##### `ReturnAll`<sup>Optional</sup> <a name="ReturnAll" id="@cdktf/provider-azuread.dataAzureadGroups.DataAzureadGroupsConfig.property.returnAll"></a>

```go
ReturnAll interface{}
```

- *Type:* interface{}

Retrieve all groups with no filter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.48.0/docs/data-sources/groups#return_all DataAzureadGroups#return_all}

---

##### `SecurityEnabled`<sup>Optional</sup> <a name="SecurityEnabled" id="@cdktf/provider-azuread.dataAzureadGroups.DataAzureadGroupsConfig.property.securityEnabled"></a>

```go
SecurityEnabled interface{}
```

- *Type:* interface{}

Whether the groups are security-enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.48.0/docs/data-sources/groups#security_enabled DataAzureadGroups#security_enabled}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-azuread.dataAzureadGroups.DataAzureadGroupsConfig.property.timeouts"></a>

```go
Timeouts DataAzureadGroupsTimeouts
```

- *Type:* <a href="#@cdktf/provider-azuread.dataAzureadGroups.DataAzureadGroupsTimeouts">DataAzureadGroupsTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.48.0/docs/data-sources/groups#timeouts DataAzureadGroups#timeouts}

---

### DataAzureadGroupsTimeouts <a name="DataAzureadGroupsTimeouts" id="@cdktf/provider-azuread.dataAzureadGroups.DataAzureadGroupsTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azuread.dataAzureadGroups.DataAzureadGroupsTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azuread-go/azuread/v12/dataazureadgroups"

&dataazureadgroups.DataAzureadGroupsTimeouts {
	Read: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.dataAzureadGroups.DataAzureadGroupsTimeouts.property.read">Read</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.48.0/docs/data-sources/groups#read DataAzureadGroups#read}. |

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-azuread.dataAzureadGroups.DataAzureadGroupsTimeouts.property.read"></a>

```go
Read *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.48.0/docs/data-sources/groups#read DataAzureadGroups#read}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataAzureadGroupsTimeoutsOutputReference <a name="DataAzureadGroupsTimeoutsOutputReference" id="@cdktf/provider-azuread.dataAzureadGroups.DataAzureadGroupsTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azuread.dataAzureadGroups.DataAzureadGroupsTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azuread-go/azuread/v12/dataazureadgroups"

dataazureadgroups.NewDataAzureadGroupsTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAzureadGroupsTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.dataAzureadGroups.DataAzureadGroupsTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azuread.dataAzureadGroups.DataAzureadGroupsTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azuread.dataAzureadGroups.DataAzureadGroupsTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.dataAzureadGroups.DataAzureadGroupsTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azuread.dataAzureadGroups.DataAzureadGroupsTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadGroups.DataAzureadGroupsTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadGroups.DataAzureadGroupsTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadGroups.DataAzureadGroupsTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadGroups.DataAzureadGroupsTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadGroups.DataAzureadGroupsTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadGroups.DataAzureadGroupsTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadGroups.DataAzureadGroupsTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadGroups.DataAzureadGroupsTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadGroups.DataAzureadGroupsTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadGroups.DataAzureadGroupsTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadGroups.DataAzureadGroupsTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azuread.dataAzureadGroups.DataAzureadGroupsTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azuread.dataAzureadGroups.DataAzureadGroupsTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azuread.dataAzureadGroups.DataAzureadGroupsTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azuread.dataAzureadGroups.DataAzureadGroupsTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.dataAzureadGroups.DataAzureadGroupsTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azuread.dataAzureadGroups.DataAzureadGroupsTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.dataAzureadGroups.DataAzureadGroupsTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azuread.dataAzureadGroups.DataAzureadGroupsTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.dataAzureadGroups.DataAzureadGroupsTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azuread.dataAzureadGroups.DataAzureadGroupsTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.dataAzureadGroups.DataAzureadGroupsTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azuread.dataAzureadGroups.DataAzureadGroupsTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.dataAzureadGroups.DataAzureadGroupsTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azuread.dataAzureadGroups.DataAzureadGroupsTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.dataAzureadGroups.DataAzureadGroupsTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azuread.dataAzureadGroups.DataAzureadGroupsTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.dataAzureadGroups.DataAzureadGroupsTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azuread.dataAzureadGroups.DataAzureadGroupsTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.dataAzureadGroups.DataAzureadGroupsTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azuread.dataAzureadGroups.DataAzureadGroupsTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.dataAzureadGroups.DataAzureadGroupsTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azuread.dataAzureadGroups.DataAzureadGroupsTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azuread.dataAzureadGroups.DataAzureadGroupsTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azuread.dataAzureadGroups.DataAzureadGroupsTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azuread.dataAzureadGroups.DataAzureadGroupsTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azuread.dataAzureadGroups.DataAzureadGroupsTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-azuread.dataAzureadGroups.DataAzureadGroupsTimeoutsOutputReference.resetRead"></a>

```go
func ResetRead()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.dataAzureadGroups.DataAzureadGroupsTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azuread.dataAzureadGroups.DataAzureadGroupsTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadGroups.DataAzureadGroupsTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadGroups.DataAzureadGroupsTimeoutsOutputReference.property.read">Read</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadGroups.DataAzureadGroupsTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azuread.dataAzureadGroups.DataAzureadGroupsTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azuread.dataAzureadGroups.DataAzureadGroupsTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-azuread.dataAzureadGroups.DataAzureadGroupsTimeoutsOutputReference.property.readInput"></a>

```go
func ReadInput() *string
```

- *Type:* *string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-azuread.dataAzureadGroups.DataAzureadGroupsTimeoutsOutputReference.property.read"></a>

```go
func Read() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azuread.dataAzureadGroups.DataAzureadGroupsTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



