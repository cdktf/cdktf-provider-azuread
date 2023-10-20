# `azuread_administrative_unit_member`

Refer to the Terraform Registory for docs: [`azuread_administrative_unit_member`](https://registry.terraform.io/providers/hashicorp/azuread/2.44.0/docs/resources/administrative_unit_member).

# `administrativeUnitMember` Submodule <a name="`administrativeUnitMember` Submodule" id="@cdktf/provider-azuread.administrativeUnitMember"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AdministrativeUnitMember <a name="AdministrativeUnitMember" id="@cdktf/provider-azuread.administrativeUnitMember.AdministrativeUnitMember"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azuread/2.44.0/docs/resources/administrative_unit_member azuread_administrative_unit_member}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azuread.administrativeUnitMember.AdministrativeUnitMember.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azuread-go/azuread/v11/administrativeunitmember"

administrativeunitmember.NewAdministrativeUnitMember(scope Construct, id *string, config AdministrativeUnitMemberConfig) AdministrativeUnitMember
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.administrativeUnitMember.AdministrativeUnitMember.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azuread.administrativeUnitMember.AdministrativeUnitMember.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azuread.administrativeUnitMember.AdministrativeUnitMember.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azuread.administrativeUnitMember.AdministrativeUnitMemberConfig">AdministrativeUnitMemberConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azuread.administrativeUnitMember.AdministrativeUnitMember.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azuread.administrativeUnitMember.AdministrativeUnitMember.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktf/provider-azuread.administrativeUnitMember.AdministrativeUnitMember.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azuread.administrativeUnitMember.AdministrativeUnitMemberConfig">AdministrativeUnitMemberConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azuread.administrativeUnitMember.AdministrativeUnitMember.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azuread.administrativeUnitMember.AdministrativeUnitMember.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.administrativeUnitMember.AdministrativeUnitMember.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azuread.administrativeUnitMember.AdministrativeUnitMember.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azuread.administrativeUnitMember.AdministrativeUnitMember.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.administrativeUnitMember.AdministrativeUnitMember.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azuread.administrativeUnitMember.AdministrativeUnitMember.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azuread.administrativeUnitMember.AdministrativeUnitMember.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.administrativeUnitMember.AdministrativeUnitMember.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.administrativeUnitMember.AdministrativeUnitMember.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.administrativeUnitMember.AdministrativeUnitMember.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.administrativeUnitMember.AdministrativeUnitMember.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.administrativeUnitMember.AdministrativeUnitMember.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.administrativeUnitMember.AdministrativeUnitMember.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.administrativeUnitMember.AdministrativeUnitMember.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.administrativeUnitMember.AdministrativeUnitMember.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.administrativeUnitMember.AdministrativeUnitMember.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.administrativeUnitMember.AdministrativeUnitMember.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.administrativeUnitMember.AdministrativeUnitMember.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azuread.administrativeUnitMember.AdministrativeUnitMember.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.administrativeUnitMember.AdministrativeUnitMember.resetAdministrativeUnitObjectId">ResetAdministrativeUnitObjectId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.administrativeUnitMember.AdministrativeUnitMember.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.administrativeUnitMember.AdministrativeUnitMember.resetMemberObjectId">ResetMemberObjectId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.administrativeUnitMember.AdministrativeUnitMember.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azuread.administrativeUnitMember.AdministrativeUnitMember.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-azuread.administrativeUnitMember.AdministrativeUnitMember.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azuread.administrativeUnitMember.AdministrativeUnitMember.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azuread.administrativeUnitMember.AdministrativeUnitMember.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-azuread.administrativeUnitMember.AdministrativeUnitMember.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azuread.administrativeUnitMember.AdministrativeUnitMember.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-azuread.administrativeUnitMember.AdministrativeUnitMember.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-azuread.administrativeUnitMember.AdministrativeUnitMember.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-azuread.administrativeUnitMember.AdministrativeUnitMember.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-azuread.administrativeUnitMember.AdministrativeUnitMember.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azuread.administrativeUnitMember.AdministrativeUnitMember.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azuread.administrativeUnitMember.AdministrativeUnitMember.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.administrativeUnitMember.AdministrativeUnitMember.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azuread.administrativeUnitMember.AdministrativeUnitMember.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.administrativeUnitMember.AdministrativeUnitMember.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azuread.administrativeUnitMember.AdministrativeUnitMember.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.administrativeUnitMember.AdministrativeUnitMember.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azuread.administrativeUnitMember.AdministrativeUnitMember.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.administrativeUnitMember.AdministrativeUnitMember.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azuread.administrativeUnitMember.AdministrativeUnitMember.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.administrativeUnitMember.AdministrativeUnitMember.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azuread.administrativeUnitMember.AdministrativeUnitMember.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.administrativeUnitMember.AdministrativeUnitMember.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azuread.administrativeUnitMember.AdministrativeUnitMember.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.administrativeUnitMember.AdministrativeUnitMember.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azuread.administrativeUnitMember.AdministrativeUnitMember.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.administrativeUnitMember.AdministrativeUnitMember.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azuread.administrativeUnitMember.AdministrativeUnitMember.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.administrativeUnitMember.AdministrativeUnitMember.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-azuread.administrativeUnitMember.AdministrativeUnitMember.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azuread.administrativeUnitMember.AdministrativeUnitMember.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azuread.administrativeUnitMember.AdministrativeUnitMember.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azuread.administrativeUnitMember.AdministrativeUnitMember.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.administrativeUnitMember.AdministrativeUnitMember.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-azuread.administrativeUnitMember.AdministrativeUnitMember.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azuread.administrativeUnitMember.AdministrativeUnitMember.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azuread.administrativeUnitMember.AdministrativeUnitMember.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-azuread.administrativeUnitMember.AdministrativeUnitMember.putTimeouts"></a>

```go
func PutTimeouts(value AdministrativeUnitMemberTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azuread.administrativeUnitMember.AdministrativeUnitMember.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azuread.administrativeUnitMember.AdministrativeUnitMemberTimeouts">AdministrativeUnitMemberTimeouts</a>

---

##### `ResetAdministrativeUnitObjectId` <a name="ResetAdministrativeUnitObjectId" id="@cdktf/provider-azuread.administrativeUnitMember.AdministrativeUnitMember.resetAdministrativeUnitObjectId"></a>

```go
func ResetAdministrativeUnitObjectId()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-azuread.administrativeUnitMember.AdministrativeUnitMember.resetId"></a>

```go
func ResetId()
```

##### `ResetMemberObjectId` <a name="ResetMemberObjectId" id="@cdktf/provider-azuread.administrativeUnitMember.AdministrativeUnitMember.resetMemberObjectId"></a>

```go
func ResetMemberObjectId()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-azuread.administrativeUnitMember.AdministrativeUnitMember.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azuread.administrativeUnitMember.AdministrativeUnitMember.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azuread.administrativeUnitMember.AdministrativeUnitMember.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.administrativeUnitMember.AdministrativeUnitMember.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.administrativeUnitMember.AdministrativeUnitMember.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a AdministrativeUnitMember resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-azuread.administrativeUnitMember.AdministrativeUnitMember.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-azuread-go/azuread/v11/administrativeunitmember"

administrativeunitmember.AdministrativeUnitMember_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azuread.administrativeUnitMember.AdministrativeUnitMember.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-azuread.administrativeUnitMember.AdministrativeUnitMember.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-azuread-go/azuread/v11/administrativeunitmember"

administrativeunitmember.AdministrativeUnitMember_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azuread.administrativeUnitMember.AdministrativeUnitMember.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-azuread.administrativeUnitMember.AdministrativeUnitMember.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-azuread-go/azuread/v11/administrativeunitmember"

administrativeunitmember.AdministrativeUnitMember_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azuread.administrativeUnitMember.AdministrativeUnitMember.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-azuread.administrativeUnitMember.AdministrativeUnitMember.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-azuread-go/azuread/v11/administrativeunitmember"

administrativeunitmember.AdministrativeUnitMember_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a AdministrativeUnitMember resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azuread.administrativeUnitMember.AdministrativeUnitMember.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azuread.administrativeUnitMember.AdministrativeUnitMember.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the AdministrativeUnitMember to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azuread.administrativeUnitMember.AdministrativeUnitMember.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing AdministrativeUnitMember that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azuread/2.44.0/docs/resources/administrative_unit_member#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azuread.administrativeUnitMember.AdministrativeUnitMember.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the AdministrativeUnitMember to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.administrativeUnitMember.AdministrativeUnitMember.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azuread.administrativeUnitMember.AdministrativeUnitMember.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.administrativeUnitMember.AdministrativeUnitMember.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.administrativeUnitMember.AdministrativeUnitMember.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.administrativeUnitMember.AdministrativeUnitMember.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.administrativeUnitMember.AdministrativeUnitMember.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.administrativeUnitMember.AdministrativeUnitMember.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.administrativeUnitMember.AdministrativeUnitMember.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.administrativeUnitMember.AdministrativeUnitMember.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.administrativeUnitMember.AdministrativeUnitMember.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.administrativeUnitMember.AdministrativeUnitMember.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.administrativeUnitMember.AdministrativeUnitMember.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.administrativeUnitMember.AdministrativeUnitMember.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.administrativeUnitMember.AdministrativeUnitMember.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.administrativeUnitMember.AdministrativeUnitMember.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azuread.administrativeUnitMember.AdministrativeUnitMemberTimeoutsOutputReference">AdministrativeUnitMemberTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.administrativeUnitMember.AdministrativeUnitMember.property.administrativeUnitObjectIdInput">AdministrativeUnitObjectIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.administrativeUnitMember.AdministrativeUnitMember.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.administrativeUnitMember.AdministrativeUnitMember.property.memberObjectIdInput">MemberObjectIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.administrativeUnitMember.AdministrativeUnitMember.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.administrativeUnitMember.AdministrativeUnitMember.property.administrativeUnitObjectId">AdministrativeUnitObjectId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.administrativeUnitMember.AdministrativeUnitMember.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.administrativeUnitMember.AdministrativeUnitMember.property.memberObjectId">MemberObjectId</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-azuread.administrativeUnitMember.AdministrativeUnitMember.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-azuread.administrativeUnitMember.AdministrativeUnitMember.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azuread.administrativeUnitMember.AdministrativeUnitMember.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-azuread.administrativeUnitMember.AdministrativeUnitMember.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-azuread.administrativeUnitMember.AdministrativeUnitMember.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-azuread.administrativeUnitMember.AdministrativeUnitMember.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-azuread.administrativeUnitMember.AdministrativeUnitMember.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azuread.administrativeUnitMember.AdministrativeUnitMember.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azuread.administrativeUnitMember.AdministrativeUnitMember.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azuread.administrativeUnitMember.AdministrativeUnitMember.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azuread.administrativeUnitMember.AdministrativeUnitMember.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azuread.administrativeUnitMember.AdministrativeUnitMember.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azuread.administrativeUnitMember.AdministrativeUnitMember.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azuread.administrativeUnitMember.AdministrativeUnitMember.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-azuread.administrativeUnitMember.AdministrativeUnitMember.property.timeouts"></a>

```go
func Timeouts() AdministrativeUnitMemberTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azuread.administrativeUnitMember.AdministrativeUnitMemberTimeoutsOutputReference">AdministrativeUnitMemberTimeoutsOutputReference</a>

---

##### `AdministrativeUnitObjectIdInput`<sup>Optional</sup> <a name="AdministrativeUnitObjectIdInput" id="@cdktf/provider-azuread.administrativeUnitMember.AdministrativeUnitMember.property.administrativeUnitObjectIdInput"></a>

```go
func AdministrativeUnitObjectIdInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azuread.administrativeUnitMember.AdministrativeUnitMember.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `MemberObjectIdInput`<sup>Optional</sup> <a name="MemberObjectIdInput" id="@cdktf/provider-azuread.administrativeUnitMember.AdministrativeUnitMember.property.memberObjectIdInput"></a>

```go
func MemberObjectIdInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-azuread.administrativeUnitMember.AdministrativeUnitMember.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `AdministrativeUnitObjectId`<sup>Required</sup> <a name="AdministrativeUnitObjectId" id="@cdktf/provider-azuread.administrativeUnitMember.AdministrativeUnitMember.property.administrativeUnitObjectId"></a>

```go
func AdministrativeUnitObjectId() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azuread.administrativeUnitMember.AdministrativeUnitMember.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `MemberObjectId`<sup>Required</sup> <a name="MemberObjectId" id="@cdktf/provider-azuread.administrativeUnitMember.AdministrativeUnitMember.property.memberObjectId"></a>

```go
func MemberObjectId() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.administrativeUnitMember.AdministrativeUnitMember.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-azuread.administrativeUnitMember.AdministrativeUnitMember.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### AdministrativeUnitMemberConfig <a name="AdministrativeUnitMemberConfig" id="@cdktf/provider-azuread.administrativeUnitMember.AdministrativeUnitMemberConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azuread.administrativeUnitMember.AdministrativeUnitMemberConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azuread-go/azuread/v11/administrativeunitmember"

&administrativeunitmember.AdministrativeUnitMemberConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	AdministrativeUnitObjectId: *string,
	Id: *string,
	MemberObjectId: *string,
	Timeouts: github.com/cdktf/cdktf-provider-azuread-go/azuread/v11.administrativeUnitMember.AdministrativeUnitMemberTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.administrativeUnitMember.AdministrativeUnitMemberConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.administrativeUnitMember.AdministrativeUnitMemberConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.administrativeUnitMember.AdministrativeUnitMemberConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.administrativeUnitMember.AdministrativeUnitMemberConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.administrativeUnitMember.AdministrativeUnitMemberConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.administrativeUnitMember.AdministrativeUnitMemberConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.administrativeUnitMember.AdministrativeUnitMemberConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.administrativeUnitMember.AdministrativeUnitMemberConfig.property.administrativeUnitObjectId">AdministrativeUnitObjectId</a></code> | <code>*string</code> | The object ID of the administrative unit. |
| <code><a href="#@cdktf/provider-azuread.administrativeUnitMember.AdministrativeUnitMemberConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.44.0/docs/resources/administrative_unit_member#id AdministrativeUnitMember#id}. |
| <code><a href="#@cdktf/provider-azuread.administrativeUnitMember.AdministrativeUnitMemberConfig.property.memberObjectId">MemberObjectId</a></code> | <code>*string</code> | The object ID of the member. |
| <code><a href="#@cdktf/provider-azuread.administrativeUnitMember.AdministrativeUnitMemberConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azuread.administrativeUnitMember.AdministrativeUnitMemberTimeouts">AdministrativeUnitMemberTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azuread.administrativeUnitMember.AdministrativeUnitMemberConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azuread.administrativeUnitMember.AdministrativeUnitMemberConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azuread.administrativeUnitMember.AdministrativeUnitMemberConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azuread.administrativeUnitMember.AdministrativeUnitMemberConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azuread.administrativeUnitMember.AdministrativeUnitMemberConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azuread.administrativeUnitMember.AdministrativeUnitMemberConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azuread.administrativeUnitMember.AdministrativeUnitMemberConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AdministrativeUnitObjectId`<sup>Optional</sup> <a name="AdministrativeUnitObjectId" id="@cdktf/provider-azuread.administrativeUnitMember.AdministrativeUnitMemberConfig.property.administrativeUnitObjectId"></a>

```go
AdministrativeUnitObjectId *string
```

- *Type:* *string

The object ID of the administrative unit.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.44.0/docs/resources/administrative_unit_member#administrative_unit_object_id AdministrativeUnitMember#administrative_unit_object_id}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-azuread.administrativeUnitMember.AdministrativeUnitMemberConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.44.0/docs/resources/administrative_unit_member#id AdministrativeUnitMember#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `MemberObjectId`<sup>Optional</sup> <a name="MemberObjectId" id="@cdktf/provider-azuread.administrativeUnitMember.AdministrativeUnitMemberConfig.property.memberObjectId"></a>

```go
MemberObjectId *string
```

- *Type:* *string

The object ID of the member.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.44.0/docs/resources/administrative_unit_member#member_object_id AdministrativeUnitMember#member_object_id}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-azuread.administrativeUnitMember.AdministrativeUnitMemberConfig.property.timeouts"></a>

```go
Timeouts AdministrativeUnitMemberTimeouts
```

- *Type:* <a href="#@cdktf/provider-azuread.administrativeUnitMember.AdministrativeUnitMemberTimeouts">AdministrativeUnitMemberTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.44.0/docs/resources/administrative_unit_member#timeouts AdministrativeUnitMember#timeouts}

---

### AdministrativeUnitMemberTimeouts <a name="AdministrativeUnitMemberTimeouts" id="@cdktf/provider-azuread.administrativeUnitMember.AdministrativeUnitMemberTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azuread.administrativeUnitMember.AdministrativeUnitMemberTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azuread-go/azuread/v11/administrativeunitmember"

&administrativeunitmember.AdministrativeUnitMemberTimeouts {
	Create: *string,
	Delete: *string,
	Read: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.administrativeUnitMember.AdministrativeUnitMemberTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.44.0/docs/resources/administrative_unit_member#create AdministrativeUnitMember#create}. |
| <code><a href="#@cdktf/provider-azuread.administrativeUnitMember.AdministrativeUnitMemberTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.44.0/docs/resources/administrative_unit_member#delete AdministrativeUnitMember#delete}. |
| <code><a href="#@cdktf/provider-azuread.administrativeUnitMember.AdministrativeUnitMemberTimeouts.property.read">Read</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.44.0/docs/resources/administrative_unit_member#read AdministrativeUnitMember#read}. |
| <code><a href="#@cdktf/provider-azuread.administrativeUnitMember.AdministrativeUnitMemberTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.44.0/docs/resources/administrative_unit_member#update AdministrativeUnitMember#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-azuread.administrativeUnitMember.AdministrativeUnitMemberTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.44.0/docs/resources/administrative_unit_member#create AdministrativeUnitMember#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-azuread.administrativeUnitMember.AdministrativeUnitMemberTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.44.0/docs/resources/administrative_unit_member#delete AdministrativeUnitMember#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-azuread.administrativeUnitMember.AdministrativeUnitMemberTimeouts.property.read"></a>

```go
Read *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.44.0/docs/resources/administrative_unit_member#read AdministrativeUnitMember#read}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-azuread.administrativeUnitMember.AdministrativeUnitMemberTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.44.0/docs/resources/administrative_unit_member#update AdministrativeUnitMember#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### AdministrativeUnitMemberTimeoutsOutputReference <a name="AdministrativeUnitMemberTimeoutsOutputReference" id="@cdktf/provider-azuread.administrativeUnitMember.AdministrativeUnitMemberTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azuread.administrativeUnitMember.AdministrativeUnitMemberTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azuread-go/azuread/v11/administrativeunitmember"

administrativeunitmember.NewAdministrativeUnitMemberTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) AdministrativeUnitMemberTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.administrativeUnitMember.AdministrativeUnitMemberTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azuread.administrativeUnitMember.AdministrativeUnitMemberTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azuread.administrativeUnitMember.AdministrativeUnitMemberTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.administrativeUnitMember.AdministrativeUnitMemberTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azuread.administrativeUnitMember.AdministrativeUnitMemberTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.administrativeUnitMember.AdministrativeUnitMemberTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.administrativeUnitMember.AdministrativeUnitMemberTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.administrativeUnitMember.AdministrativeUnitMemberTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.administrativeUnitMember.AdministrativeUnitMemberTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.administrativeUnitMember.AdministrativeUnitMemberTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.administrativeUnitMember.AdministrativeUnitMemberTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.administrativeUnitMember.AdministrativeUnitMemberTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.administrativeUnitMember.AdministrativeUnitMemberTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.administrativeUnitMember.AdministrativeUnitMemberTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.administrativeUnitMember.AdministrativeUnitMemberTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.administrativeUnitMember.AdministrativeUnitMemberTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azuread.administrativeUnitMember.AdministrativeUnitMemberTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azuread.administrativeUnitMember.AdministrativeUnitMemberTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.administrativeUnitMember.AdministrativeUnitMemberTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.administrativeUnitMember.AdministrativeUnitMemberTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.administrativeUnitMember.AdministrativeUnitMemberTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azuread.administrativeUnitMember.AdministrativeUnitMemberTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azuread.administrativeUnitMember.AdministrativeUnitMemberTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.administrativeUnitMember.AdministrativeUnitMemberTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azuread.administrativeUnitMember.AdministrativeUnitMemberTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.administrativeUnitMember.AdministrativeUnitMemberTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azuread.administrativeUnitMember.AdministrativeUnitMemberTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.administrativeUnitMember.AdministrativeUnitMemberTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azuread.administrativeUnitMember.AdministrativeUnitMemberTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.administrativeUnitMember.AdministrativeUnitMemberTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azuread.administrativeUnitMember.AdministrativeUnitMemberTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.administrativeUnitMember.AdministrativeUnitMemberTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azuread.administrativeUnitMember.AdministrativeUnitMemberTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.administrativeUnitMember.AdministrativeUnitMemberTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azuread.administrativeUnitMember.AdministrativeUnitMemberTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.administrativeUnitMember.AdministrativeUnitMemberTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azuread.administrativeUnitMember.AdministrativeUnitMemberTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.administrativeUnitMember.AdministrativeUnitMemberTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azuread.administrativeUnitMember.AdministrativeUnitMemberTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.administrativeUnitMember.AdministrativeUnitMemberTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azuread.administrativeUnitMember.AdministrativeUnitMemberTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azuread.administrativeUnitMember.AdministrativeUnitMemberTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azuread.administrativeUnitMember.AdministrativeUnitMemberTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azuread.administrativeUnitMember.AdministrativeUnitMemberTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azuread.administrativeUnitMember.AdministrativeUnitMemberTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-azuread.administrativeUnitMember.AdministrativeUnitMemberTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-azuread.administrativeUnitMember.AdministrativeUnitMemberTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-azuread.administrativeUnitMember.AdministrativeUnitMemberTimeoutsOutputReference.resetRead"></a>

