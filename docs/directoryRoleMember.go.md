# `azuread_directory_role_member`

Refer to the Terraform Registory for docs: [`azuread_directory_role_member`](https://registry.terraform.io/providers/hashicorp/azuread/2.41.0/docs/resources/directory_role_member).

# `directoryRoleMember` Submodule <a name="`directoryRoleMember` Submodule" id="@cdktf/provider-azuread.directoryRoleMember"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DirectoryRoleMember <a name="DirectoryRoleMember" id="@cdktf/provider-azuread.directoryRoleMember.DirectoryRoleMember"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azuread/2.41.0/docs/resources/directory_role_member azuread_directory_role_member}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azuread.directoryRoleMember.DirectoryRoleMember.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azuread-go/azuread/v10/directoryrolemember"

directoryrolemember.NewDirectoryRoleMember(scope Construct, id *string, config DirectoryRoleMemberConfig) DirectoryRoleMember
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.directoryRoleMember.DirectoryRoleMember.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azuread.directoryRoleMember.DirectoryRoleMember.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azuread.directoryRoleMember.DirectoryRoleMember.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azuread.directoryRoleMember.DirectoryRoleMemberConfig">DirectoryRoleMemberConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azuread.directoryRoleMember.DirectoryRoleMember.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azuread.directoryRoleMember.DirectoryRoleMember.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktf/provider-azuread.directoryRoleMember.DirectoryRoleMember.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azuread.directoryRoleMember.DirectoryRoleMemberConfig">DirectoryRoleMemberConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azuread.directoryRoleMember.DirectoryRoleMember.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azuread.directoryRoleMember.DirectoryRoleMember.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.directoryRoleMember.DirectoryRoleMember.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azuread.directoryRoleMember.DirectoryRoleMember.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azuread.directoryRoleMember.DirectoryRoleMember.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.directoryRoleMember.DirectoryRoleMember.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azuread.directoryRoleMember.DirectoryRoleMember.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.directoryRoleMember.DirectoryRoleMember.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.directoryRoleMember.DirectoryRoleMember.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.directoryRoleMember.DirectoryRoleMember.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.directoryRoleMember.DirectoryRoleMember.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.directoryRoleMember.DirectoryRoleMember.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.directoryRoleMember.DirectoryRoleMember.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.directoryRoleMember.DirectoryRoleMember.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.directoryRoleMember.DirectoryRoleMember.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.directoryRoleMember.DirectoryRoleMember.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.directoryRoleMember.DirectoryRoleMember.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.directoryRoleMember.DirectoryRoleMember.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.directoryRoleMember.DirectoryRoleMember.resetMemberObjectId">ResetMemberObjectId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.directoryRoleMember.DirectoryRoleMember.resetRoleObjectId">ResetRoleObjectId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.directoryRoleMember.DirectoryRoleMember.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azuread.directoryRoleMember.DirectoryRoleMember.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-azuread.directoryRoleMember.DirectoryRoleMember.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azuread.directoryRoleMember.DirectoryRoleMember.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azuread.directoryRoleMember.DirectoryRoleMember.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-azuread.directoryRoleMember.DirectoryRoleMember.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azuread.directoryRoleMember.DirectoryRoleMember.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-azuread.directoryRoleMember.DirectoryRoleMember.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-azuread.directoryRoleMember.DirectoryRoleMember.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-azuread.directoryRoleMember.DirectoryRoleMember.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azuread.directoryRoleMember.DirectoryRoleMember.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.directoryRoleMember.DirectoryRoleMember.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azuread.directoryRoleMember.DirectoryRoleMember.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.directoryRoleMember.DirectoryRoleMember.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azuread.directoryRoleMember.DirectoryRoleMember.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.directoryRoleMember.DirectoryRoleMember.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azuread.directoryRoleMember.DirectoryRoleMember.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.directoryRoleMember.DirectoryRoleMember.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azuread.directoryRoleMember.DirectoryRoleMember.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.directoryRoleMember.DirectoryRoleMember.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azuread.directoryRoleMember.DirectoryRoleMember.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.directoryRoleMember.DirectoryRoleMember.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azuread.directoryRoleMember.DirectoryRoleMember.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.directoryRoleMember.DirectoryRoleMember.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azuread.directoryRoleMember.DirectoryRoleMember.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.directoryRoleMember.DirectoryRoleMember.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azuread.directoryRoleMember.DirectoryRoleMember.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.directoryRoleMember.DirectoryRoleMember.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azuread.directoryRoleMember.DirectoryRoleMember.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.directoryRoleMember.DirectoryRoleMember.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-azuread.directoryRoleMember.DirectoryRoleMember.putTimeouts"></a>

```go
func PutTimeouts(value DirectoryRoleMemberTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azuread.directoryRoleMember.DirectoryRoleMember.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azuread.directoryRoleMember.DirectoryRoleMemberTimeouts">DirectoryRoleMemberTimeouts</a>

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-azuread.directoryRoleMember.DirectoryRoleMember.resetId"></a>

```go
func ResetId()
```

##### `ResetMemberObjectId` <a name="ResetMemberObjectId" id="@cdktf/provider-azuread.directoryRoleMember.DirectoryRoleMember.resetMemberObjectId"></a>

```go
func ResetMemberObjectId()
```

##### `ResetRoleObjectId` <a name="ResetRoleObjectId" id="@cdktf/provider-azuread.directoryRoleMember.DirectoryRoleMember.resetRoleObjectId"></a>

```go
func ResetRoleObjectId()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-azuread.directoryRoleMember.DirectoryRoleMember.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azuread.directoryRoleMember.DirectoryRoleMember.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azuread.directoryRoleMember.DirectoryRoleMember.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.directoryRoleMember.DirectoryRoleMember.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-azuread.directoryRoleMember.DirectoryRoleMember.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-azuread-go/azuread/v10/directoryrolemember"

directoryrolemember.DirectoryRoleMember_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azuread.directoryRoleMember.DirectoryRoleMember.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-azuread.directoryRoleMember.DirectoryRoleMember.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-azuread-go/azuread/v10/directoryrolemember"

directoryrolemember.DirectoryRoleMember_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azuread.directoryRoleMember.DirectoryRoleMember.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-azuread.directoryRoleMember.DirectoryRoleMember.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-azuread-go/azuread/v10/directoryrolemember"

directoryrolemember.DirectoryRoleMember_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azuread.directoryRoleMember.DirectoryRoleMember.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.directoryRoleMember.DirectoryRoleMember.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azuread.directoryRoleMember.DirectoryRoleMember.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.directoryRoleMember.DirectoryRoleMember.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.directoryRoleMember.DirectoryRoleMember.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.directoryRoleMember.DirectoryRoleMember.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.directoryRoleMember.DirectoryRoleMember.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.directoryRoleMember.DirectoryRoleMember.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.directoryRoleMember.DirectoryRoleMember.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.directoryRoleMember.DirectoryRoleMember.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.directoryRoleMember.DirectoryRoleMember.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.directoryRoleMember.DirectoryRoleMember.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.directoryRoleMember.DirectoryRoleMember.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.directoryRoleMember.DirectoryRoleMember.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.directoryRoleMember.DirectoryRoleMember.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.directoryRoleMember.DirectoryRoleMember.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azuread.directoryRoleMember.DirectoryRoleMemberTimeoutsOutputReference">DirectoryRoleMemberTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.directoryRoleMember.DirectoryRoleMember.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.directoryRoleMember.DirectoryRoleMember.property.memberObjectIdInput">MemberObjectIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.directoryRoleMember.DirectoryRoleMember.property.roleObjectIdInput">RoleObjectIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.directoryRoleMember.DirectoryRoleMember.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.directoryRoleMember.DirectoryRoleMember.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.directoryRoleMember.DirectoryRoleMember.property.memberObjectId">MemberObjectId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.directoryRoleMember.DirectoryRoleMember.property.roleObjectId">RoleObjectId</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-azuread.directoryRoleMember.DirectoryRoleMember.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-azuread.directoryRoleMember.DirectoryRoleMember.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azuread.directoryRoleMember.DirectoryRoleMember.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-azuread.directoryRoleMember.DirectoryRoleMember.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-azuread.directoryRoleMember.DirectoryRoleMember.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-azuread.directoryRoleMember.DirectoryRoleMember.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-azuread.directoryRoleMember.DirectoryRoleMember.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azuread.directoryRoleMember.DirectoryRoleMember.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azuread.directoryRoleMember.DirectoryRoleMember.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azuread.directoryRoleMember.DirectoryRoleMember.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azuread.directoryRoleMember.DirectoryRoleMember.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azuread.directoryRoleMember.DirectoryRoleMember.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azuread.directoryRoleMember.DirectoryRoleMember.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azuread.directoryRoleMember.DirectoryRoleMember.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-azuread.directoryRoleMember.DirectoryRoleMember.property.timeouts"></a>

```go
func Timeouts() DirectoryRoleMemberTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azuread.directoryRoleMember.DirectoryRoleMemberTimeoutsOutputReference">DirectoryRoleMemberTimeoutsOutputReference</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azuread.directoryRoleMember.DirectoryRoleMember.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `MemberObjectIdInput`<sup>Optional</sup> <a name="MemberObjectIdInput" id="@cdktf/provider-azuread.directoryRoleMember.DirectoryRoleMember.property.memberObjectIdInput"></a>

```go
func MemberObjectIdInput() *string
```

- *Type:* *string

---

##### `RoleObjectIdInput`<sup>Optional</sup> <a name="RoleObjectIdInput" id="@cdktf/provider-azuread.directoryRoleMember.DirectoryRoleMember.property.roleObjectIdInput"></a>

```go
func RoleObjectIdInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-azuread.directoryRoleMember.DirectoryRoleMember.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azuread.directoryRoleMember.DirectoryRoleMember.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `MemberObjectId`<sup>Required</sup> <a name="MemberObjectId" id="@cdktf/provider-azuread.directoryRoleMember.DirectoryRoleMember.property.memberObjectId"></a>

```go
func MemberObjectId() *string
```

- *Type:* *string

---

##### `RoleObjectId`<sup>Required</sup> <a name="RoleObjectId" id="@cdktf/provider-azuread.directoryRoleMember.DirectoryRoleMember.property.roleObjectId"></a>

```go
func RoleObjectId() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.directoryRoleMember.DirectoryRoleMember.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-azuread.directoryRoleMember.DirectoryRoleMember.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DirectoryRoleMemberConfig <a name="DirectoryRoleMemberConfig" id="@cdktf/provider-azuread.directoryRoleMember.DirectoryRoleMemberConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azuread.directoryRoleMember.DirectoryRoleMemberConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azuread-go/azuread/v10/directoryrolemember"

&directoryrolemember.DirectoryRoleMemberConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Id: *string,
	MemberObjectId: *string,
	RoleObjectId: *string,
	Timeouts: github.com/cdktf/cdktf-provider-azuread-go/azuread/v10.directoryRoleMember.DirectoryRoleMemberTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.directoryRoleMember.DirectoryRoleMemberConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.directoryRoleMember.DirectoryRoleMemberConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.directoryRoleMember.DirectoryRoleMemberConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.directoryRoleMember.DirectoryRoleMemberConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.directoryRoleMember.DirectoryRoleMemberConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.directoryRoleMember.DirectoryRoleMemberConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.directoryRoleMember.DirectoryRoleMemberConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.directoryRoleMember.DirectoryRoleMemberConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.41.0/docs/resources/directory_role_member#id DirectoryRoleMember#id}. |
| <code><a href="#@cdktf/provider-azuread.directoryRoleMember.DirectoryRoleMemberConfig.property.memberObjectId">MemberObjectId</a></code> | <code>*string</code> | The object ID of the member. |
| <code><a href="#@cdktf/provider-azuread.directoryRoleMember.DirectoryRoleMemberConfig.property.roleObjectId">RoleObjectId</a></code> | <code>*string</code> | The object ID of the directory role. |
| <code><a href="#@cdktf/provider-azuread.directoryRoleMember.DirectoryRoleMemberConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azuread.directoryRoleMember.DirectoryRoleMemberTimeouts">DirectoryRoleMemberTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azuread.directoryRoleMember.DirectoryRoleMemberConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azuread.directoryRoleMember.DirectoryRoleMemberConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azuread.directoryRoleMember.DirectoryRoleMemberConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azuread.directoryRoleMember.DirectoryRoleMemberConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azuread.directoryRoleMember.DirectoryRoleMemberConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azuread.directoryRoleMember.DirectoryRoleMemberConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azuread.directoryRoleMember.DirectoryRoleMemberConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-azuread.directoryRoleMember.DirectoryRoleMemberConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.41.0/docs/resources/directory_role_member#id DirectoryRoleMember#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `MemberObjectId`<sup>Optional</sup> <a name="MemberObjectId" id="@cdktf/provider-azuread.directoryRoleMember.DirectoryRoleMemberConfig.property.memberObjectId"></a>

```go
MemberObjectId *string
```

- *Type:* *string

The object ID of the member.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.41.0/docs/resources/directory_role_member#member_object_id DirectoryRoleMember#member_object_id}

---

##### `RoleObjectId`<sup>Optional</sup> <a name="RoleObjectId" id="@cdktf/provider-azuread.directoryRoleMember.DirectoryRoleMemberConfig.property.roleObjectId"></a>

```go
RoleObjectId *string
```

- *Type:* *string

The object ID of the directory role.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.41.0/docs/resources/directory_role_member#role_object_id DirectoryRoleMember#role_object_id}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-azuread.directoryRoleMember.DirectoryRoleMemberConfig.property.timeouts"></a>

```go
Timeouts DirectoryRoleMemberTimeouts
```

- *Type:* <a href="#@cdktf/provider-azuread.directoryRoleMember.DirectoryRoleMemberTimeouts">DirectoryRoleMemberTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.41.0/docs/resources/directory_role_member#timeouts DirectoryRoleMember#timeouts}

---

### DirectoryRoleMemberTimeouts <a name="DirectoryRoleMemberTimeouts" id="@cdktf/provider-azuread.directoryRoleMember.DirectoryRoleMemberTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azuread.directoryRoleMember.DirectoryRoleMemberTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azuread-go/azuread/v10/directoryrolemember"

&directoryrolemember.DirectoryRoleMemberTimeouts {
	Create: *string,
	Delete: *string,
	Read: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.directoryRoleMember.DirectoryRoleMemberTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.41.0/docs/resources/directory_role_member#create DirectoryRoleMember#create}. |
| <code><a href="#@cdktf/provider-azuread.directoryRoleMember.DirectoryRoleMemberTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.41.0/docs/resources/directory_role_member#delete DirectoryRoleMember#delete}. |
| <code><a href="#@cdktf/provider-azuread.directoryRoleMember.DirectoryRoleMemberTimeouts.property.read">Read</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.41.0/docs/resources/directory_role_member#read DirectoryRoleMember#read}. |
| <code><a href="#@cdktf/provider-azuread.directoryRoleMember.DirectoryRoleMemberTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.41.0/docs/resources/directory_role_member#update DirectoryRoleMember#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-azuread.directoryRoleMember.DirectoryRoleMemberTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.41.0/docs/resources/directory_role_member#create DirectoryRoleMember#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-azuread.directoryRoleMember.DirectoryRoleMemberTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.41.0/docs/resources/directory_role_member#delete DirectoryRoleMember#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-azuread.directoryRoleMember.DirectoryRoleMemberTimeouts.property.read"></a>

```go
Read *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.41.0/docs/resources/directory_role_member#read DirectoryRoleMember#read}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-azuread.directoryRoleMember.DirectoryRoleMemberTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.41.0/docs/resources/directory_role_member#update DirectoryRoleMember#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### DirectoryRoleMemberTimeoutsOutputReference <a name="DirectoryRoleMemberTimeoutsOutputReference" id="@cdktf/provider-azuread.directoryRoleMember.DirectoryRoleMemberTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azuread.directoryRoleMember.DirectoryRoleMemberTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azuread-go/azuread/v10/directoryrolemember"

directoryrolemember.NewDirectoryRoleMemberTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DirectoryRoleMemberTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.directoryRoleMember.DirectoryRoleMemberTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azuread.directoryRoleMember.DirectoryRoleMemberTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azuread.directoryRoleMember.DirectoryRoleMemberTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.directoryRoleMember.DirectoryRoleMemberTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azuread.directoryRoleMember.DirectoryRoleMemberTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.directoryRoleMember.DirectoryRoleMemberTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.directoryRoleMember.DirectoryRoleMemberTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.directoryRoleMember.DirectoryRoleMemberTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.directoryRoleMember.DirectoryRoleMemberTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.directoryRoleMember.DirectoryRoleMemberTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.directoryRoleMember.DirectoryRoleMemberTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.directoryRoleMember.DirectoryRoleMemberTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.directoryRoleMember.DirectoryRoleMemberTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.directoryRoleMember.DirectoryRoleMemberTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.directoryRoleMember.DirectoryRoleMemberTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.directoryRoleMember.DirectoryRoleMemberTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azuread.directoryRoleMember.DirectoryRoleMemberTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azuread.directoryRoleMember.DirectoryRoleMemberTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.directoryRoleMember.DirectoryRoleMemberTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.directoryRoleMember.DirectoryRoleMemberTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.directoryRoleMember.DirectoryRoleMemberTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azuread.directoryRoleMember.DirectoryRoleMemberTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azuread.directoryRoleMember.DirectoryRoleMemberTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.directoryRoleMember.DirectoryRoleMemberTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azuread.directoryRoleMember.DirectoryRoleMemberTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.directoryRoleMember.DirectoryRoleMemberTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azuread.directoryRoleMember.DirectoryRoleMemberTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.directoryRoleMember.DirectoryRoleMemberTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azuread.directoryRoleMember.DirectoryRoleMemberTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.directoryRoleMember.DirectoryRoleMemberTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azuread.directoryRoleMember.DirectoryRoleMemberTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.directoryRoleMember.DirectoryRoleMemberTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azuread.directoryRoleMember.DirectoryRoleMemberTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.directoryRoleMember.DirectoryRoleMemberTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azuread.directoryRoleMember.DirectoryRoleMemberTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.directoryRoleMember.DirectoryRoleMemberTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azuread.directoryRoleMember.DirectoryRoleMemberTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.directoryRoleMember.DirectoryRoleMemberTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azuread.directoryRoleMember.DirectoryRoleMemberTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.directoryRoleMember.DirectoryRoleMemberTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azuread.directoryRoleMember.DirectoryRoleMemberTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azuread.directoryRoleMember.DirectoryRoleMemberTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azuread.directoryRoleMember.DirectoryRoleMemberTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azuread.directoryRoleMember.DirectoryRoleMemberTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azuread.directoryRoleMember.DirectoryRoleMemberTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-azuread.directoryRoleMember.DirectoryRoleMemberTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-azuread.directoryRoleMember.DirectoryRoleMemberTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-azuread.directoryRoleMember.DirectoryRoleMemberTimeoutsOutputReference.resetRead"></a>

```go
func ResetRead()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-azuread.directoryRoleMember.DirectoryRoleMemberTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.directoryRoleMember.DirectoryRoleMemberTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azuread.directoryRoleMember.DirectoryRoleMemberTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.directoryRoleMember.DirectoryRoleMemberTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.directoryRoleMember.DirectoryRoleMemberTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.directoryRoleMember.DirectoryRoleMemberTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.directoryRoleMember.DirectoryRoleMemberTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.directoryRoleMember.DirectoryRoleMemberTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.directoryRoleMember.DirectoryRoleMemberTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.directoryRoleMember.DirectoryRoleMemberTimeoutsOutputReference.property.read">Read</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.directoryRoleMember.DirectoryRoleMemberTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.directoryRoleMember.DirectoryRoleMemberTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azuread.directoryRoleMember.DirectoryRoleMemberTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azuread.directoryRoleMember.DirectoryRoleMemberTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-azuread.directoryRoleMember.DirectoryRoleMemberTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-azuread.directoryRoleMember.DirectoryRoleMemberTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-azuread.directoryRoleMember.DirectoryRoleMemberTimeoutsOutputReference.property.readInput"></a>

```go
func ReadInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-azuread.directoryRoleMember.DirectoryRoleMemberTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-azuread.directoryRoleMember.DirectoryRoleMemberTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-azuread.directoryRoleMember.DirectoryRoleMemberTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-azuread.directoryRoleMember.DirectoryRoleMemberTimeoutsOutputReference.property.read"></a>

```go
func Read() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-azuread.directoryRoleMember.DirectoryRoleMemberTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azuread.directoryRoleMember.DirectoryRoleMemberTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



