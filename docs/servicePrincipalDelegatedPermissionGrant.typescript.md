# `azuread_service_principal_delegated_permission_grant`

Refer to the Terraform Registory for docs: [`azuread_service_principal_delegated_permission_grant`](https://registry.terraform.io/providers/hashicorp/azuread/2.39.0/docs/resources/service_principal_delegated_permission_grant).

# `servicePrincipalDelegatedPermissionGrant` Submodule <a name="`servicePrincipalDelegatedPermissionGrant` Submodule" id="@cdktf/provider-azuread.servicePrincipalDelegatedPermissionGrant"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ServicePrincipalDelegatedPermissionGrant <a name="ServicePrincipalDelegatedPermissionGrant" id="@cdktf/provider-azuread.servicePrincipalDelegatedPermissionGrant.ServicePrincipalDelegatedPermissionGrant"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azuread/2.39.0/docs/resources/service_principal_delegated_permission_grant azuread_service_principal_delegated_permission_grant}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azuread.servicePrincipalDelegatedPermissionGrant.ServicePrincipalDelegatedPermissionGrant.Initializer"></a>

```typescript
import { servicePrincipalDelegatedPermissionGrant } from '@cdktf/provider-azuread'

new servicePrincipalDelegatedPermissionGrant.ServicePrincipalDelegatedPermissionGrant(scope: Construct, id: string, config: ServicePrincipalDelegatedPermissionGrantConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalDelegatedPermissionGrant.ServicePrincipalDelegatedPermissionGrant.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalDelegatedPermissionGrant.ServicePrincipalDelegatedPermissionGrant.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalDelegatedPermissionGrant.ServicePrincipalDelegatedPermissionGrant.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azuread.servicePrincipalDelegatedPermissionGrant.ServicePrincipalDelegatedPermissionGrantConfig">ServicePrincipalDelegatedPermissionGrantConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azuread.servicePrincipalDelegatedPermissionGrant.ServicePrincipalDelegatedPermissionGrant.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azuread.servicePrincipalDelegatedPermissionGrant.ServicePrincipalDelegatedPermissionGrant.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azuread.servicePrincipalDelegatedPermissionGrant.ServicePrincipalDelegatedPermissionGrant.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azuread.servicePrincipalDelegatedPermissionGrant.ServicePrincipalDelegatedPermissionGrantConfig">ServicePrincipalDelegatedPermissionGrantConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalDelegatedPermissionGrant.ServicePrincipalDelegatedPermissionGrant.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalDelegatedPermissionGrant.ServicePrincipalDelegatedPermissionGrant.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalDelegatedPermissionGrant.ServicePrincipalDelegatedPermissionGrant.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalDelegatedPermissionGrant.ServicePrincipalDelegatedPermissionGrant.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalDelegatedPermissionGrant.ServicePrincipalDelegatedPermissionGrant.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalDelegatedPermissionGrant.ServicePrincipalDelegatedPermissionGrant.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalDelegatedPermissionGrant.ServicePrincipalDelegatedPermissionGrant.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalDelegatedPermissionGrant.ServicePrincipalDelegatedPermissionGrant.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalDelegatedPermissionGrant.ServicePrincipalDelegatedPermissionGrant.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalDelegatedPermissionGrant.ServicePrincipalDelegatedPermissionGrant.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalDelegatedPermissionGrant.ServicePrincipalDelegatedPermissionGrant.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalDelegatedPermissionGrant.ServicePrincipalDelegatedPermissionGrant.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalDelegatedPermissionGrant.ServicePrincipalDelegatedPermissionGrant.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalDelegatedPermissionGrant.ServicePrincipalDelegatedPermissionGrant.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalDelegatedPermissionGrant.ServicePrincipalDelegatedPermissionGrant.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalDelegatedPermissionGrant.ServicePrincipalDelegatedPermissionGrant.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalDelegatedPermissionGrant.ServicePrincipalDelegatedPermissionGrant.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalDelegatedPermissionGrant.ServicePrincipalDelegatedPermissionGrant.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalDelegatedPermissionGrant.ServicePrincipalDelegatedPermissionGrant.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalDelegatedPermissionGrant.ServicePrincipalDelegatedPermissionGrant.resetUserObjectId">resetUserObjectId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azuread.servicePrincipalDelegatedPermissionGrant.ServicePrincipalDelegatedPermissionGrant.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azuread.servicePrincipalDelegatedPermissionGrant.ServicePrincipalDelegatedPermissionGrant.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azuread.servicePrincipalDelegatedPermissionGrant.ServicePrincipalDelegatedPermissionGrant.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azuread.servicePrincipalDelegatedPermissionGrant.ServicePrincipalDelegatedPermissionGrant.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azuread.servicePrincipalDelegatedPermissionGrant.ServicePrincipalDelegatedPermissionGrant.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azuread.servicePrincipalDelegatedPermissionGrant.ServicePrincipalDelegatedPermissionGrant.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azuread.servicePrincipalDelegatedPermissionGrant.ServicePrincipalDelegatedPermissionGrant.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azuread.servicePrincipalDelegatedPermissionGrant.ServicePrincipalDelegatedPermissionGrant.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azuread.servicePrincipalDelegatedPermissionGrant.ServicePrincipalDelegatedPermissionGrant.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azuread.servicePrincipalDelegatedPermissionGrant.ServicePrincipalDelegatedPermissionGrant.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.servicePrincipalDelegatedPermissionGrant.ServicePrincipalDelegatedPermissionGrant.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azuread.servicePrincipalDelegatedPermissionGrant.ServicePrincipalDelegatedPermissionGrant.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.servicePrincipalDelegatedPermissionGrant.ServicePrincipalDelegatedPermissionGrant.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azuread.servicePrincipalDelegatedPermissionGrant.ServicePrincipalDelegatedPermissionGrant.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.servicePrincipalDelegatedPermissionGrant.ServicePrincipalDelegatedPermissionGrant.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azuread.servicePrincipalDelegatedPermissionGrant.ServicePrincipalDelegatedPermissionGrant.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.servicePrincipalDelegatedPermissionGrant.ServicePrincipalDelegatedPermissionGrant.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azuread.servicePrincipalDelegatedPermissionGrant.ServicePrincipalDelegatedPermissionGrant.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.servicePrincipalDelegatedPermissionGrant.ServicePrincipalDelegatedPermissionGrant.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azuread.servicePrincipalDelegatedPermissionGrant.ServicePrincipalDelegatedPermissionGrant.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.servicePrincipalDelegatedPermissionGrant.ServicePrincipalDelegatedPermissionGrant.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azuread.servicePrincipalDelegatedPermissionGrant.ServicePrincipalDelegatedPermissionGrant.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.servicePrincipalDelegatedPermissionGrant.ServicePrincipalDelegatedPermissionGrant.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azuread.servicePrincipalDelegatedPermissionGrant.ServicePrincipalDelegatedPermissionGrant.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.servicePrincipalDelegatedPermissionGrant.ServicePrincipalDelegatedPermissionGrant.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azuread.servicePrincipalDelegatedPermissionGrant.ServicePrincipalDelegatedPermissionGrant.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.servicePrincipalDelegatedPermissionGrant.ServicePrincipalDelegatedPermissionGrant.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azuread.servicePrincipalDelegatedPermissionGrant.ServicePrincipalDelegatedPermissionGrant.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.servicePrincipalDelegatedPermissionGrant.ServicePrincipalDelegatedPermissionGrant.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azuread.servicePrincipalDelegatedPermissionGrant.ServicePrincipalDelegatedPermissionGrant.putTimeouts"></a>

```typescript
public putTimeouts(value: ServicePrincipalDelegatedPermissionGrantTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azuread.servicePrincipalDelegatedPermissionGrant.ServicePrincipalDelegatedPermissionGrant.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azuread.servicePrincipalDelegatedPermissionGrant.ServicePrincipalDelegatedPermissionGrantTimeouts">ServicePrincipalDelegatedPermissionGrantTimeouts</a>

---

##### `resetId` <a name="resetId" id="@cdktf/provider-azuread.servicePrincipalDelegatedPermissionGrant.ServicePrincipalDelegatedPermissionGrant.resetId"></a>

```typescript
public resetId(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azuread.servicePrincipalDelegatedPermissionGrant.ServicePrincipalDelegatedPermissionGrant.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

##### `resetUserObjectId` <a name="resetUserObjectId" id="@cdktf/provider-azuread.servicePrincipalDelegatedPermissionGrant.ServicePrincipalDelegatedPermissionGrant.resetUserObjectId"></a>

```typescript
public resetUserObjectId(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalDelegatedPermissionGrant.ServicePrincipalDelegatedPermissionGrant.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalDelegatedPermissionGrant.ServicePrincipalDelegatedPermissionGrant.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalDelegatedPermissionGrant.ServicePrincipalDelegatedPermissionGrant.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azuread.servicePrincipalDelegatedPermissionGrant.ServicePrincipalDelegatedPermissionGrant.isConstruct"></a>

```typescript
import { servicePrincipalDelegatedPermissionGrant } from '@cdktf/provider-azuread'

servicePrincipalDelegatedPermissionGrant.ServicePrincipalDelegatedPermissionGrant.isConstruct(x: any)
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

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azuread.servicePrincipalDelegatedPermissionGrant.ServicePrincipalDelegatedPermissionGrant.isTerraformElement"></a>

```typescript
import { servicePrincipalDelegatedPermissionGrant } from '@cdktf/provider-azuread'

servicePrincipalDelegatedPermissionGrant.ServicePrincipalDelegatedPermissionGrant.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azuread.servicePrincipalDelegatedPermissionGrant.ServicePrincipalDelegatedPermissionGrant.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-azuread.servicePrincipalDelegatedPermissionGrant.ServicePrincipalDelegatedPermissionGrant.isTerraformResource"></a>

```typescript
import { servicePrincipalDelegatedPermissionGrant } from '@cdktf/provider-azuread'

servicePrincipalDelegatedPermissionGrant.ServicePrincipalDelegatedPermissionGrant.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azuread.servicePrincipalDelegatedPermissionGrant.ServicePrincipalDelegatedPermissionGrant.isTerraformResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalDelegatedPermissionGrant.ServicePrincipalDelegatedPermissionGrant.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalDelegatedPermissionGrant.ServicePrincipalDelegatedPermissionGrant.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalDelegatedPermissionGrant.ServicePrincipalDelegatedPermissionGrant.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalDelegatedPermissionGrant.ServicePrincipalDelegatedPermissionGrant.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalDelegatedPermissionGrant.ServicePrincipalDelegatedPermissionGrant.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalDelegatedPermissionGrant.ServicePrincipalDelegatedPermissionGrant.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalDelegatedPermissionGrant.ServicePrincipalDelegatedPermissionGrant.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalDelegatedPermissionGrant.ServicePrincipalDelegatedPermissionGrant.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalDelegatedPermissionGrant.ServicePrincipalDelegatedPermissionGrant.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalDelegatedPermissionGrant.ServicePrincipalDelegatedPermissionGrant.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalDelegatedPermissionGrant.ServicePrincipalDelegatedPermissionGrant.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalDelegatedPermissionGrant.ServicePrincipalDelegatedPermissionGrant.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalDelegatedPermissionGrant.ServicePrincipalDelegatedPermissionGrant.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalDelegatedPermissionGrant.ServicePrincipalDelegatedPermissionGrant.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalDelegatedPermissionGrant.ServicePrincipalDelegatedPermissionGrant.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azuread.servicePrincipalDelegatedPermissionGrant.ServicePrincipalDelegatedPermissionGrantTimeoutsOutputReference">ServicePrincipalDelegatedPermissionGrantTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalDelegatedPermissionGrant.ServicePrincipalDelegatedPermissionGrant.property.claimValuesInput">claimValuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalDelegatedPermissionGrant.ServicePrincipalDelegatedPermissionGrant.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalDelegatedPermissionGrant.ServicePrincipalDelegatedPermissionGrant.property.resourceServicePrincipalObjectIdInput">resourceServicePrincipalObjectIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalDelegatedPermissionGrant.ServicePrincipalDelegatedPermissionGrant.property.servicePrincipalObjectIdInput">servicePrincipalObjectIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalDelegatedPermissionGrant.ServicePrincipalDelegatedPermissionGrant.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azuread.servicePrincipalDelegatedPermissionGrant.ServicePrincipalDelegatedPermissionGrantTimeouts">ServicePrincipalDelegatedPermissionGrantTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalDelegatedPermissionGrant.ServicePrincipalDelegatedPermissionGrant.property.userObjectIdInput">userObjectIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalDelegatedPermissionGrant.ServicePrincipalDelegatedPermissionGrant.property.claimValues">claimValues</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalDelegatedPermissionGrant.ServicePrincipalDelegatedPermissionGrant.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalDelegatedPermissionGrant.ServicePrincipalDelegatedPermissionGrant.property.resourceServicePrincipalObjectId">resourceServicePrincipalObjectId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalDelegatedPermissionGrant.ServicePrincipalDelegatedPermissionGrant.property.servicePrincipalObjectId">servicePrincipalObjectId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalDelegatedPermissionGrant.ServicePrincipalDelegatedPermissionGrant.property.userObjectId">userObjectId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azuread.servicePrincipalDelegatedPermissionGrant.ServicePrincipalDelegatedPermissionGrant.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azuread.servicePrincipalDelegatedPermissionGrant.ServicePrincipalDelegatedPermissionGrant.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azuread.servicePrincipalDelegatedPermissionGrant.ServicePrincipalDelegatedPermissionGrant.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azuread.servicePrincipalDelegatedPermissionGrant.ServicePrincipalDelegatedPermissionGrant.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azuread.servicePrincipalDelegatedPermissionGrant.ServicePrincipalDelegatedPermissionGrant.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azuread.servicePrincipalDelegatedPermissionGrant.ServicePrincipalDelegatedPermissionGrant.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azuread.servicePrincipalDelegatedPermissionGrant.ServicePrincipalDelegatedPermissionGrant.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azuread.servicePrincipalDelegatedPermissionGrant.ServicePrincipalDelegatedPermissionGrant.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azuread.servicePrincipalDelegatedPermissionGrant.ServicePrincipalDelegatedPermissionGrant.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azuread.servicePrincipalDelegatedPermissionGrant.ServicePrincipalDelegatedPermissionGrant.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azuread.servicePrincipalDelegatedPermissionGrant.ServicePrincipalDelegatedPermissionGrant.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azuread.servicePrincipalDelegatedPermissionGrant.ServicePrincipalDelegatedPermissionGrant.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azuread.servicePrincipalDelegatedPermissionGrant.ServicePrincipalDelegatedPermissionGrant.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azuread.servicePrincipalDelegatedPermissionGrant.ServicePrincipalDelegatedPermissionGrant.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azuread.servicePrincipalDelegatedPermissionGrant.ServicePrincipalDelegatedPermissionGrant.property.timeouts"></a>

```typescript
public readonly timeouts: ServicePrincipalDelegatedPermissionGrantTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azuread.servicePrincipalDelegatedPermissionGrant.ServicePrincipalDelegatedPermissionGrantTimeoutsOutputReference">ServicePrincipalDelegatedPermissionGrantTimeoutsOutputReference</a>

---

##### `claimValuesInput`<sup>Optional</sup> <a name="claimValuesInput" id="@cdktf/provider-azuread.servicePrincipalDelegatedPermissionGrant.ServicePrincipalDelegatedPermissionGrant.property.claimValuesInput"></a>

```typescript
public readonly claimValuesInput: string[];
```

- *Type:* string[]

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azuread.servicePrincipalDelegatedPermissionGrant.ServicePrincipalDelegatedPermissionGrant.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `resourceServicePrincipalObjectIdInput`<sup>Optional</sup> <a name="resourceServicePrincipalObjectIdInput" id="@cdktf/provider-azuread.servicePrincipalDelegatedPermissionGrant.ServicePrincipalDelegatedPermissionGrant.property.resourceServicePrincipalObjectIdInput"></a>

```typescript
public readonly resourceServicePrincipalObjectIdInput: string;
```

- *Type:* string

---

##### `servicePrincipalObjectIdInput`<sup>Optional</sup> <a name="servicePrincipalObjectIdInput" id="@cdktf/provider-azuread.servicePrincipalDelegatedPermissionGrant.ServicePrincipalDelegatedPermissionGrant.property.servicePrincipalObjectIdInput"></a>

```typescript
public readonly servicePrincipalObjectIdInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azuread.servicePrincipalDelegatedPermissionGrant.ServicePrincipalDelegatedPermissionGrant.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | ServicePrincipalDelegatedPermissionGrantTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azuread.servicePrincipalDelegatedPermissionGrant.ServicePrincipalDelegatedPermissionGrantTimeouts">ServicePrincipalDelegatedPermissionGrantTimeouts</a>

---

##### `userObjectIdInput`<sup>Optional</sup> <a name="userObjectIdInput" id="@cdktf/provider-azuread.servicePrincipalDelegatedPermissionGrant.ServicePrincipalDelegatedPermissionGrant.property.userObjectIdInput"></a>

```typescript
public readonly userObjectIdInput: string;
```

- *Type:* string

---

##### `claimValues`<sup>Required</sup> <a name="claimValues" id="@cdktf/provider-azuread.servicePrincipalDelegatedPermissionGrant.ServicePrincipalDelegatedPermissionGrant.property.claimValues"></a>

```typescript
public readonly claimValues: string[];
```

- *Type:* string[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azuread.servicePrincipalDelegatedPermissionGrant.ServicePrincipalDelegatedPermissionGrant.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `resourceServicePrincipalObjectId`<sup>Required</sup> <a name="resourceServicePrincipalObjectId" id="@cdktf/provider-azuread.servicePrincipalDelegatedPermissionGrant.ServicePrincipalDelegatedPermissionGrant.property.resourceServicePrincipalObjectId"></a>

```typescript
public readonly resourceServicePrincipalObjectId: string;
```

- *Type:* string

---

##### `servicePrincipalObjectId`<sup>Required</sup> <a name="servicePrincipalObjectId" id="@cdktf/provider-azuread.servicePrincipalDelegatedPermissionGrant.ServicePrincipalDelegatedPermissionGrant.property.servicePrincipalObjectId"></a>

```typescript
public readonly servicePrincipalObjectId: string;
```

- *Type:* string

---

##### `userObjectId`<sup>Required</sup> <a name="userObjectId" id="@cdktf/provider-azuread.servicePrincipalDelegatedPermissionGrant.ServicePrincipalDelegatedPermissionGrant.property.userObjectId"></a>

```typescript
public readonly userObjectId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalDelegatedPermissionGrant.ServicePrincipalDelegatedPermissionGrant.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azuread.servicePrincipalDelegatedPermissionGrant.ServicePrincipalDelegatedPermissionGrant.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ServicePrincipalDelegatedPermissionGrantConfig <a name="ServicePrincipalDelegatedPermissionGrantConfig" id="@cdktf/provider-azuread.servicePrincipalDelegatedPermissionGrant.ServicePrincipalDelegatedPermissionGrantConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azuread.servicePrincipalDelegatedPermissionGrant.ServicePrincipalDelegatedPermissionGrantConfig.Initializer"></a>

```typescript
import { servicePrincipalDelegatedPermissionGrant } from '@cdktf/provider-azuread'

const servicePrincipalDelegatedPermissionGrantConfig: servicePrincipalDelegatedPermissionGrant.ServicePrincipalDelegatedPermissionGrantConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalDelegatedPermissionGrant.ServicePrincipalDelegatedPermissionGrantConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalDelegatedPermissionGrant.ServicePrincipalDelegatedPermissionGrantConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalDelegatedPermissionGrant.ServicePrincipalDelegatedPermissionGrantConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalDelegatedPermissionGrant.ServicePrincipalDelegatedPermissionGrantConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalDelegatedPermissionGrant.ServicePrincipalDelegatedPermissionGrantConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalDelegatedPermissionGrant.ServicePrincipalDelegatedPermissionGrantConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalDelegatedPermissionGrant.ServicePrincipalDelegatedPermissionGrantConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalDelegatedPermissionGrant.ServicePrincipalDelegatedPermissionGrantConfig.property.claimValues">claimValues</a></code> | <code>string[]</code> | A set of claim values for delegated permission scopes which should be included in access tokens for the resource. |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalDelegatedPermissionGrant.ServicePrincipalDelegatedPermissionGrantConfig.property.resourceServicePrincipalObjectId">resourceServicePrincipalObjectId</a></code> | <code>string</code> | The object ID of the service principal representing the resource to be accessed. |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalDelegatedPermissionGrant.ServicePrincipalDelegatedPermissionGrantConfig.property.servicePrincipalObjectId">servicePrincipalObjectId</a></code> | <code>string</code> | The object ID of the service principal for which this delegated permission grant should be created. |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalDelegatedPermissionGrant.ServicePrincipalDelegatedPermissionGrantConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.39.0/docs/resources/service_principal_delegated_permission_grant#id ServicePrincipalDelegatedPermissionGrant#id}. |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalDelegatedPermissionGrant.ServicePrincipalDelegatedPermissionGrantConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azuread.servicePrincipalDelegatedPermissionGrant.ServicePrincipalDelegatedPermissionGrantTimeouts">ServicePrincipalDelegatedPermissionGrantTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalDelegatedPermissionGrant.ServicePrincipalDelegatedPermissionGrantConfig.property.userObjectId">userObjectId</a></code> | <code>string</code> | The object ID of the user on behalf of whom the service principal is authorized to access the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azuread.servicePrincipalDelegatedPermissionGrant.ServicePrincipalDelegatedPermissionGrantConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azuread.servicePrincipalDelegatedPermissionGrant.ServicePrincipalDelegatedPermissionGrantConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azuread.servicePrincipalDelegatedPermissionGrant.ServicePrincipalDelegatedPermissionGrantConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azuread.servicePrincipalDelegatedPermissionGrant.ServicePrincipalDelegatedPermissionGrantConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azuread.servicePrincipalDelegatedPermissionGrant.ServicePrincipalDelegatedPermissionGrantConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azuread.servicePrincipalDelegatedPermissionGrant.ServicePrincipalDelegatedPermissionGrantConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azuread.servicePrincipalDelegatedPermissionGrant.ServicePrincipalDelegatedPermissionGrantConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `claimValues`<sup>Required</sup> <a name="claimValues" id="@cdktf/provider-azuread.servicePrincipalDelegatedPermissionGrant.ServicePrincipalDelegatedPermissionGrantConfig.property.claimValues"></a>

```typescript
public readonly claimValues: string[];
```

- *Type:* string[]

A set of claim values for delegated permission scopes which should be included in access tokens for the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.39.0/docs/resources/service_principal_delegated_permission_grant#claim_values ServicePrincipalDelegatedPermissionGrant#claim_values}

---

##### `resourceServicePrincipalObjectId`<sup>Required</sup> <a name="resourceServicePrincipalObjectId" id="@cdktf/provider-azuread.servicePrincipalDelegatedPermissionGrant.ServicePrincipalDelegatedPermissionGrantConfig.property.resourceServicePrincipalObjectId"></a>

```typescript
public readonly resourceServicePrincipalObjectId: string;
```

- *Type:* string

The object ID of the service principal representing the resource to be accessed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.39.0/docs/resources/service_principal_delegated_permission_grant#resource_service_principal_object_id ServicePrincipalDelegatedPermissionGrant#resource_service_principal_object_id}

---

##### `servicePrincipalObjectId`<sup>Required</sup> <a name="servicePrincipalObjectId" id="@cdktf/provider-azuread.servicePrincipalDelegatedPermissionGrant.ServicePrincipalDelegatedPermissionGrantConfig.property.servicePrincipalObjectId"></a>

```typescript
public readonly servicePrincipalObjectId: string;
```

- *Type:* string

The object ID of the service principal for which this delegated permission grant should be created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.39.0/docs/resources/service_principal_delegated_permission_grant#service_principal_object_id ServicePrincipalDelegatedPermissionGrant#service_principal_object_id}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azuread.servicePrincipalDelegatedPermissionGrant.ServicePrincipalDelegatedPermissionGrantConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.39.0/docs/resources/service_principal_delegated_permission_grant#id ServicePrincipalDelegatedPermissionGrant#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azuread.servicePrincipalDelegatedPermissionGrant.ServicePrincipalDelegatedPermissionGrantConfig.property.timeouts"></a>

```typescript
public readonly timeouts: ServicePrincipalDelegatedPermissionGrantTimeouts;
```

- *Type:* <a href="#@cdktf/provider-azuread.servicePrincipalDelegatedPermissionGrant.ServicePrincipalDelegatedPermissionGrantTimeouts">ServicePrincipalDelegatedPermissionGrantTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.39.0/docs/resources/service_principal_delegated_permission_grant#timeouts ServicePrincipalDelegatedPermissionGrant#timeouts}

---

##### `userObjectId`<sup>Optional</sup> <a name="userObjectId" id="@cdktf/provider-azuread.servicePrincipalDelegatedPermissionGrant.ServicePrincipalDelegatedPermissionGrantConfig.property.userObjectId"></a>

```typescript
public readonly userObjectId: string;
```

- *Type:* string

The object ID of the user on behalf of whom the service principal is authorized to access the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.39.0/docs/resources/service_principal_delegated_permission_grant#user_object_id ServicePrincipalDelegatedPermissionGrant#user_object_id}

---

### ServicePrincipalDelegatedPermissionGrantTimeouts <a name="ServicePrincipalDelegatedPermissionGrantTimeouts" id="@cdktf/provider-azuread.servicePrincipalDelegatedPermissionGrant.ServicePrincipalDelegatedPermissionGrantTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azuread.servicePrincipalDelegatedPermissionGrant.ServicePrincipalDelegatedPermissionGrantTimeouts.Initializer"></a>

```typescript
import { servicePrincipalDelegatedPermissionGrant } from '@cdktf/provider-azuread'

const servicePrincipalDelegatedPermissionGrantTimeouts: servicePrincipalDelegatedPermissionGrant.ServicePrincipalDelegatedPermissionGrantTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalDelegatedPermissionGrant.ServicePrincipalDelegatedPermissionGrantTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.39.0/docs/resources/service_principal_delegated_permission_grant#create ServicePrincipalDelegatedPermissionGrant#create}. |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalDelegatedPermissionGrant.ServicePrincipalDelegatedPermissionGrantTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.39.0/docs/resources/service_principal_delegated_permission_grant#delete ServicePrincipalDelegatedPermissionGrant#delete}. |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalDelegatedPermissionGrant.ServicePrincipalDelegatedPermissionGrantTimeouts.property.read">read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.39.0/docs/resources/service_principal_delegated_permission_grant#read ServicePrincipalDelegatedPermissionGrant#read}. |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalDelegatedPermissionGrant.ServicePrincipalDelegatedPermissionGrantTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.39.0/docs/resources/service_principal_delegated_permission_grant#update ServicePrincipalDelegatedPermissionGrant#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azuread.servicePrincipalDelegatedPermissionGrant.ServicePrincipalDelegatedPermissionGrantTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.39.0/docs/resources/service_principal_delegated_permission_grant#create ServicePrincipalDelegatedPermissionGrant#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azuread.servicePrincipalDelegatedPermissionGrant.ServicePrincipalDelegatedPermissionGrantTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.39.0/docs/resources/service_principal_delegated_permission_grant#delete ServicePrincipalDelegatedPermissionGrant#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azuread.servicePrincipalDelegatedPermissionGrant.ServicePrincipalDelegatedPermissionGrantTimeouts.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.39.0/docs/resources/service_principal_delegated_permission_grant#read ServicePrincipalDelegatedPermissionGrant#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azuread.servicePrincipalDelegatedPermissionGrant.ServicePrincipalDelegatedPermissionGrantTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.39.0/docs/resources/service_principal_delegated_permission_grant#update ServicePrincipalDelegatedPermissionGrant#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ServicePrincipalDelegatedPermissionGrantTimeoutsOutputReference <a name="ServicePrincipalDelegatedPermissionGrantTimeoutsOutputReference" id="@cdktf/provider-azuread.servicePrincipalDelegatedPermissionGrant.ServicePrincipalDelegatedPermissionGrantTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azuread.servicePrincipalDelegatedPermissionGrant.ServicePrincipalDelegatedPermissionGrantTimeoutsOutputReference.Initializer"></a>

```typescript
import { servicePrincipalDelegatedPermissionGrant } from '@cdktf/provider-azuread'

new servicePrincipalDelegatedPermissionGrant.ServicePrincipalDelegatedPermissionGrantTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalDelegatedPermissionGrant.ServicePrincipalDelegatedPermissionGrantTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalDelegatedPermissionGrant.ServicePrincipalDelegatedPermissionGrantTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azuread.servicePrincipalDelegatedPermissionGrant.ServicePrincipalDelegatedPermissionGrantTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.servicePrincipalDelegatedPermissionGrant.ServicePrincipalDelegatedPermissionGrantTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalDelegatedPermissionGrant.ServicePrincipalDelegatedPermissionGrantTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalDelegatedPermissionGrant.ServicePrincipalDelegatedPermissionGrantTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalDelegatedPermissionGrant.ServicePrincipalDelegatedPermissionGrantTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalDelegatedPermissionGrant.ServicePrincipalDelegatedPermissionGrantTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalDelegatedPermissionGrant.ServicePrincipalDelegatedPermissionGrantTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalDelegatedPermissionGrant.ServicePrincipalDelegatedPermissionGrantTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalDelegatedPermissionGrant.ServicePrincipalDelegatedPermissionGrantTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalDelegatedPermissionGrant.ServicePrincipalDelegatedPermissionGrantTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalDelegatedPermissionGrant.ServicePrincipalDelegatedPermissionGrantTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalDelegatedPermissionGrant.ServicePrincipalDelegatedPermissionGrantTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalDelegatedPermissionGrant.ServicePrincipalDelegatedPermissionGrantTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalDelegatedPermissionGrant.ServicePrincipalDelegatedPermissionGrantTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalDelegatedPermissionGrant.ServicePrincipalDelegatedPermissionGrantTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalDelegatedPermissionGrant.ServicePrincipalDelegatedPermissionGrantTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalDelegatedPermissionGrant.ServicePrincipalDelegatedPermissionGrantTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalDelegatedPermissionGrant.ServicePrincipalDelegatedPermissionGrantTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalDelegatedPermissionGrant.ServicePrincipalDelegatedPermissionGrantTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azuread.servicePrincipalDelegatedPermissionGrant.ServicePrincipalDelegatedPermissionGrantTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azuread.servicePrincipalDelegatedPermissionGrant.ServicePrincipalDelegatedPermissionGrantTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.servicePrincipalDelegatedPermissionGrant.ServicePrincipalDelegatedPermissionGrantTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azuread.servicePrincipalDelegatedPermissionGrant.ServicePrincipalDelegatedPermissionGrantTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.servicePrincipalDelegatedPermissionGrant.ServicePrincipalDelegatedPermissionGrantTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azuread.servicePrincipalDelegatedPermissionGrant.ServicePrincipalDelegatedPermissionGrantTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.servicePrincipalDelegatedPermissionGrant.ServicePrincipalDelegatedPermissionGrantTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azuread.servicePrincipalDelegatedPermissionGrant.ServicePrincipalDelegatedPermissionGrantTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.servicePrincipalDelegatedPermissionGrant.ServicePrincipalDelegatedPermissionGrantTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azuread.servicePrincipalDelegatedPermissionGrant.ServicePrincipalDelegatedPermissionGrantTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.servicePrincipalDelegatedPermissionGrant.ServicePrincipalDelegatedPermissionGrantTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azuread.servicePrincipalDelegatedPermissionGrant.ServicePrincipalDelegatedPermissionGrantTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.servicePrincipalDelegatedPermissionGrant.ServicePrincipalDelegatedPermissionGrantTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azuread.servicePrincipalDelegatedPermissionGrant.ServicePrincipalDelegatedPermissionGrantTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.servicePrincipalDelegatedPermissionGrant.ServicePrincipalDelegatedPermissionGrantTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azuread.servicePrincipalDelegatedPermissionGrant.ServicePrincipalDelegatedPermissionGrantTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.servicePrincipalDelegatedPermissionGrant.ServicePrincipalDelegatedPermissionGrantTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azuread.servicePrincipalDelegatedPermissionGrant.ServicePrincipalDelegatedPermissionGrantTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.servicePrincipalDelegatedPermissionGrant.ServicePrincipalDelegatedPermissionGrantTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azuread.servicePrincipalDelegatedPermissionGrant.ServicePrincipalDelegatedPermissionGrantTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azuread.servicePrincipalDelegatedPermissionGrant.ServicePrincipalDelegatedPermissionGrantTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azuread.servicePrincipalDelegatedPermissionGrant.ServicePrincipalDelegatedPermissionGrantTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azuread.servicePrincipalDelegatedPermissionGrant.ServicePrincipalDelegatedPermissionGrantTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azuread.servicePrincipalDelegatedPermissionGrant.ServicePrincipalDelegatedPermissionGrantTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-azuread.servicePrincipalDelegatedPermissionGrant.ServicePrincipalDelegatedPermissionGrantTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-azuread.servicePrincipalDelegatedPermissionGrant.ServicePrincipalDelegatedPermissionGrantTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azuread.servicePrincipalDelegatedPermissionGrant.ServicePrincipalDelegatedPermissionGrantTimeoutsOutputReference.resetRead"></a>

```typescript
public resetRead(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-azuread.servicePrincipalDelegatedPermissionGrant.ServicePrincipalDelegatedPermissionGrantTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalDelegatedPermissionGrant.ServicePrincipalDelegatedPermissionGrantTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalDelegatedPermissionGrant.ServicePrincipalDelegatedPermissionGrantTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalDelegatedPermissionGrant.ServicePrincipalDelegatedPermissionGrantTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalDelegatedPermissionGrant.ServicePrincipalDelegatedPermissionGrantTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalDelegatedPermissionGrant.ServicePrincipalDelegatedPermissionGrantTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalDelegatedPermissionGrant.ServicePrincipalDelegatedPermissionGrantTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalDelegatedPermissionGrant.ServicePrincipalDelegatedPermissionGrantTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalDelegatedPermissionGrant.ServicePrincipalDelegatedPermissionGrantTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalDelegatedPermissionGrant.ServicePrincipalDelegatedPermissionGrantTimeoutsOutputReference.property.read">read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalDelegatedPermissionGrant.ServicePrincipalDelegatedPermissionGrantTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalDelegatedPermissionGrant.ServicePrincipalDelegatedPermissionGrantTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azuread.servicePrincipalDelegatedPermissionGrant.ServicePrincipalDelegatedPermissionGrantTimeouts">ServicePrincipalDelegatedPermissionGrantTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azuread.servicePrincipalDelegatedPermissionGrant.ServicePrincipalDelegatedPermissionGrantTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azuread.servicePrincipalDelegatedPermissionGrant.ServicePrincipalDelegatedPermissionGrantTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-azuread.servicePrincipalDelegatedPermissionGrant.ServicePrincipalDelegatedPermissionGrantTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-azuread.servicePrincipalDelegatedPermissionGrant.ServicePrincipalDelegatedPermissionGrantTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azuread.servicePrincipalDelegatedPermissionGrant.ServicePrincipalDelegatedPermissionGrantTimeoutsOutputReference.property.readInput"></a>

```typescript
public readonly readInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-azuread.servicePrincipalDelegatedPermissionGrant.ServicePrincipalDelegatedPermissionGrantTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azuread.servicePrincipalDelegatedPermissionGrant.ServicePrincipalDelegatedPermissionGrantTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azuread.servicePrincipalDelegatedPermissionGrant.ServicePrincipalDelegatedPermissionGrantTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azuread.servicePrincipalDelegatedPermissionGrant.ServicePrincipalDelegatedPermissionGrantTimeoutsOutputReference.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azuread.servicePrincipalDelegatedPermissionGrant.ServicePrincipalDelegatedPermissionGrantTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azuread.servicePrincipalDelegatedPermissionGrant.ServicePrincipalDelegatedPermissionGrantTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ServicePrincipalDelegatedPermissionGrantTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azuread.servicePrincipalDelegatedPermissionGrant.ServicePrincipalDelegatedPermissionGrantTimeouts">ServicePrincipalDelegatedPermissionGrantTimeouts</a>

---