```go
func ResetRead()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-azuread.administrativeUnitMember.AdministrativeUnitMemberTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.administrativeUnitMember.AdministrativeUnitMemberTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azuread.administrativeUnitMember.AdministrativeUnitMemberTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.administrativeUnitMember.AdministrativeUnitMemberTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.administrativeUnitMember.AdministrativeUnitMemberTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.administrativeUnitMember.AdministrativeUnitMemberTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.administrativeUnitMember.AdministrativeUnitMemberTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.administrativeUnitMember.AdministrativeUnitMemberTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.administrativeUnitMember.AdministrativeUnitMemberTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.administrativeUnitMember.AdministrativeUnitMemberTimeoutsOutputReference.property.read">Read</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.administrativeUnitMember.AdministrativeUnitMemberTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.administrativeUnitMember.AdministrativeUnitMemberTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azuread.administrativeUnitMember.AdministrativeUnitMemberTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azuread.administrativeUnitMember.AdministrativeUnitMemberTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-azuread.administrativeUnitMember.AdministrativeUnitMemberTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-azuread.administrativeUnitMember.AdministrativeUnitMemberTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-azuread.administrativeUnitMember.AdministrativeUnitMemberTimeoutsOutputReference.property.readInput"></a>

```go
func ReadInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-azuread.administrativeUnitMember.AdministrativeUnitMemberTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-azuread.administrativeUnitMember.AdministrativeUnitMemberTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-azuread.administrativeUnitMember.AdministrativeUnitMemberTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-azuread.administrativeUnitMember.AdministrativeUnitMemberTimeoutsOutputReference.property.read"></a>

```go
func Read() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-azuread.administrativeUnitMember.AdministrativeUnitMemberTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azuread.administrativeUnitMember.AdministrativeUnitMemberTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



