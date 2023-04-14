# `administrativeUnitRoleMember` Submodule <a name="`administrativeUnitRoleMember` Submodule" id="@cdktf/provider-azuread.administrativeUnitRoleMember"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AdministrativeUnitRoleMember <a name="AdministrativeUnitRoleMember" id="@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMember"></a>

Represents a {@link https://www.terraform.io/docs/providers/azuread/r/administrative_unit_role_member azuread_administrative_unit_role_member}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMember.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azuread-go/azuread/v6/administrativeunitrolemember"

administrativeunitrolemember.NewAdministrativeUnitRoleMember(scope Construct, id *string, config AdministrativeUnitRoleMemberConfig) AdministrativeUnitRoleMember
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMember.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMember.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMember.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMemberConfig">AdministrativeUnitRoleMemberConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMember.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMember.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMember.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMemberConfig">AdministrativeUnitRoleMemberConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMember.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMember.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMember.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMember.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMember.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMember.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMember.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMember.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMember.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMember.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMember.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMember.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMember.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMember.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMember.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMember.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMember.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMember.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMember.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMember.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMember.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMember.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMember.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMember.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMember.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMember.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMember.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMember.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMember.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMember.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMember.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMember.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMember.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMember.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMember.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMember.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMember.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMember.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMember.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMember.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMember.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMember.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMember.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMember.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMember.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMember.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMember.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMember.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMember.putTimeouts"></a>

```go
func PutTimeouts(value AdministrativeUnitRoleMemberTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMember.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMemberTimeouts">AdministrativeUnitRoleMemberTimeouts</a>

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMember.resetId"></a>

```go
func ResetId()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMember.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMember.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMember.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMember.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMember.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-azuread-go/azuread/v6/administrativeunitrolemember"

administrativeunitrolemember.AdministrativeUnitRoleMember_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMember.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMember.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-azuread-go/azuread/v6/administrativeunitrolemember"

administrativeunitrolemember.AdministrativeUnitRoleMember_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMember.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMember.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-azuread-go/azuread/v6/administrativeunitrolemember"

administrativeunitrolemember.AdministrativeUnitRoleMember_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMember.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMember.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMember.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMember.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMember.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMember.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMember.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMember.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMember.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMember.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMember.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMember.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMember.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMember.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMember.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMember.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMemberTimeoutsOutputReference">AdministrativeUnitRoleMemberTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMember.property.administrativeUnitObjectIdInput">AdministrativeUnitObjectIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMember.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMember.property.memberObjectIdInput">MemberObjectIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMember.property.roleObjectIdInput">RoleObjectIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMember.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMember.property.administrativeUnitObjectId">AdministrativeUnitObjectId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMember.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMember.property.memberObjectId">MemberObjectId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMember.property.roleObjectId">RoleObjectId</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMember.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMember.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMember.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMember.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMember.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMember.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMember.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMember.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMember.property.count"></a>

```go
func Count() *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMember.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMember.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMember.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMember.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMember.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMember.property.timeouts"></a>

```go
func Timeouts() AdministrativeUnitRoleMemberTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMemberTimeoutsOutputReference">AdministrativeUnitRoleMemberTimeoutsOutputReference</a>

---

##### `AdministrativeUnitObjectIdInput`<sup>Optional</sup> <a name="AdministrativeUnitObjectIdInput" id="@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMember.property.administrativeUnitObjectIdInput"></a>

```go
func AdministrativeUnitObjectIdInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMember.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `MemberObjectIdInput`<sup>Optional</sup> <a name="MemberObjectIdInput" id="@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMember.property.memberObjectIdInput"></a>

```go
func MemberObjectIdInput() *string
```

- *Type:* *string

---

##### `RoleObjectIdInput`<sup>Optional</sup> <a name="RoleObjectIdInput" id="@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMember.property.roleObjectIdInput"></a>

```go
func RoleObjectIdInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMember.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `AdministrativeUnitObjectId`<sup>Required</sup> <a name="AdministrativeUnitObjectId" id="@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMember.property.administrativeUnitObjectId"></a>

```go
func AdministrativeUnitObjectId() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMember.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `MemberObjectId`<sup>Required</sup> <a name="MemberObjectId" id="@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMember.property.memberObjectId"></a>

```go
func MemberObjectId() *string
```

- *Type:* *string

---

##### `RoleObjectId`<sup>Required</sup> <a name="RoleObjectId" id="@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMember.property.roleObjectId"></a>

```go
func RoleObjectId() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMember.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMember.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### AdministrativeUnitRoleMemberConfig <a name="AdministrativeUnitRoleMemberConfig" id="@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMemberConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMemberConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azuread-go/azuread/v6/administrativeunitrolemember"

&administrativeunitrolemember.AdministrativeUnitRoleMemberConfig {
	Connection: interface{},
	Count: *f64,
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	AdministrativeUnitObjectId: *string,
	MemberObjectId: *string,
	RoleObjectId: *string,
	Id: *string,
	Timeouts: github.com/cdktf/cdktf-provider-azuread-go/azuread/v6.administrativeUnitRoleMember.AdministrativeUnitRoleMemberTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMemberConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMemberConfig.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMemberConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMemberConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMemberConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMemberConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMemberConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMemberConfig.property.administrativeUnitObjectId">AdministrativeUnitObjectId</a></code> | <code>*string</code> | The object ID of the administrative unit. |
| <code><a href="#@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMemberConfig.property.memberObjectId">MemberObjectId</a></code> | <code>*string</code> | The object ID of the member. |
| <code><a href="#@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMemberConfig.property.roleObjectId">RoleObjectId</a></code> | <code>*string</code> | The object ID of the directory role. |
| <code><a href="#@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMemberConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/administrative_unit_role_member#id AdministrativeUnitRoleMember#id}. |
| <code><a href="#@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMemberConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMemberTimeouts">AdministrativeUnitRoleMemberTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMemberConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMemberConfig.property.count"></a>

```go
Count *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMemberConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMemberConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMemberConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMemberConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMemberConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AdministrativeUnitObjectId`<sup>Required</sup> <a name="AdministrativeUnitObjectId" id="@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMemberConfig.property.administrativeUnitObjectId"></a>

```go
AdministrativeUnitObjectId *string
```

- *Type:* *string

The object ID of the administrative unit.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/administrative_unit_role_member#administrative_unit_object_id AdministrativeUnitRoleMember#administrative_unit_object_id}

---

##### `MemberObjectId`<sup>Required</sup> <a name="MemberObjectId" id="@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMemberConfig.property.memberObjectId"></a>

```go
MemberObjectId *string
```

- *Type:* *string

The object ID of the member.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/administrative_unit_role_member#member_object_id AdministrativeUnitRoleMember#member_object_id}

---

##### `RoleObjectId`<sup>Required</sup> <a name="RoleObjectId" id="@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMemberConfig.property.roleObjectId"></a>

```go
RoleObjectId *string
```

- *Type:* *string

The object ID of the directory role.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/administrative_unit_role_member#role_object_id AdministrativeUnitRoleMember#role_object_id}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMemberConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/administrative_unit_role_member#id AdministrativeUnitRoleMember#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMemberConfig.property.timeouts"></a>

```go
Timeouts AdministrativeUnitRoleMemberTimeouts
```

- *Type:* <a href="#@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMemberTimeouts">AdministrativeUnitRoleMemberTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/administrative_unit_role_member#timeouts AdministrativeUnitRoleMember#timeouts}

---

### AdministrativeUnitRoleMemberTimeouts <a name="AdministrativeUnitRoleMemberTimeouts" id="@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMemberTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMemberTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azuread-go/azuread/v6/administrativeunitrolemember"

&administrativeunitrolemember.AdministrativeUnitRoleMemberTimeouts {
	Create: *string,
	Delete: *string,
	Read: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMemberTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/administrative_unit_role_member#create AdministrativeUnitRoleMember#create}. |
| <code><a href="#@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMemberTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/administrative_unit_role_member#delete AdministrativeUnitRoleMember#delete}. |
| <code><a href="#@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMemberTimeouts.property.read">Read</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/administrative_unit_role_member#read AdministrativeUnitRoleMember#read}. |
| <code><a href="#@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMemberTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/administrative_unit_role_member#update AdministrativeUnitRoleMember#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMemberTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/administrative_unit_role_member#create AdministrativeUnitRoleMember#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMemberTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/administrative_unit_role_member#delete AdministrativeUnitRoleMember#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMemberTimeouts.property.read"></a>

```go
Read *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/administrative_unit_role_member#read AdministrativeUnitRoleMember#read}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMemberTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/administrative_unit_role_member#update AdministrativeUnitRoleMember#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### AdministrativeUnitRoleMemberTimeoutsOutputReference <a name="AdministrativeUnitRoleMemberTimeoutsOutputReference" id="@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMemberTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMemberTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azuread-go/azuread/v6/administrativeunitrolemember"

administrativeunitrolemember.NewAdministrativeUnitRoleMemberTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) AdministrativeUnitRoleMemberTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMemberTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMemberTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMemberTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMemberTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMemberTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMemberTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMemberTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMemberTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMemberTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMemberTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMemberTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMemberTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMemberTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMemberTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMemberTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMemberTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMemberTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMemberTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMemberTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMemberTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMemberTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMemberTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMemberTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMemberTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMemberTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMemberTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMemberTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMemberTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMemberTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMemberTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMemberTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMemberTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMemberTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMemberTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMemberTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMemberTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMemberTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMemberTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMemberTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMemberTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMemberTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMemberTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMemberTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMemberTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMemberTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMemberTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMemberTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMemberTimeoutsOutputReference.resetRead"></a>

```go
func ResetRead()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMemberTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMemberTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMemberTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMemberTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMemberTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMemberTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMemberTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMemberTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMemberTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMemberTimeoutsOutputReference.property.read">Read</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMemberTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMemberTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMemberTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMemberTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMemberTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMemberTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMemberTimeoutsOutputReference.property.readInput"></a>

```go
func ReadInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMemberTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMemberTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMemberTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMemberTimeoutsOutputReference.property.read"></a>

```go
func Read() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMemberTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMemberTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



