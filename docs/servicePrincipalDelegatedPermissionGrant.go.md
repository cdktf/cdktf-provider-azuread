# `azuread_service_principal_delegated_permission_grant`

Refer to the Terraform Registory for docs: [`azuread_service_principal_delegated_permission_grant`](https://registry.terraform.io/providers/hashicorp/azuread/2.42.0/docs/resources/service_principal_delegated_permission_grant).

# `servicePrincipalDelegatedPermissionGrant` Submodule <a name="`servicePrincipalDelegatedPermissionGrant` Submodule" id="@cdktf/provider-azuread.servicePrincipalDelegatedPermissionGrant"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ServicePrincipalDelegatedPermissionGrant <a name="ServicePrincipalDelegatedPermissionGrant" id="@cdktf/provider-azuread.servicePrincipalDelegatedPermissionGrant.ServicePrincipalDelegatedPermissionGrant"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azuread/2.42.0/docs/resources/service_principal_delegated_permission_grant azuread_service_principal_delegated_permission_grant}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azuread.servicePrincipalDelegatedPermissionGrant.ServicePrincipalDelegatedPermissionGrant.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azuread-go/azuread/v10/serviceprincipaldelegatedpermissiongrant"

serviceprincipaldelegatedpermissiongrant.NewServicePrincipalDelegatedPermissionGrant(scope Construct, id *string, config ServicePrincipalDelegatedPermissionGrantConfig) ServicePrincipalDelegatedPermissionGrant
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalDelegatedPermissionGrant.ServicePrincipalDelegatedPermissionGrant.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalDelegatedPermissionGrant.ServicePrincipalDelegatedPermissionGrant.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalDelegatedPermissionGrant.ServicePrincipalDelegatedPermissionGrant.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azuread.servicePrincipalDelegatedPermissionGrant.ServicePrincipalDelegatedPermissionGrantConfig">ServicePrincipalDelegatedPermissionGrantConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azuread.servicePrincipalDelegatedPermissionGrant.ServicePrincipalDelegatedPermissionGrant.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azuread.servicePrincipalDelegatedPermissionGrant.ServicePrincipalDelegatedPermissionGrant.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azuread.servicePrincipalDelegatedPermissionGrant.ServicePrincipalDelegatedPermissionGrant.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azuread.servicePrincipalDelegatedPermissionGrant.ServicePrincipalDelegatedPermissionGrantConfig">ServicePrincipalDelegatedPermissionGrantConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalDelegatedPermissionGrant.ServicePrincipalDelegatedPermissionGrant.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalDelegatedPermissionGrant.ServicePrincipalDelegatedPermissionGrant.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalDelegatedPermissionGrant.ServicePrincipalDelegatedPermissionGrant.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalDelegatedPermissionGrant.ServicePrincipalDelegatedPermissionGrant.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalDelegatedPermissionGrant.ServicePrincipalDelegatedPermissionGrant.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalDelegatedPermissionGrant.ServicePrincipalDelegatedPermissionGrant.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalDelegatedPermissionGrant.ServicePrincipalDelegatedPermissionGrant.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalDelegatedPermissionGrant.ServicePrincipalDelegatedPermissionGrant.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalDelegatedPermissionGrant.ServicePrincipalDelegatedPermissionGrant.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalDelegatedPermissionGrant.ServicePrincipalDelegatedPermissionGrant.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalDelegatedPermissionGrant.ServicePrincipalDelegatedPermissionGrant.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalDelegatedPermissionGrant.ServicePrincipalDelegatedPermissionGrant.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalDelegatedPermissionGrant.ServicePrincipalDelegatedPermissionGrant.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalDelegatedPermissionGrant.ServicePrincipalDelegatedPermissionGrant.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalDelegatedPermissionGrant.ServicePrincipalDelegatedPermissionGrant.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalDelegatedPermissionGrant.ServicePrincipalDelegatedPermissionGrant.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalDelegatedPermissionGrant.ServicePrincipalDelegatedPermissionGrant.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalDelegatedPermissionGrant.ServicePrincipalDelegatedPermissionGrant.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalDelegatedPermissionGrant.ServicePrincipalDelegatedPermissionGrant.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalDelegatedPermissionGrant.ServicePrincipalDelegatedPermissionGrant.resetUserObjectId">ResetUserObjectId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azuread.servicePrincipalDelegatedPermissionGrant.ServicePrincipalDelegatedPermissionGrant.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-azuread.servicePrincipalDelegatedPermissionGrant.ServicePrincipalDelegatedPermissionGrant.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azuread.servicePrincipalDelegatedPermissionGrant.ServicePrincipalDelegatedPermissionGrant.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azuread.servicePrincipalDelegatedPermissionGrant.ServicePrincipalDelegatedPermissionGrant.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-azuread.servicePrincipalDelegatedPermissionGrant.ServicePrincipalDelegatedPermissionGrant.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azuread.servicePrincipalDelegatedPermissionGrant.ServicePrincipalDelegatedPermissionGrant.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-azuread.servicePrincipalDelegatedPermissionGrant.ServicePrincipalDelegatedPermissionGrant.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-azuread.servicePrincipalDelegatedPermissionGrant.ServicePrincipalDelegatedPermissionGrant.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-azuread.servicePrincipalDelegatedPermissionGrant.ServicePrincipalDelegatedPermissionGrant.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azuread.servicePrincipalDelegatedPermissionGrant.ServicePrincipalDelegatedPermissionGrant.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.servicePrincipalDelegatedPermissionGrant.ServicePrincipalDelegatedPermissionGrant.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azuread.servicePrincipalDelegatedPermissionGrant.ServicePrincipalDelegatedPermissionGrant.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.servicePrincipalDelegatedPermissionGrant.ServicePrincipalDelegatedPermissionGrant.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azuread.servicePrincipalDelegatedPermissionGrant.ServicePrincipalDelegatedPermissionGrant.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.servicePrincipalDelegatedPermissionGrant.ServicePrincipalDelegatedPermissionGrant.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azuread.servicePrincipalDelegatedPermissionGrant.ServicePrincipalDelegatedPermissionGrant.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.servicePrincipalDelegatedPermissionGrant.ServicePrincipalDelegatedPermissionGrant.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azuread.servicePrincipalDelegatedPermissionGrant.ServicePrincipalDelegatedPermissionGrant.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.servicePrincipalDelegatedPermissionGrant.ServicePrincipalDelegatedPermissionGrant.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azuread.servicePrincipalDelegatedPermissionGrant.ServicePrincipalDelegatedPermissionGrant.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.servicePrincipalDelegatedPermissionGrant.ServicePrincipalDelegatedPermissionGrant.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azuread.servicePrincipalDelegatedPermissionGrant.ServicePrincipalDelegatedPermissionGrant.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.servicePrincipalDelegatedPermissionGrant.ServicePrincipalDelegatedPermissionGrant.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azuread.servicePrincipalDelegatedPermissionGrant.ServicePrincipalDelegatedPermissionGrant.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.servicePrincipalDelegatedPermissionGrant.ServicePrincipalDelegatedPermissionGrant.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azuread.servicePrincipalDelegatedPermissionGrant.ServicePrincipalDelegatedPermissionGrant.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.servicePrincipalDelegatedPermissionGrant.ServicePrincipalDelegatedPermissionGrant.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azuread.servicePrincipalDelegatedPermissionGrant.ServicePrincipalDelegatedPermissionGrant.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.servicePrincipalDelegatedPermissionGrant.ServicePrincipalDelegatedPermissionGrant.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-azuread.servicePrincipalDelegatedPermissionGrant.ServicePrincipalDelegatedPermissionGrant.putTimeouts"></a>

```go
func PutTimeouts(value ServicePrincipalDelegatedPermissionGrantTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azuread.servicePrincipalDelegatedPermissionGrant.ServicePrincipalDelegatedPermissionGrant.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azuread.servicePrincipalDelegatedPermissionGrant.ServicePrincipalDelegatedPermissionGrantTimeouts">ServicePrincipalDelegatedPermissionGrantTimeouts</a>

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-azuread.servicePrincipalDelegatedPermissionGrant.ServicePrincipalDelegatedPermissionGrant.resetId"></a>

```go
func ResetId()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-azuread.servicePrincipalDelegatedPermissionGrant.ServicePrincipalDelegatedPermissionGrant.resetTimeouts"></a>

```go
func ResetTimeouts()
```

##### `ResetUserObjectId` <a name="ResetUserObjectId" id="@cdktf/provider-azuread.servicePrincipalDelegatedPermissionGrant.ServicePrincipalDelegatedPermissionGrant.resetUserObjectId"></a>

```go
func ResetUserObjectId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalDelegatedPermissionGrant.ServicePrincipalDelegatedPermissionGrant.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalDelegatedPermissionGrant.ServicePrincipalDelegatedPermissionGrant.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalDelegatedPermissionGrant.ServicePrincipalDelegatedPermissionGrant.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-azuread.servicePrincipalDelegatedPermissionGrant.ServicePrincipalDelegatedPermissionGrant.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-azuread-go/azuread/v10/serviceprincipaldelegatedpermissiongrant"

serviceprincipaldelegatedpermissiongrant.ServicePrincipalDelegatedPermissionGrant_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azuread.servicePrincipalDelegatedPermissionGrant.ServicePrincipalDelegatedPermissionGrant.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-azuread.servicePrincipalDelegatedPermissionGrant.ServicePrincipalDelegatedPermissionGrant.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-azuread-go/azuread/v10/serviceprincipaldelegatedpermissiongrant"

serviceprincipaldelegatedpermissiongrant.ServicePrincipalDelegatedPermissionGrant_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azuread.servicePrincipalDelegatedPermissionGrant.ServicePrincipalDelegatedPermissionGrant.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-azuread.servicePrincipalDelegatedPermissionGrant.ServicePrincipalDelegatedPermissionGrant.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-azuread-go/azuread/v10/serviceprincipaldelegatedpermissiongrant"

serviceprincipaldelegatedpermissiongrant.ServicePrincipalDelegatedPermissionGrant_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azuread.servicePrincipalDelegatedPermissionGrant.ServicePrincipalDelegatedPermissionGrant.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalDelegatedPermissionGrant.ServicePrincipalDelegatedPermissionGrant.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalDelegatedPermissionGrant.ServicePrincipalDelegatedPermissionGrant.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalDelegatedPermissionGrant.ServicePrincipalDelegatedPermissionGrant.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalDelegatedPermissionGrant.ServicePrincipalDelegatedPermissionGrant.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalDelegatedPermissionGrant.ServicePrincipalDelegatedPermissionGrant.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalDelegatedPermissionGrant.ServicePrincipalDelegatedPermissionGrant.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalDelegatedPermissionGrant.ServicePrincipalDelegatedPermissionGrant.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalDelegatedPermissionGrant.ServicePrincipalDelegatedPermissionGrant.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalDelegatedPermissionGrant.ServicePrincipalDelegatedPermissionGrant.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalDelegatedPermissionGrant.ServicePrincipalDelegatedPermissionGrant.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalDelegatedPermissionGrant.ServicePrincipalDelegatedPermissionGrant.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalDelegatedPermissionGrant.ServicePrincipalDelegatedPermissionGrant.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalDelegatedPermissionGrant.ServicePrincipalDelegatedPermissionGrant.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalDelegatedPermissionGrant.ServicePrincipalDelegatedPermissionGrant.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalDelegatedPermissionGrant.ServicePrincipalDelegatedPermissionGrant.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azuread.servicePrincipalDelegatedPermissionGrant.ServicePrincipalDelegatedPermissionGrantTimeoutsOutputReference">ServicePrincipalDelegatedPermissionGrantTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalDelegatedPermissionGrant.ServicePrincipalDelegatedPermissionGrant.property.claimValuesInput">ClaimValuesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalDelegatedPermissionGrant.ServicePrincipalDelegatedPermissionGrant.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalDelegatedPermissionGrant.ServicePrincipalDelegatedPermissionGrant.property.resourceServicePrincipalObjectIdInput">ResourceServicePrincipalObjectIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalDelegatedPermissionGrant.ServicePrincipalDelegatedPermissionGrant.property.servicePrincipalObjectIdInput">ServicePrincipalObjectIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalDelegatedPermissionGrant.ServicePrincipalDelegatedPermissionGrant.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalDelegatedPermissionGrant.ServicePrincipalDelegatedPermissionGrant.property.userObjectIdInput">UserObjectIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalDelegatedPermissionGrant.ServicePrincipalDelegatedPermissionGrant.property.claimValues">ClaimValues</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalDelegatedPermissionGrant.ServicePrincipalDelegatedPermissionGrant.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalDelegatedPermissionGrant.ServicePrincipalDelegatedPermissionGrant.property.resourceServicePrincipalObjectId">ResourceServicePrincipalObjectId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalDelegatedPermissionGrant.ServicePrincipalDelegatedPermissionGrant.property.servicePrincipalObjectId">ServicePrincipalObjectId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalDelegatedPermissionGrant.ServicePrincipalDelegatedPermissionGrant.property.userObjectId">UserObjectId</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-azuread.servicePrincipalDelegatedPermissionGrant.ServicePrincipalDelegatedPermissionGrant.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-azuread.servicePrincipalDelegatedPermissionGrant.ServicePrincipalDelegatedPermissionGrant.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azuread.servicePrincipalDelegatedPermissionGrant.ServicePrincipalDelegatedPermissionGrant.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-azuread.servicePrincipalDelegatedPermissionGrant.ServicePrincipalDelegatedPermissionGrant.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-azuread.servicePrincipalDelegatedPermissionGrant.ServicePrincipalDelegatedPermissionGrant.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-azuread.servicePrincipalDelegatedPermissionGrant.ServicePrincipalDelegatedPermissionGrant.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-azuread.servicePrincipalDelegatedPermissionGrant.ServicePrincipalDelegatedPermissionGrant.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azuread.servicePrincipalDelegatedPermissionGrant.ServicePrincipalDelegatedPermissionGrant.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azuread.servicePrincipalDelegatedPermissionGrant.ServicePrincipalDelegatedPermissionGrant.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azuread.servicePrincipalDelegatedPermissionGrant.ServicePrincipalDelegatedPermissionGrant.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azuread.servicePrincipalDelegatedPermissionGrant.ServicePrincipalDelegatedPermissionGrant.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azuread.servicePrincipalDelegatedPermissionGrant.ServicePrincipalDelegatedPermissionGrant.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azuread.servicePrincipalDelegatedPermissionGrant.ServicePrincipalDelegatedPermissionGrant.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azuread.servicePrincipalDelegatedPermissionGrant.ServicePrincipalDelegatedPermissionGrant.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-azuread.servicePrincipalDelegatedPermissionGrant.ServicePrincipalDelegatedPermissionGrant.property.timeouts"></a>

```go
func Timeouts() ServicePrincipalDelegatedPermissionGrantTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azuread.servicePrincipalDelegatedPermissionGrant.ServicePrincipalDelegatedPermissionGrantTimeoutsOutputReference">ServicePrincipalDelegatedPermissionGrantTimeoutsOutputReference</a>

---

##### `ClaimValuesInput`<sup>Optional</sup> <a name="ClaimValuesInput" id="@cdktf/provider-azuread.servicePrincipalDelegatedPermissionGrant.ServicePrincipalDelegatedPermissionGrant.property.claimValuesInput"></a>

```go
func ClaimValuesInput() *[]*string
```

- *Type:* *[]*string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azuread.servicePrincipalDelegatedPermissionGrant.ServicePrincipalDelegatedPermissionGrant.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `ResourceServicePrincipalObjectIdInput`<sup>Optional</sup> <a name="ResourceServicePrincipalObjectIdInput" id="@cdktf/provider-azuread.servicePrincipalDelegatedPermissionGrant.ServicePrincipalDelegatedPermissionGrant.property.resourceServicePrincipalObjectIdInput"></a>

```go
func ResourceServicePrincipalObjectIdInput() *string
```

- *Type:* *string

---

##### `ServicePrincipalObjectIdInput`<sup>Optional</sup> <a name="ServicePrincipalObjectIdInput" id="@cdktf/provider-azuread.servicePrincipalDelegatedPermissionGrant.ServicePrincipalDelegatedPermissionGrant.property.servicePrincipalObjectIdInput"></a>

```go
func ServicePrincipalObjectIdInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-azuread.servicePrincipalDelegatedPermissionGrant.ServicePrincipalDelegatedPermissionGrant.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `UserObjectIdInput`<sup>Optional</sup> <a name="UserObjectIdInput" id="@cdktf/provider-azuread.servicePrincipalDelegatedPermissionGrant.ServicePrincipalDelegatedPermissionGrant.property.userObjectIdInput"></a>

```go
func UserObjectIdInput() *string
```

- *Type:* *string

---

##### `ClaimValues`<sup>Required</sup> <a name="ClaimValues" id="@cdktf/provider-azuread.servicePrincipalDelegatedPermissionGrant.ServicePrincipalDelegatedPermissionGrant.property.claimValues"></a>

```go
func ClaimValues() *[]*string
```

- *Type:* *[]*string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azuread.servicePrincipalDelegatedPermissionGrant.ServicePrincipalDelegatedPermissionGrant.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `ResourceServicePrincipalObjectId`<sup>Required</sup> <a name="ResourceServicePrincipalObjectId" id="@cdktf/provider-azuread.servicePrincipalDelegatedPermissionGrant.ServicePrincipalDelegatedPermissionGrant.property.resourceServicePrincipalObjectId"></a>

```go
func ResourceServicePrincipalObjectId() *string
```

- *Type:* *string

---

##### `ServicePrincipalObjectId`<sup>Required</sup> <a name="ServicePrincipalObjectId" id="@cdktf/provider-azuread.servicePrincipalDelegatedPermissionGrant.ServicePrincipalDelegatedPermissionGrant.property.servicePrincipalObjectId"></a>

```go
func ServicePrincipalObjectId() *string
```

- *Type:* *string

---

##### `UserObjectId`<sup>Required</sup> <a name="UserObjectId" id="@cdktf/provider-azuread.servicePrincipalDelegatedPermissionGrant.ServicePrincipalDelegatedPermissionGrant.property.userObjectId"></a>

```go
func UserObjectId() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalDelegatedPermissionGrant.ServicePrincipalDelegatedPermissionGrant.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-azuread.servicePrincipalDelegatedPermissionGrant.ServicePrincipalDelegatedPermissionGrant.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### ServicePrincipalDelegatedPermissionGrantConfig <a name="ServicePrincipalDelegatedPermissionGrantConfig" id="@cdktf/provider-azuread.servicePrincipalDelegatedPermissionGrant.ServicePrincipalDelegatedPermissionGrantConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azuread.servicePrincipalDelegatedPermissionGrant.ServicePrincipalDelegatedPermissionGrantConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azuread-go/azuread/v10/serviceprincipaldelegatedpermissiongrant"

&serviceprincipaldelegatedpermissiongrant.ServicePrincipalDelegatedPermissionGrantConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	ClaimValues: *[]*string,
	ResourceServicePrincipalObjectId: *string,
	ServicePrincipalObjectId: *string,
	Id: *string,
	Timeouts: github.com/cdktf/cdktf-provider-azuread-go/azuread/v10.servicePrincipalDelegatedPermissionGrant.ServicePrincipalDelegatedPermissionGrantTimeouts,
	UserObjectId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalDelegatedPermissionGrant.ServicePrincipalDelegatedPermissionGrantConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalDelegatedPermissionGrant.ServicePrincipalDelegatedPermissionGrantConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalDelegatedPermissionGrant.ServicePrincipalDelegatedPermissionGrantConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalDelegatedPermissionGrant.ServicePrincipalDelegatedPermissionGrantConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalDelegatedPermissionGrant.ServicePrincipalDelegatedPermissionGrantConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalDelegatedPermissionGrant.ServicePrincipalDelegatedPermissionGrantConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalDelegatedPermissionGrant.ServicePrincipalDelegatedPermissionGrantConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalDelegatedPermissionGrant.ServicePrincipalDelegatedPermissionGrantConfig.property.claimValues">ClaimValues</a></code> | <code>*[]*string</code> | A set of claim values for delegated permission scopes which should be included in access tokens for the resource. |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalDelegatedPermissionGrant.ServicePrincipalDelegatedPermissionGrantConfig.property.resourceServicePrincipalObjectId">ResourceServicePrincipalObjectId</a></code> | <code>*string</code> | The object ID of the service principal representing the resource to be accessed. |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalDelegatedPermissionGrant.ServicePrincipalDelegatedPermissionGrantConfig.property.servicePrincipalObjectId">ServicePrincipalObjectId</a></code> | <code>*string</code> | The object ID of the service principal for which this delegated permission grant should be created. |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalDelegatedPermissionGrant.ServicePrincipalDelegatedPermissionGrantConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.42.0/docs/resources/service_principal_delegated_permission_grant#id ServicePrincipalDelegatedPermissionGrant#id}. |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalDelegatedPermissionGrant.ServicePrincipalDelegatedPermissionGrantConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azuread.servicePrincipalDelegatedPermissionGrant.ServicePrincipalDelegatedPermissionGrantTimeouts">ServicePrincipalDelegatedPermissionGrantTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalDelegatedPermissionGrant.ServicePrincipalDelegatedPermissionGrantConfig.property.userObjectId">UserObjectId</a></code> | <code>*string</code> | The object ID of the user on behalf of whom the service principal is authorized to access the resource. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azuread.servicePrincipalDelegatedPermissionGrant.ServicePrincipalDelegatedPermissionGrantConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azuread.servicePrincipalDelegatedPermissionGrant.ServicePrincipalDelegatedPermissionGrantConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azuread.servicePrincipalDelegatedPermissionGrant.ServicePrincipalDelegatedPermissionGrantConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azuread.servicePrincipalDelegatedPermissionGrant.ServicePrincipalDelegatedPermissionGrantConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azuread.servicePrincipalDelegatedPermissionGrant.ServicePrincipalDelegatedPermissionGrantConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azuread.servicePrincipalDelegatedPermissionGrant.ServicePrincipalDelegatedPermissionGrantConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azuread.servicePrincipalDelegatedPermissionGrant.ServicePrincipalDelegatedPermissionGrantConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ClaimValues`<sup>Required</sup> <a name="ClaimValues" id="@cdktf/provider-azuread.servicePrincipalDelegatedPermissionGrant.ServicePrincipalDelegatedPermissionGrantConfig.property.claimValues"></a>

```go
ClaimValues *[]*string
```

- *Type:* *[]*string

A set of claim values for delegated permission scopes which should be included in access tokens for the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.42.0/docs/resources/service_principal_delegated_permission_grant#claim_values ServicePrincipalDelegatedPermissionGrant#claim_values}

---

##### `ResourceServicePrincipalObjectId`<sup>Required</sup> <a name="ResourceServicePrincipalObjectId" id="@cdktf/provider-azuread.servicePrincipalDelegatedPermissionGrant.ServicePrincipalDelegatedPermissionGrantConfig.property.resourceServicePrincipalObjectId"></a>

```go
ResourceServicePrincipalObjectId *string
```

- *Type:* *string

The object ID of the service principal representing the resource to be accessed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.42.0/docs/resources/service_principal_delegated_permission_grant#resource_service_principal_object_id ServicePrincipalDelegatedPermissionGrant#resource_service_principal_object_id}

---

##### `ServicePrincipalObjectId`<sup>Required</sup> <a name="ServicePrincipalObjectId" id="@cdktf/provider-azuread.servicePrincipalDelegatedPermissionGrant.ServicePrincipalDelegatedPermissionGrantConfig.property.servicePrincipalObjectId"></a>

```go
ServicePrincipalObjectId *string
```

- *Type:* *string

The object ID of the service principal for which this delegated permission grant should be created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.42.0/docs/resources/service_principal_delegated_permission_grant#service_principal_object_id ServicePrincipalDelegatedPermissionGrant#service_principal_object_id}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-azuread.servicePrincipalDelegatedPermissionGrant.ServicePrincipalDelegatedPermissionGrantConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.42.0/docs/resources/service_principal_delegated_permission_grant#id ServicePrincipalDelegatedPermissionGrant#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-azuread.servicePrincipalDelegatedPermissionGrant.ServicePrincipalDelegatedPermissionGrantConfig.property.timeouts"></a>

```go
Timeouts ServicePrincipalDelegatedPermissionGrantTimeouts
```

- *Type:* <a href="#@cdktf/provider-azuread.servicePrincipalDelegatedPermissionGrant.ServicePrincipalDelegatedPermissionGrantTimeouts">ServicePrincipalDelegatedPermissionGrantTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.42.0/docs/resources/service_principal_delegated_permission_grant#timeouts ServicePrincipalDelegatedPermissionGrant#timeouts}

---

##### `UserObjectId`<sup>Optional</sup> <a name="UserObjectId" id="@cdktf/provider-azuread.servicePrincipalDelegatedPermissionGrant.ServicePrincipalDelegatedPermissionGrantConfig.property.userObjectId"></a>

```go
UserObjectId *string
```

- *Type:* *string

The object ID of the user on behalf of whom the service principal is authorized to access the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.42.0/docs/resources/service_principal_delegated_permission_grant#user_object_id ServicePrincipalDelegatedPermissionGrant#user_object_id}

---

### ServicePrincipalDelegatedPermissionGrantTimeouts <a name="ServicePrincipalDelegatedPermissionGrantTimeouts" id="@cdktf/provider-azuread.servicePrincipalDelegatedPermissionGrant.ServicePrincipalDelegatedPermissionGrantTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azuread.servicePrincipalDelegatedPermissionGrant.ServicePrincipalDelegatedPermissionGrantTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azuread-go/azuread/v10/serviceprincipaldelegatedpermissiongrant"

&serviceprincipaldelegatedpermissiongrant.ServicePrincipalDelegatedPermissionGrantTimeouts {
	Create: *string,
	Delete: *string,
	Read: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalDelegatedPermissionGrant.ServicePrincipalDelegatedPermissionGrantTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.42.0/docs/resources/service_principal_delegated_permission_grant#create ServicePrincipalDelegatedPermissionGrant#create}. |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalDelegatedPermissionGrant.ServicePrincipalDelegatedPermissionGrantTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.42.0/docs/resources/service_principal_delegated_permission_grant#delete ServicePrincipalDelegatedPermissionGrant#delete}. |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalDelegatedPermissionGrant.ServicePrincipalDelegatedPermissionGrantTimeouts.property.read">Read</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.42.0/docs/resources/service_principal_delegated_permission_grant#read ServicePrincipalDelegatedPermissionGrant#read}. |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalDelegatedPermissionGrant.ServicePrincipalDelegatedPermissionGrantTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.42.0/docs/resources/service_principal_delegated_permission_grant#update ServicePrincipalDelegatedPermissionGrant#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-azuread.servicePrincipalDelegatedPermissionGrant.ServicePrincipalDelegatedPermissionGrantTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.42.0/docs/resources/service_principal_delegated_permission_grant#create ServicePrincipalDelegatedPermissionGrant#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-azuread.servicePrincipalDelegatedPermissionGrant.ServicePrincipalDelegatedPermissionGrantTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.42.0/docs/resources/service_principal_delegated_permission_grant#delete ServicePrincipalDelegatedPermissionGrant#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-azuread.servicePrincipalDelegatedPermissionGrant.ServicePrincipalDelegatedPermissionGrantTimeouts.property.read"></a>

```go
Read *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.42.0/docs/resources/service_principal_delegated_permission_grant#read ServicePrincipalDelegatedPermissionGrant#read}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-azuread.servicePrincipalDelegatedPermissionGrant.ServicePrincipalDelegatedPermissionGrantTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.42.0/docs/resources/service_principal_delegated_permission_grant#update ServicePrincipalDelegatedPermissionGrant#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ServicePrincipalDelegatedPermissionGrantTimeoutsOutputReference <a name="ServicePrincipalDelegatedPermissionGrantTimeoutsOutputReference" id="@cdktf/provider-azuread.servicePrincipalDelegatedPermissionGrant.ServicePrincipalDelegatedPermissionGrantTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azuread.servicePrincipalDelegatedPermissionGrant.ServicePrincipalDelegatedPermissionGrantTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azuread-go/azuread/v10/serviceprincipaldelegatedpermissiongrant"

serviceprincipaldelegatedpermissiongrant.NewServicePrincipalDelegatedPermissionGrantTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ServicePrincipalDelegatedPermissionGrantTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalDelegatedPermissionGrant.ServicePrincipalDelegatedPermissionGrantTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalDelegatedPermissionGrant.ServicePrincipalDelegatedPermissionGrantTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azuread.servicePrincipalDelegatedPermissionGrant.ServicePrincipalDelegatedPermissionGrantTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.servicePrincipalDelegatedPermissionGrant.ServicePrincipalDelegatedPermissionGrantTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalDelegatedPermissionGrant.ServicePrincipalDelegatedPermissionGrantTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalDelegatedPermissionGrant.ServicePrincipalDelegatedPermissionGrantTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalDelegatedPermissionGrant.ServicePrincipalDelegatedPermissionGrantTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalDelegatedPermissionGrant.ServicePrincipalDelegatedPermissionGrantTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalDelegatedPermissionGrant.ServicePrincipalDelegatedPermissionGrantTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalDelegatedPermissionGrant.ServicePrincipalDelegatedPermissionGrantTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalDelegatedPermissionGrant.ServicePrincipalDelegatedPermissionGrantTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalDelegatedPermissionGrant.ServicePrincipalDelegatedPermissionGrantTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalDelegatedPermissionGrant.ServicePrincipalDelegatedPermissionGrantTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalDelegatedPermissionGrant.ServicePrincipalDelegatedPermissionGrantTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalDelegatedPermissionGrant.ServicePrincipalDelegatedPermissionGrantTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalDelegatedPermissionGrant.ServicePrincipalDelegatedPermissionGrantTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalDelegatedPermissionGrant.ServicePrincipalDelegatedPermissionGrantTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalDelegatedPermissionGrant.ServicePrincipalDelegatedPermissionGrantTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalDelegatedPermissionGrant.ServicePrincipalDelegatedPermissionGrantTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalDelegatedPermissionGrant.ServicePrincipalDelegatedPermissionGrantTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalDelegatedPermissionGrant.ServicePrincipalDelegatedPermissionGrantTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azuread.servicePrincipalDelegatedPermissionGrant.ServicePrincipalDelegatedPermissionGrantTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azuread.servicePrincipalDelegatedPermissionGrant.ServicePrincipalDelegatedPermissionGrantTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.servicePrincipalDelegatedPermissionGrant.ServicePrincipalDelegatedPermissionGrantTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azuread.servicePrincipalDelegatedPermissionGrant.ServicePrincipalDelegatedPermissionGrantTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.servicePrincipalDelegatedPermissionGrant.ServicePrincipalDelegatedPermissionGrantTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azuread.servicePrincipalDelegatedPermissionGrant.ServicePrincipalDelegatedPermissionGrantTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.servicePrincipalDelegatedPermissionGrant.ServicePrincipalDelegatedPermissionGrantTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azuread.servicePrincipalDelegatedPermissionGrant.ServicePrincipalDelegatedPermissionGrantTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.servicePrincipalDelegatedPermissionGrant.ServicePrincipalDelegatedPermissionGrantTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azuread.servicePrincipalDelegatedPermissionGrant.ServicePrincipalDelegatedPermissionGrantTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.servicePrincipalDelegatedPermissionGrant.ServicePrincipalDelegatedPermissionGrantTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azuread.servicePrincipalDelegatedPermissionGrant.ServicePrincipalDelegatedPermissionGrantTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.servicePrincipalDelegatedPermissionGrant.ServicePrincipalDelegatedPermissionGrantTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azuread.servicePrincipalDelegatedPermissionGrant.ServicePrincipalDelegatedPermissionGrantTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.servicePrincipalDelegatedPermissionGrant.ServicePrincipalDelegatedPermissionGrantTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azuread.servicePrincipalDelegatedPermissionGrant.ServicePrincipalDelegatedPermissionGrantTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.servicePrincipalDelegatedPermissionGrant.ServicePrincipalDelegatedPermissionGrantTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azuread.servicePrincipalDelegatedPermissionGrant.ServicePrincipalDelegatedPermissionGrantTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.servicePrincipalDelegatedPermissionGrant.ServicePrincipalDelegatedPermissionGrantTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azuread.servicePrincipalDelegatedPermissionGrant.ServicePrincipalDelegatedPermissionGrantTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azuread.servicePrincipalDelegatedPermissionGrant.ServicePrincipalDelegatedPermissionGrantTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azuread.servicePrincipalDelegatedPermissionGrant.ServicePrincipalDelegatedPermissionGrantTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azuread.servicePrincipalDelegatedPermissionGrant.ServicePrincipalDelegatedPermissionGrantTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azuread.servicePrincipalDelegatedPermissionGrant.ServicePrincipalDelegatedPermissionGrantTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-azuread.servicePrincipalDelegatedPermissionGrant.ServicePrincipalDelegatedPermissionGrantTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-azuread.servicePrincipalDelegatedPermissionGrant.ServicePrincipalDelegatedPermissionGrantTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-azuread.servicePrincipalDelegatedPermissionGrant.ServicePrincipalDelegatedPermissionGrantTimeoutsOutputReference.resetRead"></a>

```go
func ResetRead()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-azuread.servicePrincipalDelegatedPermissionGrant.ServicePrincipalDelegatedPermissionGrantTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalDelegatedPermissionGrant.ServicePrincipalDelegatedPermissionGrantTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalDelegatedPermissionGrant.ServicePrincipalDelegatedPermissionGrantTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalDelegatedPermissionGrant.ServicePrincipalDelegatedPermissionGrantTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalDelegatedPermissionGrant.ServicePrincipalDelegatedPermissionGrantTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalDelegatedPermissionGrant.ServicePrincipalDelegatedPermissionGrantTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalDelegatedPermissionGrant.ServicePrincipalDelegatedPermissionGrantTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalDelegatedPermissionGrant.ServicePrincipalDelegatedPermissionGrantTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalDelegatedPermissionGrant.ServicePrincipalDelegatedPermissionGrantTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalDelegatedPermissionGrant.ServicePrincipalDelegatedPermissionGrantTimeoutsOutputReference.property.read">Read</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalDelegatedPermissionGrant.ServicePrincipalDelegatedPermissionGrantTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalDelegatedPermissionGrant.ServicePrincipalDelegatedPermissionGrantTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azuread.servicePrincipalDelegatedPermissionGrant.ServicePrincipalDelegatedPermissionGrantTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azuread.servicePrincipalDelegatedPermissionGrant.ServicePrincipalDelegatedPermissionGrantTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-azuread.servicePrincipalDelegatedPermissionGrant.ServicePrincipalDelegatedPermissionGrantTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-azuread.servicePrincipalDelegatedPermissionGrant.ServicePrincipalDelegatedPermissionGrantTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-azuread.servicePrincipalDelegatedPermissionGrant.ServicePrincipalDelegatedPermissionGrantTimeoutsOutputReference.property.readInput"></a>

```go
func ReadInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-azuread.servicePrincipalDelegatedPermissionGrant.ServicePrincipalDelegatedPermissionGrantTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-azuread.servicePrincipalDelegatedPermissionGrant.ServicePrincipalDelegatedPermissionGrantTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-azuread.servicePrincipalDelegatedPermissionGrant.ServicePrincipalDelegatedPermissionGrantTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-azuread.servicePrincipalDelegatedPermissionGrant.ServicePrincipalDelegatedPermissionGrantTimeoutsOutputReference.property.read"></a>

```go
func Read() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-azuread.servicePrincipalDelegatedPermissionGrant.ServicePrincipalDelegatedPermissionGrantTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azuread.servicePrincipalDelegatedPermissionGrant.ServicePrincipalDelegatedPermissionGrantTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



