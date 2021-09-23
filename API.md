# API Reference <a name="API Reference"></a>

## Constructs <a name="Constructs"></a>

### Application <a name="@cdktf/provider-azuread.Application"></a>

Represents a {@link https://www.terraform.io/docs/providers/azuread/r/application.html azuread_application}.

#### Initializers <a name="@cdktf/provider-azuread.Application.Initializer"></a>

```typescript
import { Application } from '@cdktf/provider-azuread'

new Application(scope: Construct, id: string, config: ApplicationConfig)
```

##### `scope`<sup>Required</sup> <a name="@cdktf/provider-azuread.Application.parameter.scope"></a>

- *Type:* [`constructs.Construct`](#constructs.Construct)

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="@cdktf/provider-azuread.Application.parameter.id"></a>

- *Type:* `string`

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="@cdktf/provider-azuread.Application.parameter.config"></a>

- *Type:* [`@cdktf/provider-azuread.ApplicationConfig`](#@cdktf/provider-azuread.ApplicationConfig)

---

#### Methods <a name="Methods"></a>

##### `appRoleIds` <a name="@cdktf/provider-azuread.Application.appRoleIds"></a>

```typescript
public appRoleIds(key: string)
```

###### `key`<sup>Required</sup> <a name="@cdktf/provider-azuread.Application.parameter.key"></a>

- *Type:* `string`

---

##### `oauth2PermissionScopeIds` <a name="@cdktf/provider-azuread.Application.oauth2PermissionScopeIds"></a>

```typescript
public oauth2PermissionScopeIds(key: string)
```

###### `key`<sup>Required</sup> <a name="@cdktf/provider-azuread.Application.parameter.key"></a>

- *Type:* `string`

---

##### `resetApi` <a name="@cdktf/provider-azuread.Application.resetApi"></a>

```typescript
public resetApi()
```

##### `resetAppRole` <a name="@cdktf/provider-azuread.Application.resetAppRole"></a>

```typescript
public resetAppRole()
```

##### `resetDeviceOnlyAuthEnabled` <a name="@cdktf/provider-azuread.Application.resetDeviceOnlyAuthEnabled"></a>

```typescript
public resetDeviceOnlyAuthEnabled()
```

##### `resetFallbackPublicClientEnabled` <a name="@cdktf/provider-azuread.Application.resetFallbackPublicClientEnabled"></a>

```typescript
public resetFallbackPublicClientEnabled()
```

##### `resetGroupMembershipClaims` <a name="@cdktf/provider-azuread.Application.resetGroupMembershipClaims"></a>

```typescript
public resetGroupMembershipClaims()
```

##### `resetIdentifierUris` <a name="@cdktf/provider-azuread.Application.resetIdentifierUris"></a>

```typescript
public resetIdentifierUris()
```

##### `resetLogoImage` <a name="@cdktf/provider-azuread.Application.resetLogoImage"></a>

```typescript
public resetLogoImage()
```

##### `resetMarketingUrl` <a name="@cdktf/provider-azuread.Application.resetMarketingUrl"></a>

```typescript
public resetMarketingUrl()
```

##### `resetOauth2PostResponseRequired` <a name="@cdktf/provider-azuread.Application.resetOauth2PostResponseRequired"></a>

```typescript
public resetOauth2PostResponseRequired()
```

##### `resetOptionalClaims` <a name="@cdktf/provider-azuread.Application.resetOptionalClaims"></a>

```typescript
public resetOptionalClaims()
```

##### `resetOwners` <a name="@cdktf/provider-azuread.Application.resetOwners"></a>

```typescript
public resetOwners()
```

##### `resetPreventDuplicateNames` <a name="@cdktf/provider-azuread.Application.resetPreventDuplicateNames"></a>

```typescript
public resetPreventDuplicateNames()
```

##### `resetPrivacyStatementUrl` <a name="@cdktf/provider-azuread.Application.resetPrivacyStatementUrl"></a>

```typescript
public resetPrivacyStatementUrl()
```

##### `resetPublicClient` <a name="@cdktf/provider-azuread.Application.resetPublicClient"></a>

```typescript
public resetPublicClient()
```

##### `resetRequiredResourceAccess` <a name="@cdktf/provider-azuread.Application.resetRequiredResourceAccess"></a>

```typescript
public resetRequiredResourceAccess()
```

##### `resetSignInAudience` <a name="@cdktf/provider-azuread.Application.resetSignInAudience"></a>

```typescript
public resetSignInAudience()
```

##### `resetSinglePageApplication` <a name="@cdktf/provider-azuread.Application.resetSinglePageApplication"></a>

```typescript
public resetSinglePageApplication()
```

##### `resetSupportUrl` <a name="@cdktf/provider-azuread.Application.resetSupportUrl"></a>

```typescript
public resetSupportUrl()
```

##### `resetTemplateId` <a name="@cdktf/provider-azuread.Application.resetTemplateId"></a>

```typescript
public resetTemplateId()
```

##### `resetTermsOfServiceUrl` <a name="@cdktf/provider-azuread.Application.resetTermsOfServiceUrl"></a>

```typescript
public resetTermsOfServiceUrl()
```

##### `resetTimeouts` <a name="@cdktf/provider-azuread.Application.resetTimeouts"></a>

```typescript
public resetTimeouts()
```

##### `resetWeb` <a name="@cdktf/provider-azuread.Application.resetWeb"></a>

```typescript
public resetWeb()
```


#### Properties <a name="Properties"></a>

##### `applicationId`<sup>Required</sup> <a name="@cdktf/provider-azuread.Application.property.applicationId"></a>

```typescript
public readonly applicationId: string;
```

- *Type:* `string`

---

##### `disabledByMicrosoft`<sup>Required</sup> <a name="@cdktf/provider-azuread.Application.property.disabledByMicrosoft"></a>

```typescript
public readonly disabledByMicrosoft: string;
```

- *Type:* `string`

---

##### `displayNameInput`<sup>Required</sup> <a name="@cdktf/provider-azuread.Application.property.displayNameInput"></a>

```typescript
public readonly displayNameInput: string;
```

- *Type:* `string`

---

##### `id`<sup>Required</sup> <a name="@cdktf/provider-azuread.Application.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* `string`

---

##### `logoUrl`<sup>Required</sup> <a name="@cdktf/provider-azuread.Application.property.logoUrl"></a>

```typescript
public readonly logoUrl: string;
```

- *Type:* `string`

---

##### `objectId`<sup>Required</sup> <a name="@cdktf/provider-azuread.Application.property.objectId"></a>

```typescript
public readonly objectId: string;
```

- *Type:* `string`

---

##### `publisherDomain`<sup>Required</sup> <a name="@cdktf/provider-azuread.Application.property.publisherDomain"></a>

```typescript
public readonly publisherDomain: string;
```

- *Type:* `string`

---

##### `apiInput`<sup>Optional</sup> <a name="@cdktf/provider-azuread.Application.property.apiInput"></a>

```typescript
public readonly apiInput: ApplicationApi[];
```

- *Type:* [`@cdktf/provider-azuread.ApplicationApi`](#@cdktf/provider-azuread.ApplicationApi)[]

---

##### `appRoleInput`<sup>Optional</sup> <a name="@cdktf/provider-azuread.Application.property.appRoleInput"></a>

```typescript
public readonly appRoleInput: ApplicationAppRole[];
```

- *Type:* [`@cdktf/provider-azuread.ApplicationAppRole`](#@cdktf/provider-azuread.ApplicationAppRole)[]

---

##### `deviceOnlyAuthEnabledInput`<sup>Optional</sup> <a name="@cdktf/provider-azuread.Application.property.deviceOnlyAuthEnabledInput"></a>

```typescript
public readonly deviceOnlyAuthEnabledInput: boolean | IResolvable;
```

- *Type:* `boolean` | [`cdktf.IResolvable`](#cdktf.IResolvable)

---

##### `fallbackPublicClientEnabledInput`<sup>Optional</sup> <a name="@cdktf/provider-azuread.Application.property.fallbackPublicClientEnabledInput"></a>

```typescript
public readonly fallbackPublicClientEnabledInput: boolean | IResolvable;
```

- *Type:* `boolean` | [`cdktf.IResolvable`](#cdktf.IResolvable)

---

##### `groupMembershipClaimsInput`<sup>Optional</sup> <a name="@cdktf/provider-azuread.Application.property.groupMembershipClaimsInput"></a>

```typescript
public readonly groupMembershipClaimsInput: string[];
```

- *Type:* `string`[]

---

##### `identifierUrisInput`<sup>Optional</sup> <a name="@cdktf/provider-azuread.Application.property.identifierUrisInput"></a>

```typescript
public readonly identifierUrisInput: string[];
```

- *Type:* `string`[]

---

##### `logoImageInput`<sup>Optional</sup> <a name="@cdktf/provider-azuread.Application.property.logoImageInput"></a>

```typescript
public readonly logoImageInput: string;
```

- *Type:* `string`

---

##### `marketingUrlInput`<sup>Optional</sup> <a name="@cdktf/provider-azuread.Application.property.marketingUrlInput"></a>

```typescript
public readonly marketingUrlInput: string;
```

- *Type:* `string`

---

##### `oauth2PostResponseRequiredInput`<sup>Optional</sup> <a name="@cdktf/provider-azuread.Application.property.oauth2PostResponseRequiredInput"></a>

```typescript
public readonly oauth2PostResponseRequiredInput: boolean | IResolvable;
```

- *Type:* `boolean` | [`cdktf.IResolvable`](#cdktf.IResolvable)

---

##### `optionalClaimsInput`<sup>Optional</sup> <a name="@cdktf/provider-azuread.Application.property.optionalClaimsInput"></a>

```typescript
public readonly optionalClaimsInput: ApplicationOptionalClaims[];
```

- *Type:* [`@cdktf/provider-azuread.ApplicationOptionalClaims`](#@cdktf/provider-azuread.ApplicationOptionalClaims)[]

---

##### `ownersInput`<sup>Optional</sup> <a name="@cdktf/provider-azuread.Application.property.ownersInput"></a>

```typescript
public readonly ownersInput: string[];
```

- *Type:* `string`[]

---

##### `preventDuplicateNamesInput`<sup>Optional</sup> <a name="@cdktf/provider-azuread.Application.property.preventDuplicateNamesInput"></a>

```typescript
public readonly preventDuplicateNamesInput: boolean | IResolvable;
```

- *Type:* `boolean` | [`cdktf.IResolvable`](#cdktf.IResolvable)

---

##### `privacyStatementUrlInput`<sup>Optional</sup> <a name="@cdktf/provider-azuread.Application.property.privacyStatementUrlInput"></a>

```typescript
public readonly privacyStatementUrlInput: string;
```

- *Type:* `string`

---

##### `publicClientInput`<sup>Optional</sup> <a name="@cdktf/provider-azuread.Application.property.publicClientInput"></a>

```typescript
public readonly publicClientInput: ApplicationPublicClient[];
```

- *Type:* [`@cdktf/provider-azuread.ApplicationPublicClient`](#@cdktf/provider-azuread.ApplicationPublicClient)[]

---

##### `requiredResourceAccessInput`<sup>Optional</sup> <a name="@cdktf/provider-azuread.Application.property.requiredResourceAccessInput"></a>

```typescript
public readonly requiredResourceAccessInput: ApplicationRequiredResourceAccess[];
```

- *Type:* [`@cdktf/provider-azuread.ApplicationRequiredResourceAccess`](#@cdktf/provider-azuread.ApplicationRequiredResourceAccess)[]

---

##### `signInAudienceInput`<sup>Optional</sup> <a name="@cdktf/provider-azuread.Application.property.signInAudienceInput"></a>

```typescript
public readonly signInAudienceInput: string;
```

- *Type:* `string`

---

##### `singlePageApplicationInput`<sup>Optional</sup> <a name="@cdktf/provider-azuread.Application.property.singlePageApplicationInput"></a>

```typescript
public readonly singlePageApplicationInput: ApplicationSinglePageApplication[];
```

- *Type:* [`@cdktf/provider-azuread.ApplicationSinglePageApplication`](#@cdktf/provider-azuread.ApplicationSinglePageApplication)[]

---

##### `supportUrlInput`<sup>Optional</sup> <a name="@cdktf/provider-azuread.Application.property.supportUrlInput"></a>

```typescript
public readonly supportUrlInput: string;
```

- *Type:* `string`

---

##### `templateIdInput`<sup>Optional</sup> <a name="@cdktf/provider-azuread.Application.property.templateIdInput"></a>

```typescript
public readonly templateIdInput: string;
```

- *Type:* `string`

---

##### `termsOfServiceUrlInput`<sup>Optional</sup> <a name="@cdktf/provider-azuread.Application.property.termsOfServiceUrlInput"></a>

```typescript
public readonly termsOfServiceUrlInput: string;
```

- *Type:* `string`

---

##### `timeoutsInput`<sup>Optional</sup> <a name="@cdktf/provider-azuread.Application.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: ApplicationTimeouts;
```

- *Type:* [`@cdktf/provider-azuread.ApplicationTimeouts`](#@cdktf/provider-azuread.ApplicationTimeouts)

---

##### `webInput`<sup>Optional</sup> <a name="@cdktf/provider-azuread.Application.property.webInput"></a>

```typescript
public readonly webInput: ApplicationWeb[];
```

- *Type:* [`@cdktf/provider-azuread.ApplicationWeb`](#@cdktf/provider-azuread.ApplicationWeb)[]

---

##### `api`<sup>Required</sup> <a name="@cdktf/provider-azuread.Application.property.api"></a>

```typescript
public readonly api: ApplicationApi[];
```

- *Type:* [`@cdktf/provider-azuread.ApplicationApi`](#@cdktf/provider-azuread.ApplicationApi)[]

---

##### `appRole`<sup>Required</sup> <a name="@cdktf/provider-azuread.Application.property.appRole"></a>

```typescript
public readonly appRole: ApplicationAppRole[];
```

- *Type:* [`@cdktf/provider-azuread.ApplicationAppRole`](#@cdktf/provider-azuread.ApplicationAppRole)[]

---

##### `deviceOnlyAuthEnabled`<sup>Required</sup> <a name="@cdktf/provider-azuread.Application.property.deviceOnlyAuthEnabled"></a>

```typescript
public readonly deviceOnlyAuthEnabled: boolean | IResolvable;
```

- *Type:* `boolean` | [`cdktf.IResolvable`](#cdktf.IResolvable)

---

##### `displayName`<sup>Required</sup> <a name="@cdktf/provider-azuread.Application.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* `string`

---

##### `fallbackPublicClientEnabled`<sup>Required</sup> <a name="@cdktf/provider-azuread.Application.property.fallbackPublicClientEnabled"></a>

```typescript
public readonly fallbackPublicClientEnabled: boolean | IResolvable;
```

- *Type:* `boolean` | [`cdktf.IResolvable`](#cdktf.IResolvable)

---

##### `groupMembershipClaims`<sup>Required</sup> <a name="@cdktf/provider-azuread.Application.property.groupMembershipClaims"></a>

```typescript
public readonly groupMembershipClaims: string[];
```

- *Type:* `string`[]

---

##### `identifierUris`<sup>Required</sup> <a name="@cdktf/provider-azuread.Application.property.identifierUris"></a>

```typescript
public readonly identifierUris: string[];
```

- *Type:* `string`[]

---

##### `logoImage`<sup>Required</sup> <a name="@cdktf/provider-azuread.Application.property.logoImage"></a>

```typescript
public readonly logoImage: string;
```

- *Type:* `string`

---

##### `marketingUrl`<sup>Required</sup> <a name="@cdktf/provider-azuread.Application.property.marketingUrl"></a>

```typescript
public readonly marketingUrl: string;
```

- *Type:* `string`

---

##### `oauth2PostResponseRequired`<sup>Required</sup> <a name="@cdktf/provider-azuread.Application.property.oauth2PostResponseRequired"></a>

```typescript
public readonly oauth2PostResponseRequired: boolean | IResolvable;
```

- *Type:* `boolean` | [`cdktf.IResolvable`](#cdktf.IResolvable)

---

##### `optionalClaims`<sup>Required</sup> <a name="@cdktf/provider-azuread.Application.property.optionalClaims"></a>

```typescript
public readonly optionalClaims: ApplicationOptionalClaims[];
```

- *Type:* [`@cdktf/provider-azuread.ApplicationOptionalClaims`](#@cdktf/provider-azuread.ApplicationOptionalClaims)[]

---

##### `owners`<sup>Required</sup> <a name="@cdktf/provider-azuread.Application.property.owners"></a>

```typescript
public readonly owners: string[];
```

- *Type:* `string`[]

---

##### `preventDuplicateNames`<sup>Required</sup> <a name="@cdktf/provider-azuread.Application.property.preventDuplicateNames"></a>

```typescript
public readonly preventDuplicateNames: boolean | IResolvable;
```

- *Type:* `boolean` | [`cdktf.IResolvable`](#cdktf.IResolvable)

---

##### `privacyStatementUrl`<sup>Required</sup> <a name="@cdktf/provider-azuread.Application.property.privacyStatementUrl"></a>

```typescript
public readonly privacyStatementUrl: string;
```

- *Type:* `string`

---

##### `publicClient`<sup>Required</sup> <a name="@cdktf/provider-azuread.Application.property.publicClient"></a>

```typescript
public readonly publicClient: ApplicationPublicClient[];
```

- *Type:* [`@cdktf/provider-azuread.ApplicationPublicClient`](#@cdktf/provider-azuread.ApplicationPublicClient)[]

---

##### `requiredResourceAccess`<sup>Required</sup> <a name="@cdktf/provider-azuread.Application.property.requiredResourceAccess"></a>

```typescript
public readonly requiredResourceAccess: ApplicationRequiredResourceAccess[];
```

- *Type:* [`@cdktf/provider-azuread.ApplicationRequiredResourceAccess`](#@cdktf/provider-azuread.ApplicationRequiredResourceAccess)[]

---

##### `signInAudience`<sup>Required</sup> <a name="@cdktf/provider-azuread.Application.property.signInAudience"></a>

```typescript
public readonly signInAudience: string;
```

- *Type:* `string`

---

##### `singlePageApplication`<sup>Required</sup> <a name="@cdktf/provider-azuread.Application.property.singlePageApplication"></a>

```typescript
public readonly singlePageApplication: ApplicationSinglePageApplication[];
```

- *Type:* [`@cdktf/provider-azuread.ApplicationSinglePageApplication`](#@cdktf/provider-azuread.ApplicationSinglePageApplication)[]

---

##### `supportUrl`<sup>Required</sup> <a name="@cdktf/provider-azuread.Application.property.supportUrl"></a>

```typescript
public readonly supportUrl: string;
```

- *Type:* `string`

---

##### `templateId`<sup>Required</sup> <a name="@cdktf/provider-azuread.Application.property.templateId"></a>

```typescript
public readonly templateId: string;
```

- *Type:* `string`

---

##### `termsOfServiceUrl`<sup>Required</sup> <a name="@cdktf/provider-azuread.Application.property.termsOfServiceUrl"></a>

```typescript
public readonly termsOfServiceUrl: string;
```

- *Type:* `string`

---

##### `timeouts`<sup>Required</sup> <a name="@cdktf/provider-azuread.Application.property.timeouts"></a>

```typescript
public readonly timeouts: ApplicationTimeouts;
```

- *Type:* [`@cdktf/provider-azuread.ApplicationTimeouts`](#@cdktf/provider-azuread.ApplicationTimeouts)

---

##### `web`<sup>Required</sup> <a name="@cdktf/provider-azuread.Application.property.web"></a>

```typescript
public readonly web: ApplicationWeb[];
```

- *Type:* [`@cdktf/provider-azuread.ApplicationWeb`](#@cdktf/provider-azuread.ApplicationWeb)[]

---

#### Constants <a name="Constants"></a>

##### `tfResourceType` <a name="@cdktf/provider-azuread.Application.property.tfResourceType"></a>

- *Type:* `string`

---

### ApplicationCertificate <a name="@cdktf/provider-azuread.ApplicationCertificate"></a>

Represents a {@link https://www.terraform.io/docs/providers/azuread/r/application_certificate.html azuread_application_certificate}.

#### Initializers <a name="@cdktf/provider-azuread.ApplicationCertificate.Initializer"></a>

```typescript
import { ApplicationCertificate } from '@cdktf/provider-azuread'

new ApplicationCertificate(scope: Construct, id: string, config: ApplicationCertificateConfig)
```

##### `scope`<sup>Required</sup> <a name="@cdktf/provider-azuread.ApplicationCertificate.parameter.scope"></a>

- *Type:* [`constructs.Construct`](#constructs.Construct)

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="@cdktf/provider-azuread.ApplicationCertificate.parameter.id"></a>

- *Type:* `string`

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="@cdktf/provider-azuread.ApplicationCertificate.parameter.config"></a>

- *Type:* [`@cdktf/provider-azuread.ApplicationCertificateConfig`](#@cdktf/provider-azuread.ApplicationCertificateConfig)

---

#### Methods <a name="Methods"></a>

##### `resetEncoding` <a name="@cdktf/provider-azuread.ApplicationCertificate.resetEncoding"></a>

```typescript
public resetEncoding()
```

##### `resetEndDate` <a name="@cdktf/provider-azuread.ApplicationCertificate.resetEndDate"></a>

```typescript
public resetEndDate()
```

##### `resetEndDateRelative` <a name="@cdktf/provider-azuread.ApplicationCertificate.resetEndDateRelative"></a>

```typescript
public resetEndDateRelative()
```

##### `resetKeyId` <a name="@cdktf/provider-azuread.ApplicationCertificate.resetKeyId"></a>

```typescript
public resetKeyId()
```

##### `resetStartDate` <a name="@cdktf/provider-azuread.ApplicationCertificate.resetStartDate"></a>

```typescript
public resetStartDate()
```

##### `resetTimeouts` <a name="@cdktf/provider-azuread.ApplicationCertificate.resetTimeouts"></a>

```typescript
public resetTimeouts()
```

##### `resetType` <a name="@cdktf/provider-azuread.ApplicationCertificate.resetType"></a>

```typescript
public resetType()
```


#### Properties <a name="Properties"></a>

##### `applicationObjectIdInput`<sup>Required</sup> <a name="@cdktf/provider-azuread.ApplicationCertificate.property.applicationObjectIdInput"></a>

```typescript
public readonly applicationObjectIdInput: string;
```

- *Type:* `string`

---

##### `id`<sup>Required</sup> <a name="@cdktf/provider-azuread.ApplicationCertificate.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* `string`

---

##### `valueInput`<sup>Required</sup> <a name="@cdktf/provider-azuread.ApplicationCertificate.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* `string`

---

##### `encodingInput`<sup>Optional</sup> <a name="@cdktf/provider-azuread.ApplicationCertificate.property.encodingInput"></a>

```typescript
public readonly encodingInput: string;
```

- *Type:* `string`

---

##### `endDateInput`<sup>Optional</sup> <a name="@cdktf/provider-azuread.ApplicationCertificate.property.endDateInput"></a>

```typescript
public readonly endDateInput: string;
```

- *Type:* `string`

---

##### `endDateRelativeInput`<sup>Optional</sup> <a name="@cdktf/provider-azuread.ApplicationCertificate.property.endDateRelativeInput"></a>

```typescript
public readonly endDateRelativeInput: string;
```

- *Type:* `string`

---

##### `keyIdInput`<sup>Optional</sup> <a name="@cdktf/provider-azuread.ApplicationCertificate.property.keyIdInput"></a>

```typescript
public readonly keyIdInput: string;
```

- *Type:* `string`

---

##### `startDateInput`<sup>Optional</sup> <a name="@cdktf/provider-azuread.ApplicationCertificate.property.startDateInput"></a>

```typescript
public readonly startDateInput: string;
```

- *Type:* `string`

---

##### `timeoutsInput`<sup>Optional</sup> <a name="@cdktf/provider-azuread.ApplicationCertificate.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: ApplicationCertificateTimeouts;
```

- *Type:* [`@cdktf/provider-azuread.ApplicationCertificateTimeouts`](#@cdktf/provider-azuread.ApplicationCertificateTimeouts)

---

##### `typeInput`<sup>Optional</sup> <a name="@cdktf/provider-azuread.ApplicationCertificate.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* `string`

---

##### `applicationObjectId`<sup>Required</sup> <a name="@cdktf/provider-azuread.ApplicationCertificate.property.applicationObjectId"></a>

```typescript
public readonly applicationObjectId: string;
```

- *Type:* `string`

---

##### `encoding`<sup>Required</sup> <a name="@cdktf/provider-azuread.ApplicationCertificate.property.encoding"></a>

```typescript
public readonly encoding: string;
```

- *Type:* `string`

---

##### `endDate`<sup>Required</sup> <a name="@cdktf/provider-azuread.ApplicationCertificate.property.endDate"></a>

```typescript
public readonly endDate: string;
```

- *Type:* `string`

---

##### `endDateRelative`<sup>Required</sup> <a name="@cdktf/provider-azuread.ApplicationCertificate.property.endDateRelative"></a>

```typescript
public readonly endDateRelative: string;
```

- *Type:* `string`

---

##### `keyId`<sup>Required</sup> <a name="@cdktf/provider-azuread.ApplicationCertificate.property.keyId"></a>

```typescript
public readonly keyId: string;
```

- *Type:* `string`

---

##### `startDate`<sup>Required</sup> <a name="@cdktf/provider-azuread.ApplicationCertificate.property.startDate"></a>

```typescript
public readonly startDate: string;
```

- *Type:* `string`

---

##### `timeouts`<sup>Required</sup> <a name="@cdktf/provider-azuread.ApplicationCertificate.property.timeouts"></a>

```typescript
public readonly timeouts: ApplicationCertificateTimeouts;
```

- *Type:* [`@cdktf/provider-azuread.ApplicationCertificateTimeouts`](#@cdktf/provider-azuread.ApplicationCertificateTimeouts)

---

##### `type`<sup>Required</sup> <a name="@cdktf/provider-azuread.ApplicationCertificate.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* `string`

---

##### `value`<sup>Required</sup> <a name="@cdktf/provider-azuread.ApplicationCertificate.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* `string`

---

#### Constants <a name="Constants"></a>

##### `tfResourceType` <a name="@cdktf/provider-azuread.ApplicationCertificate.property.tfResourceType"></a>

- *Type:* `string`

---

### ApplicationPassword <a name="@cdktf/provider-azuread.ApplicationPassword"></a>

Represents a {@link https://www.terraform.io/docs/providers/azuread/r/application_password.html azuread_application_password}.

#### Initializers <a name="@cdktf/provider-azuread.ApplicationPassword.Initializer"></a>

```typescript
import { ApplicationPassword } from '@cdktf/provider-azuread'

new ApplicationPassword(scope: Construct, id: string, config: ApplicationPasswordConfig)
```

##### `scope`<sup>Required</sup> <a name="@cdktf/provider-azuread.ApplicationPassword.parameter.scope"></a>

- *Type:* [`constructs.Construct`](#constructs.Construct)

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="@cdktf/provider-azuread.ApplicationPassword.parameter.id"></a>

- *Type:* `string`

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="@cdktf/provider-azuread.ApplicationPassword.parameter.config"></a>

- *Type:* [`@cdktf/provider-azuread.ApplicationPasswordConfig`](#@cdktf/provider-azuread.ApplicationPasswordConfig)

---

#### Methods <a name="Methods"></a>

##### `resetDisplayName` <a name="@cdktf/provider-azuread.ApplicationPassword.resetDisplayName"></a>

```typescript
public resetDisplayName()
```

##### `resetEndDate` <a name="@cdktf/provider-azuread.ApplicationPassword.resetEndDate"></a>

```typescript
public resetEndDate()
```

##### `resetEndDateRelative` <a name="@cdktf/provider-azuread.ApplicationPassword.resetEndDateRelative"></a>

```typescript
public resetEndDateRelative()
```

##### `resetRotateWhenChanged` <a name="@cdktf/provider-azuread.ApplicationPassword.resetRotateWhenChanged"></a>

```typescript
public resetRotateWhenChanged()
```

##### `resetStartDate` <a name="@cdktf/provider-azuread.ApplicationPassword.resetStartDate"></a>

```typescript
public resetStartDate()
```

##### `resetTimeouts` <a name="@cdktf/provider-azuread.ApplicationPassword.resetTimeouts"></a>

```typescript
public resetTimeouts()
```


#### Properties <a name="Properties"></a>

##### `applicationObjectIdInput`<sup>Required</sup> <a name="@cdktf/provider-azuread.ApplicationPassword.property.applicationObjectIdInput"></a>

```typescript
public readonly applicationObjectIdInput: string;
```

- *Type:* `string`

---

##### `id`<sup>Required</sup> <a name="@cdktf/provider-azuread.ApplicationPassword.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* `string`

---

##### `keyId`<sup>Required</sup> <a name="@cdktf/provider-azuread.ApplicationPassword.property.keyId"></a>

```typescript
public readonly keyId: string;
```

- *Type:* `string`

---

##### `value`<sup>Required</sup> <a name="@cdktf/provider-azuread.ApplicationPassword.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* `string`

---

##### `displayNameInput`<sup>Optional</sup> <a name="@cdktf/provider-azuread.ApplicationPassword.property.displayNameInput"></a>

```typescript
public readonly displayNameInput: string;
```

- *Type:* `string`

---

##### `endDateInput`<sup>Optional</sup> <a name="@cdktf/provider-azuread.ApplicationPassword.property.endDateInput"></a>

```typescript
public readonly endDateInput: string;
```

- *Type:* `string`

---

##### `endDateRelativeInput`<sup>Optional</sup> <a name="@cdktf/provider-azuread.ApplicationPassword.property.endDateRelativeInput"></a>

```typescript
public readonly endDateRelativeInput: string;
```

- *Type:* `string`

---

##### `rotateWhenChangedInput`<sup>Optional</sup> <a name="@cdktf/provider-azuread.ApplicationPassword.property.rotateWhenChangedInput"></a>

```typescript
public readonly rotateWhenChangedInput: IResolvable | {[ key: string ]: string};
```

- *Type:* [`cdktf.IResolvable`](#cdktf.IResolvable) | {[ key: string ]: `string`}

---

##### `startDateInput`<sup>Optional</sup> <a name="@cdktf/provider-azuread.ApplicationPassword.property.startDateInput"></a>

```typescript
public readonly startDateInput: string;
```

- *Type:* `string`

---

##### `timeoutsInput`<sup>Optional</sup> <a name="@cdktf/provider-azuread.ApplicationPassword.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: ApplicationPasswordTimeouts;
```

- *Type:* [`@cdktf/provider-azuread.ApplicationPasswordTimeouts`](#@cdktf/provider-azuread.ApplicationPasswordTimeouts)

---

##### `applicationObjectId`<sup>Required</sup> <a name="@cdktf/provider-azuread.ApplicationPassword.property.applicationObjectId"></a>

```typescript
public readonly applicationObjectId: string;
```

- *Type:* `string`

---

##### `displayName`<sup>Required</sup> <a name="@cdktf/provider-azuread.ApplicationPassword.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* `string`

---

##### `endDate`<sup>Required</sup> <a name="@cdktf/provider-azuread.ApplicationPassword.property.endDate"></a>

```typescript
public readonly endDate: string;
```

- *Type:* `string`

---

##### `endDateRelative`<sup>Required</sup> <a name="@cdktf/provider-azuread.ApplicationPassword.property.endDateRelative"></a>

```typescript
public readonly endDateRelative: string;
```

- *Type:* `string`

---

##### `rotateWhenChanged`<sup>Required</sup> <a name="@cdktf/provider-azuread.ApplicationPassword.property.rotateWhenChanged"></a>

```typescript
public readonly rotateWhenChanged: IResolvable | {[ key: string ]: string};
```

- *Type:* [`cdktf.IResolvable`](#cdktf.IResolvable) | {[ key: string ]: `string`}

---

##### `startDate`<sup>Required</sup> <a name="@cdktf/provider-azuread.ApplicationPassword.property.startDate"></a>

```typescript
public readonly startDate: string;
```

- *Type:* `string`

---

##### `timeouts`<sup>Required</sup> <a name="@cdktf/provider-azuread.ApplicationPassword.property.timeouts"></a>

```typescript
public readonly timeouts: ApplicationPasswordTimeouts;
```

- *Type:* [`@cdktf/provider-azuread.ApplicationPasswordTimeouts`](#@cdktf/provider-azuread.ApplicationPasswordTimeouts)

---

#### Constants <a name="Constants"></a>

##### `tfResourceType` <a name="@cdktf/provider-azuread.ApplicationPassword.property.tfResourceType"></a>

- *Type:* `string`

---

### ApplicationPreAuthorized <a name="@cdktf/provider-azuread.ApplicationPreAuthorized"></a>

Represents a {@link https://www.terraform.io/docs/providers/azuread/r/application_pre_authorized.html azuread_application_pre_authorized}.

#### Initializers <a name="@cdktf/provider-azuread.ApplicationPreAuthorized.Initializer"></a>

```typescript
import { ApplicationPreAuthorized } from '@cdktf/provider-azuread'

new ApplicationPreAuthorized(scope: Construct, id: string, config: ApplicationPreAuthorizedConfig)
```

##### `scope`<sup>Required</sup> <a name="@cdktf/provider-azuread.ApplicationPreAuthorized.parameter.scope"></a>

- *Type:* [`constructs.Construct`](#constructs.Construct)

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="@cdktf/provider-azuread.ApplicationPreAuthorized.parameter.id"></a>

- *Type:* `string`

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="@cdktf/provider-azuread.ApplicationPreAuthorized.parameter.config"></a>

- *Type:* [`@cdktf/provider-azuread.ApplicationPreAuthorizedConfig`](#@cdktf/provider-azuread.ApplicationPreAuthorizedConfig)

---

#### Methods <a name="Methods"></a>

##### `resetTimeouts` <a name="@cdktf/provider-azuread.ApplicationPreAuthorized.resetTimeouts"></a>

```typescript
public resetTimeouts()
```


#### Properties <a name="Properties"></a>

##### `applicationObjectIdInput`<sup>Required</sup> <a name="@cdktf/provider-azuread.ApplicationPreAuthorized.property.applicationObjectIdInput"></a>

```typescript
public readonly applicationObjectIdInput: string;
```

- *Type:* `string`

---

##### `authorizedAppIdInput`<sup>Required</sup> <a name="@cdktf/provider-azuread.ApplicationPreAuthorized.property.authorizedAppIdInput"></a>

```typescript
public readonly authorizedAppIdInput: string;
```

- *Type:* `string`

---

##### `id`<sup>Required</sup> <a name="@cdktf/provider-azuread.ApplicationPreAuthorized.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* `string`

---

##### `permissionIdsInput`<sup>Required</sup> <a name="@cdktf/provider-azuread.ApplicationPreAuthorized.property.permissionIdsInput"></a>

```typescript
public readonly permissionIdsInput: string[];
```

- *Type:* `string`[]

---

##### `timeoutsInput`<sup>Optional</sup> <a name="@cdktf/provider-azuread.ApplicationPreAuthorized.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: ApplicationPreAuthorizedTimeouts;
```

- *Type:* [`@cdktf/provider-azuread.ApplicationPreAuthorizedTimeouts`](#@cdktf/provider-azuread.ApplicationPreAuthorizedTimeouts)

---

##### `applicationObjectId`<sup>Required</sup> <a name="@cdktf/provider-azuread.ApplicationPreAuthorized.property.applicationObjectId"></a>

```typescript
public readonly applicationObjectId: string;
```

- *Type:* `string`

---

##### `authorizedAppId`<sup>Required</sup> <a name="@cdktf/provider-azuread.ApplicationPreAuthorized.property.authorizedAppId"></a>

```typescript
public readonly authorizedAppId: string;
```

- *Type:* `string`

---

##### `permissionIds`<sup>Required</sup> <a name="@cdktf/provider-azuread.ApplicationPreAuthorized.property.permissionIds"></a>

```typescript
public readonly permissionIds: string[];
```

- *Type:* `string`[]

---

##### `timeouts`<sup>Required</sup> <a name="@cdktf/provider-azuread.ApplicationPreAuthorized.property.timeouts"></a>

```typescript
public readonly timeouts: ApplicationPreAuthorizedTimeouts;
```

- *Type:* [`@cdktf/provider-azuread.ApplicationPreAuthorizedTimeouts`](#@cdktf/provider-azuread.ApplicationPreAuthorizedTimeouts)

---

#### Constants <a name="Constants"></a>

##### `tfResourceType` <a name="@cdktf/provider-azuread.ApplicationPreAuthorized.property.tfResourceType"></a>

- *Type:* `string`

---

### AppRoleAssignment <a name="@cdktf/provider-azuread.AppRoleAssignment"></a>

Represents a {@link https://www.terraform.io/docs/providers/azuread/r/app_role_assignment.html azuread_app_role_assignment}.

#### Initializers <a name="@cdktf/provider-azuread.AppRoleAssignment.Initializer"></a>

```typescript
import { AppRoleAssignment } from '@cdktf/provider-azuread'

new AppRoleAssignment(scope: Construct, id: string, config: AppRoleAssignmentConfig)
```

##### `scope`<sup>Required</sup> <a name="@cdktf/provider-azuread.AppRoleAssignment.parameter.scope"></a>

- *Type:* [`constructs.Construct`](#constructs.Construct)

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="@cdktf/provider-azuread.AppRoleAssignment.parameter.id"></a>

- *Type:* `string`

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="@cdktf/provider-azuread.AppRoleAssignment.parameter.config"></a>

- *Type:* [`@cdktf/provider-azuread.AppRoleAssignmentConfig`](#@cdktf/provider-azuread.AppRoleAssignmentConfig)

---

#### Methods <a name="Methods"></a>

##### `resetTimeouts` <a name="@cdktf/provider-azuread.AppRoleAssignment.resetTimeouts"></a>

```typescript
public resetTimeouts()
```


#### Properties <a name="Properties"></a>

##### `appRoleIdInput`<sup>Required</sup> <a name="@cdktf/provider-azuread.AppRoleAssignment.property.appRoleIdInput"></a>

```typescript
public readonly appRoleIdInput: string;
```

- *Type:* `string`

---

##### `id`<sup>Required</sup> <a name="@cdktf/provider-azuread.AppRoleAssignment.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* `string`

---

##### `principalDisplayName`<sup>Required</sup> <a name="@cdktf/provider-azuread.AppRoleAssignment.property.principalDisplayName"></a>

```typescript
public readonly principalDisplayName: string;
```

- *Type:* `string`

---

##### `principalObjectIdInput`<sup>Required</sup> <a name="@cdktf/provider-azuread.AppRoleAssignment.property.principalObjectIdInput"></a>

```typescript
public readonly principalObjectIdInput: string;
```

- *Type:* `string`

---

##### `principalType`<sup>Required</sup> <a name="@cdktf/provider-azuread.AppRoleAssignment.property.principalType"></a>

```typescript
public readonly principalType: string;
```

- *Type:* `string`

---

##### `resourceDisplayName`<sup>Required</sup> <a name="@cdktf/provider-azuread.AppRoleAssignment.property.resourceDisplayName"></a>

```typescript
public readonly resourceDisplayName: string;
```

- *Type:* `string`

---

##### `resourceObjectIdInput`<sup>Required</sup> <a name="@cdktf/provider-azuread.AppRoleAssignment.property.resourceObjectIdInput"></a>

```typescript
public readonly resourceObjectIdInput: string;
```

- *Type:* `string`

---

##### `timeoutsInput`<sup>Optional</sup> <a name="@cdktf/provider-azuread.AppRoleAssignment.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: AppRoleAssignmentTimeouts;
```

- *Type:* [`@cdktf/provider-azuread.AppRoleAssignmentTimeouts`](#@cdktf/provider-azuread.AppRoleAssignmentTimeouts)

---

##### `appRoleId`<sup>Required</sup> <a name="@cdktf/provider-azuread.AppRoleAssignment.property.appRoleId"></a>

```typescript
public readonly appRoleId: string;
```

- *Type:* `string`

---

##### `principalObjectId`<sup>Required</sup> <a name="@cdktf/provider-azuread.AppRoleAssignment.property.principalObjectId"></a>

```typescript
public readonly principalObjectId: string;
```

- *Type:* `string`

---

##### `resourceObjectId`<sup>Required</sup> <a name="@cdktf/provider-azuread.AppRoleAssignment.property.resourceObjectId"></a>

```typescript
public readonly resourceObjectId: string;
```

- *Type:* `string`

---

##### `timeouts`<sup>Required</sup> <a name="@cdktf/provider-azuread.AppRoleAssignment.property.timeouts"></a>

```typescript
public readonly timeouts: AppRoleAssignmentTimeouts;
```

- *Type:* [`@cdktf/provider-azuread.AppRoleAssignmentTimeouts`](#@cdktf/provider-azuread.AppRoleAssignmentTimeouts)

---

#### Constants <a name="Constants"></a>

##### `tfResourceType` <a name="@cdktf/provider-azuread.AppRoleAssignment.property.tfResourceType"></a>

- *Type:* `string`

---

### AzureadProvider <a name="@cdktf/provider-azuread.AzureadProvider"></a>

Represents a {@link https://www.terraform.io/docs/providers/azuread azuread}.

#### Initializers <a name="@cdktf/provider-azuread.AzureadProvider.Initializer"></a>

```typescript
import { AzureadProvider } from '@cdktf/provider-azuread'

new AzureadProvider(scope: Construct, id: string, config?: AzureadProviderConfig)
```

##### `scope`<sup>Required</sup> <a name="@cdktf/provider-azuread.AzureadProvider.parameter.scope"></a>

- *Type:* [`constructs.Construct`](#constructs.Construct)

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="@cdktf/provider-azuread.AzureadProvider.parameter.id"></a>

- *Type:* `string`

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="@cdktf/provider-azuread.AzureadProvider.parameter.config"></a>

- *Type:* [`@cdktf/provider-azuread.AzureadProviderConfig`](#@cdktf/provider-azuread.AzureadProviderConfig)

---

#### Methods <a name="Methods"></a>

##### `resetAlias` <a name="@cdktf/provider-azuread.AzureadProvider.resetAlias"></a>

```typescript
public resetAlias()
```

##### `resetClientCertificate` <a name="@cdktf/provider-azuread.AzureadProvider.resetClientCertificate"></a>

```typescript
public resetClientCertificate()
```

##### `resetClientCertificatePassword` <a name="@cdktf/provider-azuread.AzureadProvider.resetClientCertificatePassword"></a>

```typescript
public resetClientCertificatePassword()
```

##### `resetClientCertificatePath` <a name="@cdktf/provider-azuread.AzureadProvider.resetClientCertificatePath"></a>

```typescript
public resetClientCertificatePath()
```

##### `resetClientId` <a name="@cdktf/provider-azuread.AzureadProvider.resetClientId"></a>

```typescript
public resetClientId()
```

##### `resetClientSecret` <a name="@cdktf/provider-azuread.AzureadProvider.resetClientSecret"></a>

```typescript
public resetClientSecret()
```

##### `resetDisableTerraformPartnerId` <a name="@cdktf/provider-azuread.AzureadProvider.resetDisableTerraformPartnerId"></a>

```typescript
public resetDisableTerraformPartnerId()
```

##### `resetEnvironment` <a name="@cdktf/provider-azuread.AzureadProvider.resetEnvironment"></a>

```typescript
public resetEnvironment()
```

##### `resetMsiEndpoint` <a name="@cdktf/provider-azuread.AzureadProvider.resetMsiEndpoint"></a>

```typescript
public resetMsiEndpoint()
```

##### `resetPartnerId` <a name="@cdktf/provider-azuread.AzureadProvider.resetPartnerId"></a>

```typescript
public resetPartnerId()
```

##### `resetTenantId` <a name="@cdktf/provider-azuread.AzureadProvider.resetTenantId"></a>

```typescript
public resetTenantId()
```

##### `resetUseCli` <a name="@cdktf/provider-azuread.AzureadProvider.resetUseCli"></a>

```typescript
public resetUseCli()
```

##### `resetUseMsi` <a name="@cdktf/provider-azuread.AzureadProvider.resetUseMsi"></a>

```typescript
public resetUseMsi()
```


#### Properties <a name="Properties"></a>

##### `aliasInput`<sup>Optional</sup> <a name="@cdktf/provider-azuread.AzureadProvider.property.aliasInput"></a>

```typescript
public readonly aliasInput: string;
```

- *Type:* `string`

---

##### `clientCertificateInput`<sup>Optional</sup> <a name="@cdktf/provider-azuread.AzureadProvider.property.clientCertificateInput"></a>

```typescript
public readonly clientCertificateInput: string;
```

- *Type:* `string`

---

##### `clientCertificatePasswordInput`<sup>Optional</sup> <a name="@cdktf/provider-azuread.AzureadProvider.property.clientCertificatePasswordInput"></a>

```typescript
public readonly clientCertificatePasswordInput: string;
```

- *Type:* `string`

---

##### `clientCertificatePathInput`<sup>Optional</sup> <a name="@cdktf/provider-azuread.AzureadProvider.property.clientCertificatePathInput"></a>

```typescript
public readonly clientCertificatePathInput: string;
```

- *Type:* `string`

---

##### `clientIdInput`<sup>Optional</sup> <a name="@cdktf/provider-azuread.AzureadProvider.property.clientIdInput"></a>

```typescript
public readonly clientIdInput: string;
```

- *Type:* `string`

---

##### `clientSecretInput`<sup>Optional</sup> <a name="@cdktf/provider-azuread.AzureadProvider.property.clientSecretInput"></a>

```typescript
public readonly clientSecretInput: string;
```

- *Type:* `string`

---

##### `disableTerraformPartnerIdInput`<sup>Optional</sup> <a name="@cdktf/provider-azuread.AzureadProvider.property.disableTerraformPartnerIdInput"></a>

```typescript
public readonly disableTerraformPartnerIdInput: boolean | IResolvable;
```

- *Type:* `boolean` | [`cdktf.IResolvable`](#cdktf.IResolvable)

---

##### `environmentInput`<sup>Optional</sup> <a name="@cdktf/provider-azuread.AzureadProvider.property.environmentInput"></a>

```typescript
public readonly environmentInput: string;
```

- *Type:* `string`

---

##### `msiEndpointInput`<sup>Optional</sup> <a name="@cdktf/provider-azuread.AzureadProvider.property.msiEndpointInput"></a>

```typescript
public readonly msiEndpointInput: string;
```

- *Type:* `string`

---

##### `partnerIdInput`<sup>Optional</sup> <a name="@cdktf/provider-azuread.AzureadProvider.property.partnerIdInput"></a>

```typescript
public readonly partnerIdInput: string;
```

- *Type:* `string`

---

##### `tenantIdInput`<sup>Optional</sup> <a name="@cdktf/provider-azuread.AzureadProvider.property.tenantIdInput"></a>

```typescript
public readonly tenantIdInput: string;
```

- *Type:* `string`

---

##### `useCliInput`<sup>Optional</sup> <a name="@cdktf/provider-azuread.AzureadProvider.property.useCliInput"></a>

```typescript
public readonly useCliInput: boolean | IResolvable;
```

- *Type:* `boolean` | [`cdktf.IResolvable`](#cdktf.IResolvable)

---

##### `useMsiInput`<sup>Optional</sup> <a name="@cdktf/provider-azuread.AzureadProvider.property.useMsiInput"></a>

```typescript
public readonly useMsiInput: boolean | IResolvable;
```

- *Type:* `boolean` | [`cdktf.IResolvable`](#cdktf.IResolvable)

---

##### `alias`<sup>Optional</sup> <a name="@cdktf/provider-azuread.AzureadProvider.property.alias"></a>

```typescript
public readonly alias: string;
```

- *Type:* `string`

---

##### `clientCertificate`<sup>Optional</sup> <a name="@cdktf/provider-azuread.AzureadProvider.property.clientCertificate"></a>

```typescript
public readonly clientCertificate: string;
```

- *Type:* `string`

---

##### `clientCertificatePassword`<sup>Optional</sup> <a name="@cdktf/provider-azuread.AzureadProvider.property.clientCertificatePassword"></a>

```typescript
public readonly clientCertificatePassword: string;
```

- *Type:* `string`

---

##### `clientCertificatePath`<sup>Optional</sup> <a name="@cdktf/provider-azuread.AzureadProvider.property.clientCertificatePath"></a>

```typescript
public readonly clientCertificatePath: string;
```

- *Type:* `string`

---

##### `clientId`<sup>Optional</sup> <a name="@cdktf/provider-azuread.AzureadProvider.property.clientId"></a>

```typescript
public readonly clientId: string;
```

- *Type:* `string`

---

##### `clientSecret`<sup>Optional</sup> <a name="@cdktf/provider-azuread.AzureadProvider.property.clientSecret"></a>

```typescript
public readonly clientSecret: string;
```

- *Type:* `string`

---

##### `disableTerraformPartnerId`<sup>Optional</sup> <a name="@cdktf/provider-azuread.AzureadProvider.property.disableTerraformPartnerId"></a>

```typescript
public readonly disableTerraformPartnerId: boolean | IResolvable;
```

- *Type:* `boolean` | [`cdktf.IResolvable`](#cdktf.IResolvable)

---

##### `environment`<sup>Optional</sup> <a name="@cdktf/provider-azuread.AzureadProvider.property.environment"></a>

```typescript
public readonly environment: string;
```

- *Type:* `string`

---

##### `msiEndpoint`<sup>Optional</sup> <a name="@cdktf/provider-azuread.AzureadProvider.property.msiEndpoint"></a>

```typescript
public readonly msiEndpoint: string;
```

- *Type:* `string`

---

##### `partnerId`<sup>Optional</sup> <a name="@cdktf/provider-azuread.AzureadProvider.property.partnerId"></a>

```typescript
public readonly partnerId: string;
```

- *Type:* `string`

---

##### `tenantId`<sup>Optional</sup> <a name="@cdktf/provider-azuread.AzureadProvider.property.tenantId"></a>

```typescript
public readonly tenantId: string;
```

- *Type:* `string`

---

##### `useCli`<sup>Optional</sup> <a name="@cdktf/provider-azuread.AzureadProvider.property.useCli"></a>

```typescript
public readonly useCli: boolean | IResolvable;
```

- *Type:* `boolean` | [`cdktf.IResolvable`](#cdktf.IResolvable)

---

##### `useMsi`<sup>Optional</sup> <a name="@cdktf/provider-azuread.AzureadProvider.property.useMsi"></a>

```typescript
public readonly useMsi: boolean | IResolvable;
```

- *Type:* `boolean` | [`cdktf.IResolvable`](#cdktf.IResolvable)

---

#### Constants <a name="Constants"></a>

##### `tfResourceType` <a name="@cdktf/provider-azuread.AzureadProvider.property.tfResourceType"></a>

- *Type:* `string`

---

### ConditionalAccessPolicy <a name="@cdktf/provider-azuread.ConditionalAccessPolicy"></a>

Represents a {@link https://www.terraform.io/docs/providers/azuread/r/conditional_access_policy.html azuread_conditional_access_policy}.

#### Initializers <a name="@cdktf/provider-azuread.ConditionalAccessPolicy.Initializer"></a>

```typescript
import { ConditionalAccessPolicy } from '@cdktf/provider-azuread'

new ConditionalAccessPolicy(scope: Construct, id: string, config: ConditionalAccessPolicyConfig)
```

##### `scope`<sup>Required</sup> <a name="@cdktf/provider-azuread.ConditionalAccessPolicy.parameter.scope"></a>

- *Type:* [`constructs.Construct`](#constructs.Construct)

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="@cdktf/provider-azuread.ConditionalAccessPolicy.parameter.id"></a>

- *Type:* `string`

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="@cdktf/provider-azuread.ConditionalAccessPolicy.parameter.config"></a>

- *Type:* [`@cdktf/provider-azuread.ConditionalAccessPolicyConfig`](#@cdktf/provider-azuread.ConditionalAccessPolicyConfig)

---

#### Methods <a name="Methods"></a>

##### `resetSessionControls` <a name="@cdktf/provider-azuread.ConditionalAccessPolicy.resetSessionControls"></a>

```typescript
public resetSessionControls()
```

##### `resetTimeouts` <a name="@cdktf/provider-azuread.ConditionalAccessPolicy.resetTimeouts"></a>

```typescript
public resetTimeouts()
```


#### Properties <a name="Properties"></a>

##### `conditionsInput`<sup>Required</sup> <a name="@cdktf/provider-azuread.ConditionalAccessPolicy.property.conditionsInput"></a>

```typescript
public readonly conditionsInput: ConditionalAccessPolicyConditions[];
```

- *Type:* [`@cdktf/provider-azuread.ConditionalAccessPolicyConditions`](#@cdktf/provider-azuread.ConditionalAccessPolicyConditions)[]

---

##### `displayNameInput`<sup>Required</sup> <a name="@cdktf/provider-azuread.ConditionalAccessPolicy.property.displayNameInput"></a>

```typescript
public readonly displayNameInput: string;
```

- *Type:* `string`

---

##### `grantControlsInput`<sup>Required</sup> <a name="@cdktf/provider-azuread.ConditionalAccessPolicy.property.grantControlsInput"></a>

```typescript
public readonly grantControlsInput: ConditionalAccessPolicyGrantControls[];
```

- *Type:* [`@cdktf/provider-azuread.ConditionalAccessPolicyGrantControls`](#@cdktf/provider-azuread.ConditionalAccessPolicyGrantControls)[]

---

##### `id`<sup>Required</sup> <a name="@cdktf/provider-azuread.ConditionalAccessPolicy.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* `string`

---

##### `stateInput`<sup>Required</sup> <a name="@cdktf/provider-azuread.ConditionalAccessPolicy.property.stateInput"></a>

```typescript
public readonly stateInput: string;
```

- *Type:* `string`

---

##### `sessionControlsInput`<sup>Optional</sup> <a name="@cdktf/provider-azuread.ConditionalAccessPolicy.property.sessionControlsInput"></a>

```typescript
public readonly sessionControlsInput: ConditionalAccessPolicySessionControls[];
```

- *Type:* [`@cdktf/provider-azuread.ConditionalAccessPolicySessionControls`](#@cdktf/provider-azuread.ConditionalAccessPolicySessionControls)[]

---

##### `timeoutsInput`<sup>Optional</sup> <a name="@cdktf/provider-azuread.ConditionalAccessPolicy.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: ConditionalAccessPolicyTimeouts;
```

- *Type:* [`@cdktf/provider-azuread.ConditionalAccessPolicyTimeouts`](#@cdktf/provider-azuread.ConditionalAccessPolicyTimeouts)

---

##### `conditions`<sup>Required</sup> <a name="@cdktf/provider-azuread.ConditionalAccessPolicy.property.conditions"></a>

```typescript
public readonly conditions: ConditionalAccessPolicyConditions[];
```

- *Type:* [`@cdktf/provider-azuread.ConditionalAccessPolicyConditions`](#@cdktf/provider-azuread.ConditionalAccessPolicyConditions)[]

---

##### `displayName`<sup>Required</sup> <a name="@cdktf/provider-azuread.ConditionalAccessPolicy.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* `string`

---

##### `grantControls`<sup>Required</sup> <a name="@cdktf/provider-azuread.ConditionalAccessPolicy.property.grantControls"></a>

```typescript
public readonly grantControls: ConditionalAccessPolicyGrantControls[];
```

- *Type:* [`@cdktf/provider-azuread.ConditionalAccessPolicyGrantControls`](#@cdktf/provider-azuread.ConditionalAccessPolicyGrantControls)[]

---

##### `sessionControls`<sup>Required</sup> <a name="@cdktf/provider-azuread.ConditionalAccessPolicy.property.sessionControls"></a>

```typescript
public readonly sessionControls: ConditionalAccessPolicySessionControls[];
```

- *Type:* [`@cdktf/provider-azuread.ConditionalAccessPolicySessionControls`](#@cdktf/provider-azuread.ConditionalAccessPolicySessionControls)[]

---

##### `state`<sup>Required</sup> <a name="@cdktf/provider-azuread.ConditionalAccessPolicy.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* `string`

---

##### `timeouts`<sup>Required</sup> <a name="@cdktf/provider-azuread.ConditionalAccessPolicy.property.timeouts"></a>

```typescript
public readonly timeouts: ConditionalAccessPolicyTimeouts;
```

- *Type:* [`@cdktf/provider-azuread.ConditionalAccessPolicyTimeouts`](#@cdktf/provider-azuread.ConditionalAccessPolicyTimeouts)

---

#### Constants <a name="Constants"></a>

##### `tfResourceType` <a name="@cdktf/provider-azuread.ConditionalAccessPolicy.property.tfResourceType"></a>

- *Type:* `string`

---

### DataAzureadApplication <a name="@cdktf/provider-azuread.DataAzureadApplication"></a>

Represents a {@link https://www.terraform.io/docs/providers/azuread/d/application.html azuread_application}.

#### Initializers <a name="@cdktf/provider-azuread.DataAzureadApplication.Initializer"></a>

```typescript
import { DataAzureadApplication } from '@cdktf/provider-azuread'

new DataAzureadApplication(scope: Construct, id: string, config?: DataAzureadApplicationConfig)
```

##### `scope`<sup>Required</sup> <a name="@cdktf/provider-azuread.DataAzureadApplication.parameter.scope"></a>

- *Type:* [`constructs.Construct`](#constructs.Construct)

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="@cdktf/provider-azuread.DataAzureadApplication.parameter.id"></a>

- *Type:* `string`

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="@cdktf/provider-azuread.DataAzureadApplication.parameter.config"></a>

- *Type:* [`@cdktf/provider-azuread.DataAzureadApplicationConfig`](#@cdktf/provider-azuread.DataAzureadApplicationConfig)

---

#### Methods <a name="Methods"></a>

##### `api` <a name="@cdktf/provider-azuread.DataAzureadApplication.api"></a>

```typescript
public api(index: string)
```

###### `index`<sup>Required</sup> <a name="@cdktf/provider-azuread.DataAzureadApplication.parameter.index"></a>

- *Type:* `string`

---

##### `appRoleIds` <a name="@cdktf/provider-azuread.DataAzureadApplication.appRoleIds"></a>

```typescript
public appRoleIds(key: string)
```

###### `key`<sup>Required</sup> <a name="@cdktf/provider-azuread.DataAzureadApplication.parameter.key"></a>

- *Type:* `string`

---

##### `appRoles` <a name="@cdktf/provider-azuread.DataAzureadApplication.appRoles"></a>

```typescript
public appRoles(index: string)
```

###### `index`<sup>Required</sup> <a name="@cdktf/provider-azuread.DataAzureadApplication.parameter.index"></a>

- *Type:* `string`

---

##### `oauth2PermissionScopeIds` <a name="@cdktf/provider-azuread.DataAzureadApplication.oauth2PermissionScopeIds"></a>

```typescript
public oauth2PermissionScopeIds(key: string)
```

###### `key`<sup>Required</sup> <a name="@cdktf/provider-azuread.DataAzureadApplication.parameter.key"></a>

- *Type:* `string`

---

##### `optionalClaims` <a name="@cdktf/provider-azuread.DataAzureadApplication.optionalClaims"></a>

```typescript
public optionalClaims(index: string)
```

###### `index`<sup>Required</sup> <a name="@cdktf/provider-azuread.DataAzureadApplication.parameter.index"></a>

- *Type:* `string`

---

##### `publicClient` <a name="@cdktf/provider-azuread.DataAzureadApplication.publicClient"></a>

```typescript
public publicClient(index: string)
```

###### `index`<sup>Required</sup> <a name="@cdktf/provider-azuread.DataAzureadApplication.parameter.index"></a>

- *Type:* `string`

---

##### `requiredResourceAccess` <a name="@cdktf/provider-azuread.DataAzureadApplication.requiredResourceAccess"></a>

```typescript
public requiredResourceAccess(index: string)
```

###### `index`<sup>Required</sup> <a name="@cdktf/provider-azuread.DataAzureadApplication.parameter.index"></a>

- *Type:* `string`

---

##### `resetApplicationId` <a name="@cdktf/provider-azuread.DataAzureadApplication.resetApplicationId"></a>

```typescript
public resetApplicationId()
```

##### `resetDisplayName` <a name="@cdktf/provider-azuread.DataAzureadApplication.resetDisplayName"></a>

```typescript
public resetDisplayName()
```

##### `resetObjectId` <a name="@cdktf/provider-azuread.DataAzureadApplication.resetObjectId"></a>

```typescript
public resetObjectId()
```

##### `resetTimeouts` <a name="@cdktf/provider-azuread.DataAzureadApplication.resetTimeouts"></a>

```typescript
public resetTimeouts()
```

##### `singlePageApplication` <a name="@cdktf/provider-azuread.DataAzureadApplication.singlePageApplication"></a>

```typescript
public singlePageApplication(index: string)
```

###### `index`<sup>Required</sup> <a name="@cdktf/provider-azuread.DataAzureadApplication.parameter.index"></a>

- *Type:* `string`

---

##### `web` <a name="@cdktf/provider-azuread.DataAzureadApplication.web"></a>

```typescript
public web(index: string)
```

###### `index`<sup>Required</sup> <a name="@cdktf/provider-azuread.DataAzureadApplication.parameter.index"></a>

- *Type:* `string`

---


#### Properties <a name="Properties"></a>

##### `deviceOnlyAuthEnabled`<sup>Required</sup> <a name="@cdktf/provider-azuread.DataAzureadApplication.property.deviceOnlyAuthEnabled"></a>

```typescript
public readonly deviceOnlyAuthEnabled: IResolvable;
```

- *Type:* [`cdktf.IResolvable`](#cdktf.IResolvable)

---

##### `disabledByMicrosoft`<sup>Required</sup> <a name="@cdktf/provider-azuread.DataAzureadApplication.property.disabledByMicrosoft"></a>

```typescript
public readonly disabledByMicrosoft: string;
```

- *Type:* `string`

---

##### `fallbackPublicClientEnabled`<sup>Required</sup> <a name="@cdktf/provider-azuread.DataAzureadApplication.property.fallbackPublicClientEnabled"></a>

```typescript
public readonly fallbackPublicClientEnabled: IResolvable;
```

- *Type:* [`cdktf.IResolvable`](#cdktf.IResolvable)

---

##### `groupMembershipClaims`<sup>Required</sup> <a name="@cdktf/provider-azuread.DataAzureadApplication.property.groupMembershipClaims"></a>

```typescript
public readonly groupMembershipClaims: string[];
```

- *Type:* `string`[]

---

##### `id`<sup>Required</sup> <a name="@cdktf/provider-azuread.DataAzureadApplication.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* `string`

---

##### `identifierUris`<sup>Required</sup> <a name="@cdktf/provider-azuread.DataAzureadApplication.property.identifierUris"></a>

```typescript
public readonly identifierUris: string[];
```

- *Type:* `string`[]

---

##### `logoUrl`<sup>Required</sup> <a name="@cdktf/provider-azuread.DataAzureadApplication.property.logoUrl"></a>

```typescript
public readonly logoUrl: string;
```

- *Type:* `string`

---

##### `marketingUrl`<sup>Required</sup> <a name="@cdktf/provider-azuread.DataAzureadApplication.property.marketingUrl"></a>

```typescript
public readonly marketingUrl: string;
```

- *Type:* `string`

---

##### `oauth2PostResponseRequired`<sup>Required</sup> <a name="@cdktf/provider-azuread.DataAzureadApplication.property.oauth2PostResponseRequired"></a>

```typescript
public readonly oauth2PostResponseRequired: IResolvable;
```

- *Type:* [`cdktf.IResolvable`](#cdktf.IResolvable)

---

##### `owners`<sup>Required</sup> <a name="@cdktf/provider-azuread.DataAzureadApplication.property.owners"></a>

```typescript
public readonly owners: string[];
```

- *Type:* `string`[]

---

##### `privacyStatementUrl`<sup>Required</sup> <a name="@cdktf/provider-azuread.DataAzureadApplication.property.privacyStatementUrl"></a>

```typescript
public readonly privacyStatementUrl: string;
```

- *Type:* `string`

---

##### `publisherDomain`<sup>Required</sup> <a name="@cdktf/provider-azuread.DataAzureadApplication.property.publisherDomain"></a>

```typescript
public readonly publisherDomain: string;
```

- *Type:* `string`

---

##### `signInAudience`<sup>Required</sup> <a name="@cdktf/provider-azuread.DataAzureadApplication.property.signInAudience"></a>

```typescript
public readonly signInAudience: string;
```

- *Type:* `string`

---

##### `supportUrl`<sup>Required</sup> <a name="@cdktf/provider-azuread.DataAzureadApplication.property.supportUrl"></a>

```typescript
public readonly supportUrl: string;
```

- *Type:* `string`

---

##### `termsOfServiceUrl`<sup>Required</sup> <a name="@cdktf/provider-azuread.DataAzureadApplication.property.termsOfServiceUrl"></a>

```typescript
public readonly termsOfServiceUrl: string;
```

- *Type:* `string`

---

##### `applicationIdInput`<sup>Optional</sup> <a name="@cdktf/provider-azuread.DataAzureadApplication.property.applicationIdInput"></a>

```typescript
public readonly applicationIdInput: string;
```

- *Type:* `string`

---

##### `displayNameInput`<sup>Optional</sup> <a name="@cdktf/provider-azuread.DataAzureadApplication.property.displayNameInput"></a>

```typescript
public readonly displayNameInput: string;
```

- *Type:* `string`

---

##### `objectIdInput`<sup>Optional</sup> <a name="@cdktf/provider-azuread.DataAzureadApplication.property.objectIdInput"></a>

```typescript
public readonly objectIdInput: string;
```

- *Type:* `string`

---

##### `timeoutsInput`<sup>Optional</sup> <a name="@cdktf/provider-azuread.DataAzureadApplication.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: DataAzureadApplicationTimeouts;
```

- *Type:* [`@cdktf/provider-azuread.DataAzureadApplicationTimeouts`](#@cdktf/provider-azuread.DataAzureadApplicationTimeouts)

---

##### `applicationId`<sup>Required</sup> <a name="@cdktf/provider-azuread.DataAzureadApplication.property.applicationId"></a>

```typescript
public readonly applicationId: string;
```

- *Type:* `string`

---

##### `displayName`<sup>Required</sup> <a name="@cdktf/provider-azuread.DataAzureadApplication.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* `string`

---

##### `objectId`<sup>Required</sup> <a name="@cdktf/provider-azuread.DataAzureadApplication.property.objectId"></a>

```typescript
public readonly objectId: string;
```

- *Type:* `string`

---

##### `timeouts`<sup>Required</sup> <a name="@cdktf/provider-azuread.DataAzureadApplication.property.timeouts"></a>

```typescript
public readonly timeouts: DataAzureadApplicationTimeouts;
```

- *Type:* [`@cdktf/provider-azuread.DataAzureadApplicationTimeouts`](#@cdktf/provider-azuread.DataAzureadApplicationTimeouts)

---

#### Constants <a name="Constants"></a>

##### `tfResourceType` <a name="@cdktf/provider-azuread.DataAzureadApplication.property.tfResourceType"></a>

- *Type:* `string`

---

### DataAzureadApplicationPublishedAppIds <a name="@cdktf/provider-azuread.DataAzureadApplicationPublishedAppIds"></a>

Represents a {@link https://www.terraform.io/docs/providers/azuread/d/application_published_app_ids.html azuread_application_published_app_ids}.

#### Initializers <a name="@cdktf/provider-azuread.DataAzureadApplicationPublishedAppIds.Initializer"></a>

```typescript
import { DataAzureadApplicationPublishedAppIds } from '@cdktf/provider-azuread'

new DataAzureadApplicationPublishedAppIds(scope: Construct, id: string, config?: DataAzureadApplicationPublishedAppIdsConfig)
```

##### `scope`<sup>Required</sup> <a name="@cdktf/provider-azuread.DataAzureadApplicationPublishedAppIds.parameter.scope"></a>

- *Type:* [`constructs.Construct`](#constructs.Construct)

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="@cdktf/provider-azuread.DataAzureadApplicationPublishedAppIds.parameter.id"></a>

- *Type:* `string`

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="@cdktf/provider-azuread.DataAzureadApplicationPublishedAppIds.parameter.config"></a>

- *Type:* [`@cdktf/provider-azuread.DataAzureadApplicationPublishedAppIdsConfig`](#@cdktf/provider-azuread.DataAzureadApplicationPublishedAppIdsConfig)

---

#### Methods <a name="Methods"></a>

##### `resetTimeouts` <a name="@cdktf/provider-azuread.DataAzureadApplicationPublishedAppIds.resetTimeouts"></a>

```typescript
public resetTimeouts()
```

##### `result` <a name="@cdktf/provider-azuread.DataAzureadApplicationPublishedAppIds.result"></a>

```typescript
public result(key: string)
```

###### `key`<sup>Required</sup> <a name="@cdktf/provider-azuread.DataAzureadApplicationPublishedAppIds.parameter.key"></a>

- *Type:* `string`

---


#### Properties <a name="Properties"></a>

##### `id`<sup>Required</sup> <a name="@cdktf/provider-azuread.DataAzureadApplicationPublishedAppIds.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* `string`

---

##### `timeoutsInput`<sup>Optional</sup> <a name="@cdktf/provider-azuread.DataAzureadApplicationPublishedAppIds.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: DataAzureadApplicationPublishedAppIdsTimeouts;
```

- *Type:* [`@cdktf/provider-azuread.DataAzureadApplicationPublishedAppIdsTimeouts`](#@cdktf/provider-azuread.DataAzureadApplicationPublishedAppIdsTimeouts)

---

##### `timeouts`<sup>Required</sup> <a name="@cdktf/provider-azuread.DataAzureadApplicationPublishedAppIds.property.timeouts"></a>

```typescript
public readonly timeouts: DataAzureadApplicationPublishedAppIdsTimeouts;
```

- *Type:* [`@cdktf/provider-azuread.DataAzureadApplicationPublishedAppIdsTimeouts`](#@cdktf/provider-azuread.DataAzureadApplicationPublishedAppIdsTimeouts)

---

#### Constants <a name="Constants"></a>

##### `tfResourceType` <a name="@cdktf/provider-azuread.DataAzureadApplicationPublishedAppIds.property.tfResourceType"></a>

- *Type:* `string`

---

### DataAzureadApplicationTemplate <a name="@cdktf/provider-azuread.DataAzureadApplicationTemplate"></a>

Represents a {@link https://www.terraform.io/docs/providers/azuread/d/application_template.html azuread_application_template}.

#### Initializers <a name="@cdktf/provider-azuread.DataAzureadApplicationTemplate.Initializer"></a>

```typescript
import { DataAzureadApplicationTemplate } from '@cdktf/provider-azuread'

new DataAzureadApplicationTemplate(scope: Construct, id: string, config?: DataAzureadApplicationTemplateConfig)
```

##### `scope`<sup>Required</sup> <a name="@cdktf/provider-azuread.DataAzureadApplicationTemplate.parameter.scope"></a>

- *Type:* [`constructs.Construct`](#constructs.Construct)

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="@cdktf/provider-azuread.DataAzureadApplicationTemplate.parameter.id"></a>

- *Type:* `string`

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="@cdktf/provider-azuread.DataAzureadApplicationTemplate.parameter.config"></a>

- *Type:* [`@cdktf/provider-azuread.DataAzureadApplicationTemplateConfig`](#@cdktf/provider-azuread.DataAzureadApplicationTemplateConfig)

---

#### Methods <a name="Methods"></a>

##### `resetDisplayName` <a name="@cdktf/provider-azuread.DataAzureadApplicationTemplate.resetDisplayName"></a>

```typescript
public resetDisplayName()
```

##### `resetTemplateId` <a name="@cdktf/provider-azuread.DataAzureadApplicationTemplate.resetTemplateId"></a>

```typescript
public resetTemplateId()
```

##### `resetTimeouts` <a name="@cdktf/provider-azuread.DataAzureadApplicationTemplate.resetTimeouts"></a>

```typescript
public resetTimeouts()
```


#### Properties <a name="Properties"></a>

##### `categories`<sup>Required</sup> <a name="@cdktf/provider-azuread.DataAzureadApplicationTemplate.property.categories"></a>

```typescript
public readonly categories: string[];
```

- *Type:* `string`[]

---

##### `homepageUrl`<sup>Required</sup> <a name="@cdktf/provider-azuread.DataAzureadApplicationTemplate.property.homepageUrl"></a>

```typescript
public readonly homepageUrl: string;
```

- *Type:* `string`

---

##### `id`<sup>Required</sup> <a name="@cdktf/provider-azuread.DataAzureadApplicationTemplate.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* `string`

---

##### `logoUrl`<sup>Required</sup> <a name="@cdktf/provider-azuread.DataAzureadApplicationTemplate.property.logoUrl"></a>

```typescript
public readonly logoUrl: string;
```

- *Type:* `string`

---

##### `publisher`<sup>Required</sup> <a name="@cdktf/provider-azuread.DataAzureadApplicationTemplate.property.publisher"></a>

```typescript
public readonly publisher: string;
```

- *Type:* `string`

---

##### `supportedProvisioningTypes`<sup>Required</sup> <a name="@cdktf/provider-azuread.DataAzureadApplicationTemplate.property.supportedProvisioningTypes"></a>

```typescript
public readonly supportedProvisioningTypes: string[];
```

- *Type:* `string`[]

---

##### `supportedSingleSignOnModes`<sup>Required</sup> <a name="@cdktf/provider-azuread.DataAzureadApplicationTemplate.property.supportedSingleSignOnModes"></a>

```typescript
public readonly supportedSingleSignOnModes: string[];
```

- *Type:* `string`[]

---

##### `displayNameInput`<sup>Optional</sup> <a name="@cdktf/provider-azuread.DataAzureadApplicationTemplate.property.displayNameInput"></a>

```typescript
public readonly displayNameInput: string;
```

- *Type:* `string`

---

##### `templateIdInput`<sup>Optional</sup> <a name="@cdktf/provider-azuread.DataAzureadApplicationTemplate.property.templateIdInput"></a>

```typescript
public readonly templateIdInput: string;
```

- *Type:* `string`

---

##### `timeoutsInput`<sup>Optional</sup> <a name="@cdktf/provider-azuread.DataAzureadApplicationTemplate.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: DataAzureadApplicationTemplateTimeouts;
```

- *Type:* [`@cdktf/provider-azuread.DataAzureadApplicationTemplateTimeouts`](#@cdktf/provider-azuread.DataAzureadApplicationTemplateTimeouts)

---

##### `displayName`<sup>Required</sup> <a name="@cdktf/provider-azuread.DataAzureadApplicationTemplate.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* `string`

---

##### `templateId`<sup>Required</sup> <a name="@cdktf/provider-azuread.DataAzureadApplicationTemplate.property.templateId"></a>

```typescript
public readonly templateId: string;
```

- *Type:* `string`

---

##### `timeouts`<sup>Required</sup> <a name="@cdktf/provider-azuread.DataAzureadApplicationTemplate.property.timeouts"></a>

```typescript
public readonly timeouts: DataAzureadApplicationTemplateTimeouts;
```

- *Type:* [`@cdktf/provider-azuread.DataAzureadApplicationTemplateTimeouts`](#@cdktf/provider-azuread.DataAzureadApplicationTemplateTimeouts)

---

#### Constants <a name="Constants"></a>

##### `tfResourceType` <a name="@cdktf/provider-azuread.DataAzureadApplicationTemplate.property.tfResourceType"></a>

- *Type:* `string`

---

### DataAzureadClientConfig <a name="@cdktf/provider-azuread.DataAzureadClientConfig"></a>

Represents a {@link https://www.terraform.io/docs/providers/azuread/d/client_config.html azuread_client_config}.

#### Initializers <a name="@cdktf/provider-azuread.DataAzureadClientConfig.Initializer"></a>

```typescript
import { DataAzureadClientConfig } from '@cdktf/provider-azuread'

new DataAzureadClientConfig(scope: Construct, id: string, config?: DataAzureadClientConfigConfig)
```

##### `scope`<sup>Required</sup> <a name="@cdktf/provider-azuread.DataAzureadClientConfig.parameter.scope"></a>

- *Type:* [`constructs.Construct`](#constructs.Construct)

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="@cdktf/provider-azuread.DataAzureadClientConfig.parameter.id"></a>

- *Type:* `string`

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="@cdktf/provider-azuread.DataAzureadClientConfig.parameter.config"></a>

- *Type:* [`@cdktf/provider-azuread.DataAzureadClientConfigConfig`](#@cdktf/provider-azuread.DataAzureadClientConfigConfig)

---

#### Methods <a name="Methods"></a>

##### `resetTimeouts` <a name="@cdktf/provider-azuread.DataAzureadClientConfig.resetTimeouts"></a>

```typescript
public resetTimeouts()
```


#### Properties <a name="Properties"></a>

##### `clientId`<sup>Required</sup> <a name="@cdktf/provider-azuread.DataAzureadClientConfig.property.clientId"></a>

```typescript
public readonly clientId: string;
```

- *Type:* `string`

---

##### `id`<sup>Required</sup> <a name="@cdktf/provider-azuread.DataAzureadClientConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* `string`

---

##### `objectId`<sup>Required</sup> <a name="@cdktf/provider-azuread.DataAzureadClientConfig.property.objectId"></a>

```typescript
public readonly objectId: string;
```

- *Type:* `string`

---

##### `tenantId`<sup>Required</sup> <a name="@cdktf/provider-azuread.DataAzureadClientConfig.property.tenantId"></a>

```typescript
public readonly tenantId: string;
```

- *Type:* `string`

---

##### `timeoutsInput`<sup>Optional</sup> <a name="@cdktf/provider-azuread.DataAzureadClientConfig.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: DataAzureadClientConfigTimeouts;
```

- *Type:* [`@cdktf/provider-azuread.DataAzureadClientConfigTimeouts`](#@cdktf/provider-azuread.DataAzureadClientConfigTimeouts)

---

##### `timeouts`<sup>Required</sup> <a name="@cdktf/provider-azuread.DataAzureadClientConfig.property.timeouts"></a>

```typescript
public readonly timeouts: DataAzureadClientConfigTimeouts;
```

- *Type:* [`@cdktf/provider-azuread.DataAzureadClientConfigTimeouts`](#@cdktf/provider-azuread.DataAzureadClientConfigTimeouts)

---

#### Constants <a name="Constants"></a>

##### `tfResourceType` <a name="@cdktf/provider-azuread.DataAzureadClientConfig.property.tfResourceType"></a>

- *Type:* `string`

---

### DataAzureadDomains <a name="@cdktf/provider-azuread.DataAzureadDomains"></a>

Represents a {@link https://www.terraform.io/docs/providers/azuread/d/domains.html azuread_domains}.

#### Initializers <a name="@cdktf/provider-azuread.DataAzureadDomains.Initializer"></a>

```typescript
import { DataAzureadDomains } from '@cdktf/provider-azuread'

new DataAzureadDomains(scope: Construct, id: string, config?: DataAzureadDomainsConfig)
```

##### `scope`<sup>Required</sup> <a name="@cdktf/provider-azuread.DataAzureadDomains.parameter.scope"></a>

- *Type:* [`constructs.Construct`](#constructs.Construct)

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="@cdktf/provider-azuread.DataAzureadDomains.parameter.id"></a>

- *Type:* `string`

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="@cdktf/provider-azuread.DataAzureadDomains.parameter.config"></a>

- *Type:* [`@cdktf/provider-azuread.DataAzureadDomainsConfig`](#@cdktf/provider-azuread.DataAzureadDomainsConfig)

---

#### Methods <a name="Methods"></a>

##### `domains` <a name="@cdktf/provider-azuread.DataAzureadDomains.domains"></a>

```typescript
public domains(index: string)
```

###### `index`<sup>Required</sup> <a name="@cdktf/provider-azuread.DataAzureadDomains.parameter.index"></a>

- *Type:* `string`

---

##### `resetAdminManaged` <a name="@cdktf/provider-azuread.DataAzureadDomains.resetAdminManaged"></a>

```typescript
public resetAdminManaged()
```

##### `resetIncludeUnverified` <a name="@cdktf/provider-azuread.DataAzureadDomains.resetIncludeUnverified"></a>

```typescript
public resetIncludeUnverified()
```

##### `resetOnlyDefault` <a name="@cdktf/provider-azuread.DataAzureadDomains.resetOnlyDefault"></a>

```typescript
public resetOnlyDefault()
```

##### `resetOnlyInitial` <a name="@cdktf/provider-azuread.DataAzureadDomains.resetOnlyInitial"></a>

```typescript
public resetOnlyInitial()
```

##### `resetOnlyRoot` <a name="@cdktf/provider-azuread.DataAzureadDomains.resetOnlyRoot"></a>

```typescript
public resetOnlyRoot()
```

##### `resetSupportsServices` <a name="@cdktf/provider-azuread.DataAzureadDomains.resetSupportsServices"></a>

```typescript
public resetSupportsServices()
```

##### `resetTimeouts` <a name="@cdktf/provider-azuread.DataAzureadDomains.resetTimeouts"></a>

```typescript
public resetTimeouts()
```


#### Properties <a name="Properties"></a>

##### `id`<sup>Required</sup> <a name="@cdktf/provider-azuread.DataAzureadDomains.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* `string`

---

##### `adminManagedInput`<sup>Optional</sup> <a name="@cdktf/provider-azuread.DataAzureadDomains.property.adminManagedInput"></a>

```typescript
public readonly adminManagedInput: boolean | IResolvable;
```

- *Type:* `boolean` | [`cdktf.IResolvable`](#cdktf.IResolvable)

---

##### `includeUnverifiedInput`<sup>Optional</sup> <a name="@cdktf/provider-azuread.DataAzureadDomains.property.includeUnverifiedInput"></a>

```typescript
public readonly includeUnverifiedInput: boolean | IResolvable;
```

- *Type:* `boolean` | [`cdktf.IResolvable`](#cdktf.IResolvable)

---

##### `onlyDefaultInput`<sup>Optional</sup> <a name="@cdktf/provider-azuread.DataAzureadDomains.property.onlyDefaultInput"></a>

```typescript
public readonly onlyDefaultInput: boolean | IResolvable;
```

- *Type:* `boolean` | [`cdktf.IResolvable`](#cdktf.IResolvable)

---

##### `onlyInitialInput`<sup>Optional</sup> <a name="@cdktf/provider-azuread.DataAzureadDomains.property.onlyInitialInput"></a>

```typescript
public readonly onlyInitialInput: boolean | IResolvable;
```

- *Type:* `boolean` | [`cdktf.IResolvable`](#cdktf.IResolvable)

---

##### `onlyRootInput`<sup>Optional</sup> <a name="@cdktf/provider-azuread.DataAzureadDomains.property.onlyRootInput"></a>

```typescript
public readonly onlyRootInput: boolean | IResolvable;
```

- *Type:* `boolean` | [`cdktf.IResolvable`](#cdktf.IResolvable)

---

##### `supportsServicesInput`<sup>Optional</sup> <a name="@cdktf/provider-azuread.DataAzureadDomains.property.supportsServicesInput"></a>

```typescript
public readonly supportsServicesInput: string[];
```

- *Type:* `string`[]

---

##### `timeoutsInput`<sup>Optional</sup> <a name="@cdktf/provider-azuread.DataAzureadDomains.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: DataAzureadDomainsTimeouts;
```

- *Type:* [`@cdktf/provider-azuread.DataAzureadDomainsTimeouts`](#@cdktf/provider-azuread.DataAzureadDomainsTimeouts)

---

##### `adminManaged`<sup>Required</sup> <a name="@cdktf/provider-azuread.DataAzureadDomains.property.adminManaged"></a>

```typescript
public readonly adminManaged: boolean | IResolvable;
```

- *Type:* `boolean` | [`cdktf.IResolvable`](#cdktf.IResolvable)

---

##### `includeUnverified`<sup>Required</sup> <a name="@cdktf/provider-azuread.DataAzureadDomains.property.includeUnverified"></a>

```typescript
public readonly includeUnverified: boolean | IResolvable;
```

- *Type:* `boolean` | [`cdktf.IResolvable`](#cdktf.IResolvable)

---

##### `onlyDefault`<sup>Required</sup> <a name="@cdktf/provider-azuread.DataAzureadDomains.property.onlyDefault"></a>

```typescript
public readonly onlyDefault: boolean | IResolvable;
```

- *Type:* `boolean` | [`cdktf.IResolvable`](#cdktf.IResolvable)

---

##### `onlyInitial`<sup>Required</sup> <a name="@cdktf/provider-azuread.DataAzureadDomains.property.onlyInitial"></a>

```typescript
public readonly onlyInitial: boolean | IResolvable;
```

- *Type:* `boolean` | [`cdktf.IResolvable`](#cdktf.IResolvable)

---

##### `onlyRoot`<sup>Required</sup> <a name="@cdktf/provider-azuread.DataAzureadDomains.property.onlyRoot"></a>

```typescript
public readonly onlyRoot: boolean | IResolvable;
```

- *Type:* `boolean` | [`cdktf.IResolvable`](#cdktf.IResolvable)

---

##### `supportsServices`<sup>Required</sup> <a name="@cdktf/provider-azuread.DataAzureadDomains.property.supportsServices"></a>

```typescript
public readonly supportsServices: string[];
```

- *Type:* `string`[]

---

##### `timeouts`<sup>Required</sup> <a name="@cdktf/provider-azuread.DataAzureadDomains.property.timeouts"></a>

```typescript
public readonly timeouts: DataAzureadDomainsTimeouts;
```

- *Type:* [`@cdktf/provider-azuread.DataAzureadDomainsTimeouts`](#@cdktf/provider-azuread.DataAzureadDomainsTimeouts)

---

#### Constants <a name="Constants"></a>

##### `tfResourceType` <a name="@cdktf/provider-azuread.DataAzureadDomains.property.tfResourceType"></a>

- *Type:* `string`

---

### DataAzureadGroup <a name="@cdktf/provider-azuread.DataAzureadGroup"></a>

Represents a {@link https://www.terraform.io/docs/providers/azuread/d/group.html azuread_group}.

#### Initializers <a name="@cdktf/provider-azuread.DataAzureadGroup.Initializer"></a>

```typescript
import { DataAzureadGroup } from '@cdktf/provider-azuread'

new DataAzureadGroup(scope: Construct, id: string, config?: DataAzureadGroupConfig)
```

##### `scope`<sup>Required</sup> <a name="@cdktf/provider-azuread.DataAzureadGroup.parameter.scope"></a>

- *Type:* [`constructs.Construct`](#constructs.Construct)

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="@cdktf/provider-azuread.DataAzureadGroup.parameter.id"></a>

- *Type:* `string`

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="@cdktf/provider-azuread.DataAzureadGroup.parameter.config"></a>

- *Type:* [`@cdktf/provider-azuread.DataAzureadGroupConfig`](#@cdktf/provider-azuread.DataAzureadGroupConfig)

---

#### Methods <a name="Methods"></a>

##### `resetDisplayName` <a name="@cdktf/provider-azuread.DataAzureadGroup.resetDisplayName"></a>

```typescript
public resetDisplayName()
```

##### `resetMailEnabled` <a name="@cdktf/provider-azuread.DataAzureadGroup.resetMailEnabled"></a>

```typescript
public resetMailEnabled()
```

##### `resetObjectId` <a name="@cdktf/provider-azuread.DataAzureadGroup.resetObjectId"></a>

```typescript
public resetObjectId()
```

##### `resetSecurityEnabled` <a name="@cdktf/provider-azuread.DataAzureadGroup.resetSecurityEnabled"></a>

```typescript
public resetSecurityEnabled()
```

##### `resetTimeouts` <a name="@cdktf/provider-azuread.DataAzureadGroup.resetTimeouts"></a>

```typescript
public resetTimeouts()
```


#### Properties <a name="Properties"></a>

##### `assignableToRole`<sup>Required</sup> <a name="@cdktf/provider-azuread.DataAzureadGroup.property.assignableToRole"></a>

```typescript
public readonly assignableToRole: IResolvable;
```

- *Type:* [`cdktf.IResolvable`](#cdktf.IResolvable)

---

##### `behaviors`<sup>Required</sup> <a name="@cdktf/provider-azuread.DataAzureadGroup.property.behaviors"></a>

```typescript
public readonly behaviors: string[];
```

- *Type:* `string`[]

---

##### `description`<sup>Required</sup> <a name="@cdktf/provider-azuread.DataAzureadGroup.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* `string`

---

##### `id`<sup>Required</sup> <a name="@cdktf/provider-azuread.DataAzureadGroup.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* `string`

---

##### `mail`<sup>Required</sup> <a name="@cdktf/provider-azuread.DataAzureadGroup.property.mail"></a>

```typescript
public readonly mail: string;
```

- *Type:* `string`

---

##### `mailNickname`<sup>Required</sup> <a name="@cdktf/provider-azuread.DataAzureadGroup.property.mailNickname"></a>

```typescript
public readonly mailNickname: string;
```

- *Type:* `string`

---

##### `members`<sup>Required</sup> <a name="@cdktf/provider-azuread.DataAzureadGroup.property.members"></a>

```typescript
public readonly members: string[];
```

- *Type:* `string`[]

---

##### `onpremisesDomainName`<sup>Required</sup> <a name="@cdktf/provider-azuread.DataAzureadGroup.property.onpremisesDomainName"></a>

```typescript
public readonly onpremisesDomainName: string;
```

- *Type:* `string`

---

##### `onpremisesNetbiosName`<sup>Required</sup> <a name="@cdktf/provider-azuread.DataAzureadGroup.property.onpremisesNetbiosName"></a>

```typescript
public readonly onpremisesNetbiosName: string;
```

- *Type:* `string`

---

##### `onpremisesSamAccountName`<sup>Required</sup> <a name="@cdktf/provider-azuread.DataAzureadGroup.property.onpremisesSamAccountName"></a>

```typescript
public readonly onpremisesSamAccountName: string;
```

- *Type:* `string`

---

##### `onpremisesSecurityIdentifier`<sup>Required</sup> <a name="@cdktf/provider-azuread.DataAzureadGroup.property.onpremisesSecurityIdentifier"></a>

```typescript
public readonly onpremisesSecurityIdentifier: string;
```

- *Type:* `string`

---

##### `onpremisesSyncEnabled`<sup>Required</sup> <a name="@cdktf/provider-azuread.DataAzureadGroup.property.onpremisesSyncEnabled"></a>

```typescript
public readonly onpremisesSyncEnabled: IResolvable;
```

- *Type:* [`cdktf.IResolvable`](#cdktf.IResolvable)

---

##### `owners`<sup>Required</sup> <a name="@cdktf/provider-azuread.DataAzureadGroup.property.owners"></a>

```typescript
public readonly owners: string[];
```

- *Type:* `string`[]

---

##### `preferredLanguage`<sup>Required</sup> <a name="@cdktf/provider-azuread.DataAzureadGroup.property.preferredLanguage"></a>

```typescript
public readonly preferredLanguage: string;
```

- *Type:* `string`

---

##### `provisioningOptions`<sup>Required</sup> <a name="@cdktf/provider-azuread.DataAzureadGroup.property.provisioningOptions"></a>

```typescript
public readonly provisioningOptions: string[];
```

- *Type:* `string`[]

---

##### `proxyAddresses`<sup>Required</sup> <a name="@cdktf/provider-azuread.DataAzureadGroup.property.proxyAddresses"></a>

```typescript
public readonly proxyAddresses: string[];
```

- *Type:* `string`[]

---

##### `theme`<sup>Required</sup> <a name="@cdktf/provider-azuread.DataAzureadGroup.property.theme"></a>

```typescript
public readonly theme: string;
```

- *Type:* `string`

---

##### `types`<sup>Required</sup> <a name="@cdktf/provider-azuread.DataAzureadGroup.property.types"></a>

```typescript
public readonly types: string[];
```

- *Type:* `string`[]

---

##### `visibility`<sup>Required</sup> <a name="@cdktf/provider-azuread.DataAzureadGroup.property.visibility"></a>

```typescript
public readonly visibility: string;
```

- *Type:* `string`

---

##### `displayNameInput`<sup>Optional</sup> <a name="@cdktf/provider-azuread.DataAzureadGroup.property.displayNameInput"></a>

```typescript
public readonly displayNameInput: string;
```

- *Type:* `string`

---

##### `mailEnabledInput`<sup>Optional</sup> <a name="@cdktf/provider-azuread.DataAzureadGroup.property.mailEnabledInput"></a>

```typescript
public readonly mailEnabledInput: boolean | IResolvable;
```

- *Type:* `boolean` | [`cdktf.IResolvable`](#cdktf.IResolvable)

---

##### `objectIdInput`<sup>Optional</sup> <a name="@cdktf/provider-azuread.DataAzureadGroup.property.objectIdInput"></a>

```typescript
public readonly objectIdInput: string;
```

- *Type:* `string`

---

##### `securityEnabledInput`<sup>Optional</sup> <a name="@cdktf/provider-azuread.DataAzureadGroup.property.securityEnabledInput"></a>

```typescript
public readonly securityEnabledInput: boolean | IResolvable;
```

- *Type:* `boolean` | [`cdktf.IResolvable`](#cdktf.IResolvable)

---

##### `timeoutsInput`<sup>Optional</sup> <a name="@cdktf/provider-azuread.DataAzureadGroup.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: DataAzureadGroupTimeouts;
```

- *Type:* [`@cdktf/provider-azuread.DataAzureadGroupTimeouts`](#@cdktf/provider-azuread.DataAzureadGroupTimeouts)

---

##### `displayName`<sup>Required</sup> <a name="@cdktf/provider-azuread.DataAzureadGroup.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* `string`

---

##### `mailEnabled`<sup>Required</sup> <a name="@cdktf/provider-azuread.DataAzureadGroup.property.mailEnabled"></a>

```typescript
public readonly mailEnabled: boolean | IResolvable;
```

- *Type:* `boolean` | [`cdktf.IResolvable`](#cdktf.IResolvable)

---

##### `objectId`<sup>Required</sup> <a name="@cdktf/provider-azuread.DataAzureadGroup.property.objectId"></a>

```typescript
public readonly objectId: string;
```

- *Type:* `string`

---

##### `securityEnabled`<sup>Required</sup> <a name="@cdktf/provider-azuread.DataAzureadGroup.property.securityEnabled"></a>

```typescript
public readonly securityEnabled: boolean | IResolvable;
```

- *Type:* `boolean` | [`cdktf.IResolvable`](#cdktf.IResolvable)

---

##### `timeouts`<sup>Required</sup> <a name="@cdktf/provider-azuread.DataAzureadGroup.property.timeouts"></a>

```typescript
public readonly timeouts: DataAzureadGroupTimeouts;
```

- *Type:* [`@cdktf/provider-azuread.DataAzureadGroupTimeouts`](#@cdktf/provider-azuread.DataAzureadGroupTimeouts)

---

#### Constants <a name="Constants"></a>

##### `tfResourceType` <a name="@cdktf/provider-azuread.DataAzureadGroup.property.tfResourceType"></a>

- *Type:* `string`

---

### DataAzureadGroups <a name="@cdktf/provider-azuread.DataAzureadGroups"></a>

Represents a {@link https://www.terraform.io/docs/providers/azuread/d/groups.html azuread_groups}.

#### Initializers <a name="@cdktf/provider-azuread.DataAzureadGroups.Initializer"></a>

```typescript
import { DataAzureadGroups } from '@cdktf/provider-azuread'

new DataAzureadGroups(scope: Construct, id: string, config?: DataAzureadGroupsConfig)
```

##### `scope`<sup>Required</sup> <a name="@cdktf/provider-azuread.DataAzureadGroups.parameter.scope"></a>

- *Type:* [`constructs.Construct`](#constructs.Construct)

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="@cdktf/provider-azuread.DataAzureadGroups.parameter.id"></a>

- *Type:* `string`

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="@cdktf/provider-azuread.DataAzureadGroups.parameter.config"></a>

- *Type:* [`@cdktf/provider-azuread.DataAzureadGroupsConfig`](#@cdktf/provider-azuread.DataAzureadGroupsConfig)

---

#### Methods <a name="Methods"></a>

##### `resetDisplayNames` <a name="@cdktf/provider-azuread.DataAzureadGroups.resetDisplayNames"></a>

```typescript
public resetDisplayNames()
```

##### `resetObjectIds` <a name="@cdktf/provider-azuread.DataAzureadGroups.resetObjectIds"></a>

```typescript
public resetObjectIds()
```

##### `resetReturnAll` <a name="@cdktf/provider-azuread.DataAzureadGroups.resetReturnAll"></a>

```typescript
public resetReturnAll()
```

##### `resetTimeouts` <a name="@cdktf/provider-azuread.DataAzureadGroups.resetTimeouts"></a>

```typescript
public resetTimeouts()
```


#### Properties <a name="Properties"></a>

##### `id`<sup>Required</sup> <a name="@cdktf/provider-azuread.DataAzureadGroups.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* `string`

---

##### `displayNamesInput`<sup>Optional</sup> <a name="@cdktf/provider-azuread.DataAzureadGroups.property.displayNamesInput"></a>

```typescript
public readonly displayNamesInput: string[];
```

- *Type:* `string`[]

---

##### `objectIdsInput`<sup>Optional</sup> <a name="@cdktf/provider-azuread.DataAzureadGroups.property.objectIdsInput"></a>

```typescript
public readonly objectIdsInput: string[];
```

- *Type:* `string`[]

---

##### `returnAllInput`<sup>Optional</sup> <a name="@cdktf/provider-azuread.DataAzureadGroups.property.returnAllInput"></a>

```typescript
public readonly returnAllInput: boolean | IResolvable;
```

- *Type:* `boolean` | [`cdktf.IResolvable`](#cdktf.IResolvable)

---

##### `timeoutsInput`<sup>Optional</sup> <a name="@cdktf/provider-azuread.DataAzureadGroups.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: DataAzureadGroupsTimeouts;
```

- *Type:* [`@cdktf/provider-azuread.DataAzureadGroupsTimeouts`](#@cdktf/provider-azuread.DataAzureadGroupsTimeouts)

---

##### `displayNames`<sup>Required</sup> <a name="@cdktf/provider-azuread.DataAzureadGroups.property.displayNames"></a>

```typescript
public readonly displayNames: string[];
```

- *Type:* `string`[]

---

##### `objectIds`<sup>Required</sup> <a name="@cdktf/provider-azuread.DataAzureadGroups.property.objectIds"></a>

```typescript
public readonly objectIds: string[];
```

- *Type:* `string`[]

---

##### `returnAll`<sup>Required</sup> <a name="@cdktf/provider-azuread.DataAzureadGroups.property.returnAll"></a>

```typescript
public readonly returnAll: boolean | IResolvable;
```

- *Type:* `boolean` | [`cdktf.IResolvable`](#cdktf.IResolvable)

---

##### `timeouts`<sup>Required</sup> <a name="@cdktf/provider-azuread.DataAzureadGroups.property.timeouts"></a>

```typescript
public readonly timeouts: DataAzureadGroupsTimeouts;
```

- *Type:* [`@cdktf/provider-azuread.DataAzureadGroupsTimeouts`](#@cdktf/provider-azuread.DataAzureadGroupsTimeouts)

---

#### Constants <a name="Constants"></a>

##### `tfResourceType` <a name="@cdktf/provider-azuread.DataAzureadGroups.property.tfResourceType"></a>

- *Type:* `string`

---

### DataAzureadServicePrincipal <a name="@cdktf/provider-azuread.DataAzureadServicePrincipal"></a>

Represents a {@link https://www.terraform.io/docs/providers/azuread/d/service_principal.html azuread_service_principal}.

#### Initializers <a name="@cdktf/provider-azuread.DataAzureadServicePrincipal.Initializer"></a>

```typescript
import { DataAzureadServicePrincipal } from '@cdktf/provider-azuread'

new DataAzureadServicePrincipal(scope: Construct, id: string, config?: DataAzureadServicePrincipalConfig)
```

##### `scope`<sup>Required</sup> <a name="@cdktf/provider-azuread.DataAzureadServicePrincipal.parameter.scope"></a>

- *Type:* [`constructs.Construct`](#constructs.Construct)

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="@cdktf/provider-azuread.DataAzureadServicePrincipal.parameter.id"></a>

- *Type:* `string`

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="@cdktf/provider-azuread.DataAzureadServicePrincipal.parameter.config"></a>

- *Type:* [`@cdktf/provider-azuread.DataAzureadServicePrincipalConfig`](#@cdktf/provider-azuread.DataAzureadServicePrincipalConfig)

---

#### Methods <a name="Methods"></a>

##### `appRoleIds` <a name="@cdktf/provider-azuread.DataAzureadServicePrincipal.appRoleIds"></a>

```typescript
public appRoleIds(key: string)
```

###### `key`<sup>Required</sup> <a name="@cdktf/provider-azuread.DataAzureadServicePrincipal.parameter.key"></a>

- *Type:* `string`

---

##### `appRoles` <a name="@cdktf/provider-azuread.DataAzureadServicePrincipal.appRoles"></a>

```typescript
public appRoles(index: string)
```

###### `index`<sup>Required</sup> <a name="@cdktf/provider-azuread.DataAzureadServicePrincipal.parameter.index"></a>

- *Type:* `string`

---

##### `features` <a name="@cdktf/provider-azuread.DataAzureadServicePrincipal.features"></a>

```typescript
public features(index: string)
```

###### `index`<sup>Required</sup> <a name="@cdktf/provider-azuread.DataAzureadServicePrincipal.parameter.index"></a>

- *Type:* `string`

---

##### `oauth2PermissionScopeIds` <a name="@cdktf/provider-azuread.DataAzureadServicePrincipal.oauth2PermissionScopeIds"></a>

```typescript
public oauth2PermissionScopeIds(key: string)
```

###### `key`<sup>Required</sup> <a name="@cdktf/provider-azuread.DataAzureadServicePrincipal.parameter.key"></a>

- *Type:* `string`

---

##### `oauth2PermissionScopes` <a name="@cdktf/provider-azuread.DataAzureadServicePrincipal.oauth2PermissionScopes"></a>

```typescript
public oauth2PermissionScopes(index: string)
```

###### `index`<sup>Required</sup> <a name="@cdktf/provider-azuread.DataAzureadServicePrincipal.parameter.index"></a>

- *Type:* `string`

---

##### `resetApplicationId` <a name="@cdktf/provider-azuread.DataAzureadServicePrincipal.resetApplicationId"></a>

```typescript
public resetApplicationId()
```

##### `resetDisplayName` <a name="@cdktf/provider-azuread.DataAzureadServicePrincipal.resetDisplayName"></a>

```typescript
public resetDisplayName()
```

##### `resetObjectId` <a name="@cdktf/provider-azuread.DataAzureadServicePrincipal.resetObjectId"></a>

```typescript
public resetObjectId()
```

##### `resetTimeouts` <a name="@cdktf/provider-azuread.DataAzureadServicePrincipal.resetTimeouts"></a>

```typescript
public resetTimeouts()
```

##### `samlSingleSignOn` <a name="@cdktf/provider-azuread.DataAzureadServicePrincipal.samlSingleSignOn"></a>

```typescript
public samlSingleSignOn(index: string)
```

###### `index`<sup>Required</sup> <a name="@cdktf/provider-azuread.DataAzureadServicePrincipal.parameter.index"></a>

- *Type:* `string`

---


#### Properties <a name="Properties"></a>

##### `accountEnabled`<sup>Required</sup> <a name="@cdktf/provider-azuread.DataAzureadServicePrincipal.property.accountEnabled"></a>

```typescript
public readonly accountEnabled: IResolvable;
```

- *Type:* [`cdktf.IResolvable`](#cdktf.IResolvable)

---

##### `alternativeNames`<sup>Required</sup> <a name="@cdktf/provider-azuread.DataAzureadServicePrincipal.property.alternativeNames"></a>

```typescript
public readonly alternativeNames: string[];
```

- *Type:* `string`[]

---

##### `applicationTenantId`<sup>Required</sup> <a name="@cdktf/provider-azuread.DataAzureadServicePrincipal.property.applicationTenantId"></a>

```typescript
public readonly applicationTenantId: string;
```

- *Type:* `string`

---

##### `appRoleAssignmentRequired`<sup>Required</sup> <a name="@cdktf/provider-azuread.DataAzureadServicePrincipal.property.appRoleAssignmentRequired"></a>

```typescript
public readonly appRoleAssignmentRequired: IResolvable;
```

- *Type:* [`cdktf.IResolvable`](#cdktf.IResolvable)

---

##### `description`<sup>Required</sup> <a name="@cdktf/provider-azuread.DataAzureadServicePrincipal.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* `string`

---

##### `homepageUrl`<sup>Required</sup> <a name="@cdktf/provider-azuread.DataAzureadServicePrincipal.property.homepageUrl"></a>

```typescript
public readonly homepageUrl: string;
```

- *Type:* `string`

---

##### `id`<sup>Required</sup> <a name="@cdktf/provider-azuread.DataAzureadServicePrincipal.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* `string`

---

##### `loginUrl`<sup>Required</sup> <a name="@cdktf/provider-azuread.DataAzureadServicePrincipal.property.loginUrl"></a>

```typescript
public readonly loginUrl: string;
```

- *Type:* `string`

---

##### `logoutUrl`<sup>Required</sup> <a name="@cdktf/provider-azuread.DataAzureadServicePrincipal.property.logoutUrl"></a>

```typescript
public readonly logoutUrl: string;
```

- *Type:* `string`

---

##### `notes`<sup>Required</sup> <a name="@cdktf/provider-azuread.DataAzureadServicePrincipal.property.notes"></a>

```typescript
public readonly notes: string;
```

- *Type:* `string`

---

##### `notificationEmailAddresses`<sup>Required</sup> <a name="@cdktf/provider-azuread.DataAzureadServicePrincipal.property.notificationEmailAddresses"></a>

```typescript
public readonly notificationEmailAddresses: string[];
```

- *Type:* `string`[]

---

##### `preferredSingleSignOnMode`<sup>Required</sup> <a name="@cdktf/provider-azuread.DataAzureadServicePrincipal.property.preferredSingleSignOnMode"></a>

```typescript
public readonly preferredSingleSignOnMode: string;
```

- *Type:* `string`

---

##### `redirectUris`<sup>Required</sup> <a name="@cdktf/provider-azuread.DataAzureadServicePrincipal.property.redirectUris"></a>

```typescript
public readonly redirectUris: string[];
```

- *Type:* `string`[]

---

##### `samlMetadataUrl`<sup>Required</sup> <a name="@cdktf/provider-azuread.DataAzureadServicePrincipal.property.samlMetadataUrl"></a>

```typescript
public readonly samlMetadataUrl: string;
```

- *Type:* `string`

---

##### `servicePrincipalNames`<sup>Required</sup> <a name="@cdktf/provider-azuread.DataAzureadServicePrincipal.property.servicePrincipalNames"></a>

```typescript
public readonly servicePrincipalNames: string[];
```

- *Type:* `string`[]

---

##### `signInAudience`<sup>Required</sup> <a name="@cdktf/provider-azuread.DataAzureadServicePrincipal.property.signInAudience"></a>

```typescript
public readonly signInAudience: string;
```

- *Type:* `string`

---

##### `tags`<sup>Required</sup> <a name="@cdktf/provider-azuread.DataAzureadServicePrincipal.property.tags"></a>

```typescript
public readonly tags: string[];
```

- *Type:* `string`[]

---

##### `type`<sup>Required</sup> <a name="@cdktf/provider-azuread.DataAzureadServicePrincipal.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* `string`

---

##### `applicationIdInput`<sup>Optional</sup> <a name="@cdktf/provider-azuread.DataAzureadServicePrincipal.property.applicationIdInput"></a>

```typescript
public readonly applicationIdInput: string;
```

- *Type:* `string`

---

##### `displayNameInput`<sup>Optional</sup> <a name="@cdktf/provider-azuread.DataAzureadServicePrincipal.property.displayNameInput"></a>

```typescript
public readonly displayNameInput: string;
```

- *Type:* `string`

---

##### `objectIdInput`<sup>Optional</sup> <a name="@cdktf/provider-azuread.DataAzureadServicePrincipal.property.objectIdInput"></a>

```typescript
public readonly objectIdInput: string;
```

- *Type:* `string`

---

##### `timeoutsInput`<sup>Optional</sup> <a name="@cdktf/provider-azuread.DataAzureadServicePrincipal.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: DataAzureadServicePrincipalTimeouts;
```

- *Type:* [`@cdktf/provider-azuread.DataAzureadServicePrincipalTimeouts`](#@cdktf/provider-azuread.DataAzureadServicePrincipalTimeouts)

---

##### `applicationId`<sup>Required</sup> <a name="@cdktf/provider-azuread.DataAzureadServicePrincipal.property.applicationId"></a>

```typescript
public readonly applicationId: string;
```

- *Type:* `string`

---

##### `displayName`<sup>Required</sup> <a name="@cdktf/provider-azuread.DataAzureadServicePrincipal.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* `string`

---

##### `objectId`<sup>Required</sup> <a name="@cdktf/provider-azuread.DataAzureadServicePrincipal.property.objectId"></a>

```typescript
public readonly objectId: string;
```

- *Type:* `string`

---

##### `timeouts`<sup>Required</sup> <a name="@cdktf/provider-azuread.DataAzureadServicePrincipal.property.timeouts"></a>

```typescript
public readonly timeouts: DataAzureadServicePrincipalTimeouts;
```

- *Type:* [`@cdktf/provider-azuread.DataAzureadServicePrincipalTimeouts`](#@cdktf/provider-azuread.DataAzureadServicePrincipalTimeouts)

---

#### Constants <a name="Constants"></a>

##### `tfResourceType` <a name="@cdktf/provider-azuread.DataAzureadServicePrincipal.property.tfResourceType"></a>

- *Type:* `string`

---

### DataAzureadServicePrincipals <a name="@cdktf/provider-azuread.DataAzureadServicePrincipals"></a>

Represents a {@link https://www.terraform.io/docs/providers/azuread/d/service_principals.html azuread_service_principals}.

#### Initializers <a name="@cdktf/provider-azuread.DataAzureadServicePrincipals.Initializer"></a>

```typescript
import { DataAzureadServicePrincipals } from '@cdktf/provider-azuread'

new DataAzureadServicePrincipals(scope: Construct, id: string, config?: DataAzureadServicePrincipalsConfig)
```

##### `scope`<sup>Required</sup> <a name="@cdktf/provider-azuread.DataAzureadServicePrincipals.parameter.scope"></a>

- *Type:* [`constructs.Construct`](#constructs.Construct)

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="@cdktf/provider-azuread.DataAzureadServicePrincipals.parameter.id"></a>

- *Type:* `string`

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="@cdktf/provider-azuread.DataAzureadServicePrincipals.parameter.config"></a>

- *Type:* [`@cdktf/provider-azuread.DataAzureadServicePrincipalsConfig`](#@cdktf/provider-azuread.DataAzureadServicePrincipalsConfig)

---

#### Methods <a name="Methods"></a>

##### `resetApplicationIds` <a name="@cdktf/provider-azuread.DataAzureadServicePrincipals.resetApplicationIds"></a>

```typescript
public resetApplicationIds()
```

##### `resetDisplayNames` <a name="@cdktf/provider-azuread.DataAzureadServicePrincipals.resetDisplayNames"></a>

```typescript
public resetDisplayNames()
```

##### `resetIgnoreMissing` <a name="@cdktf/provider-azuread.DataAzureadServicePrincipals.resetIgnoreMissing"></a>

```typescript
public resetIgnoreMissing()
```

##### `resetObjectIds` <a name="@cdktf/provider-azuread.DataAzureadServicePrincipals.resetObjectIds"></a>

```typescript
public resetObjectIds()
```

##### `resetReturnAll` <a name="@cdktf/provider-azuread.DataAzureadServicePrincipals.resetReturnAll"></a>

```typescript
public resetReturnAll()
```

##### `resetTimeouts` <a name="@cdktf/provider-azuread.DataAzureadServicePrincipals.resetTimeouts"></a>

```typescript
public resetTimeouts()
```

##### `servicePrincipals` <a name="@cdktf/provider-azuread.DataAzureadServicePrincipals.servicePrincipals"></a>

```typescript
public servicePrincipals(index: string)
```

###### `index`<sup>Required</sup> <a name="@cdktf/provider-azuread.DataAzureadServicePrincipals.parameter.index"></a>

- *Type:* `string`

---


#### Properties <a name="Properties"></a>

##### `id`<sup>Required</sup> <a name="@cdktf/provider-azuread.DataAzureadServicePrincipals.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* `string`

---

##### `applicationIdsInput`<sup>Optional</sup> <a name="@cdktf/provider-azuread.DataAzureadServicePrincipals.property.applicationIdsInput"></a>

```typescript
public readonly applicationIdsInput: string[];
```

- *Type:* `string`[]

---

##### `displayNamesInput`<sup>Optional</sup> <a name="@cdktf/provider-azuread.DataAzureadServicePrincipals.property.displayNamesInput"></a>

```typescript
public readonly displayNamesInput: string[];
```

- *Type:* `string`[]

---

##### `ignoreMissingInput`<sup>Optional</sup> <a name="@cdktf/provider-azuread.DataAzureadServicePrincipals.property.ignoreMissingInput"></a>

```typescript
public readonly ignoreMissingInput: boolean | IResolvable;
```

- *Type:* `boolean` | [`cdktf.IResolvable`](#cdktf.IResolvable)

---

##### `objectIdsInput`<sup>Optional</sup> <a name="@cdktf/provider-azuread.DataAzureadServicePrincipals.property.objectIdsInput"></a>

```typescript
public readonly objectIdsInput: string[];
```

- *Type:* `string`[]

---

##### `returnAllInput`<sup>Optional</sup> <a name="@cdktf/provider-azuread.DataAzureadServicePrincipals.property.returnAllInput"></a>

```typescript
public readonly returnAllInput: boolean | IResolvable;
```

- *Type:* `boolean` | [`cdktf.IResolvable`](#cdktf.IResolvable)

---

##### `timeoutsInput`<sup>Optional</sup> <a name="@cdktf/provider-azuread.DataAzureadServicePrincipals.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: DataAzureadServicePrincipalsTimeouts;
```

- *Type:* [`@cdktf/provider-azuread.DataAzureadServicePrincipalsTimeouts`](#@cdktf/provider-azuread.DataAzureadServicePrincipalsTimeouts)

---

##### `applicationIds`<sup>Required</sup> <a name="@cdktf/provider-azuread.DataAzureadServicePrincipals.property.applicationIds"></a>

```typescript
public readonly applicationIds: string[];
```

- *Type:* `string`[]

---

##### `displayNames`<sup>Required</sup> <a name="@cdktf/provider-azuread.DataAzureadServicePrincipals.property.displayNames"></a>

```typescript
public readonly displayNames: string[];
```

- *Type:* `string`[]

---

##### `ignoreMissing`<sup>Required</sup> <a name="@cdktf/provider-azuread.DataAzureadServicePrincipals.property.ignoreMissing"></a>

```typescript
public readonly ignoreMissing: boolean | IResolvable;
```

- *Type:* `boolean` | [`cdktf.IResolvable`](#cdktf.IResolvable)

---

##### `objectIds`<sup>Required</sup> <a name="@cdktf/provider-azuread.DataAzureadServicePrincipals.property.objectIds"></a>

```typescript
public readonly objectIds: string[];
```

- *Type:* `string`[]

---

##### `returnAll`<sup>Required</sup> <a name="@cdktf/provider-azuread.DataAzureadServicePrincipals.property.returnAll"></a>

```typescript
public readonly returnAll: boolean | IResolvable;
```

- *Type:* `boolean` | [`cdktf.IResolvable`](#cdktf.IResolvable)

---

##### `timeouts`<sup>Required</sup> <a name="@cdktf/provider-azuread.DataAzureadServicePrincipals.property.timeouts"></a>

```typescript
public readonly timeouts: DataAzureadServicePrincipalsTimeouts;
```

- *Type:* [`@cdktf/provider-azuread.DataAzureadServicePrincipalsTimeouts`](#@cdktf/provider-azuread.DataAzureadServicePrincipalsTimeouts)

---

#### Constants <a name="Constants"></a>

##### `tfResourceType` <a name="@cdktf/provider-azuread.DataAzureadServicePrincipals.property.tfResourceType"></a>

- *Type:* `string`

---

### DataAzureadUser <a name="@cdktf/provider-azuread.DataAzureadUser"></a>

Represents a {@link https://www.terraform.io/docs/providers/azuread/d/user.html azuread_user}.

#### Initializers <a name="@cdktf/provider-azuread.DataAzureadUser.Initializer"></a>

```typescript
import { DataAzureadUser } from '@cdktf/provider-azuread'

new DataAzureadUser(scope: Construct, id: string, config?: DataAzureadUserConfig)
```

##### `scope`<sup>Required</sup> <a name="@cdktf/provider-azuread.DataAzureadUser.parameter.scope"></a>

- *Type:* [`constructs.Construct`](#constructs.Construct)

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="@cdktf/provider-azuread.DataAzureadUser.parameter.id"></a>

- *Type:* `string`

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="@cdktf/provider-azuread.DataAzureadUser.parameter.config"></a>

- *Type:* [`@cdktf/provider-azuread.DataAzureadUserConfig`](#@cdktf/provider-azuread.DataAzureadUserConfig)

---

#### Methods <a name="Methods"></a>

##### `resetMailNickname` <a name="@cdktf/provider-azuread.DataAzureadUser.resetMailNickname"></a>

```typescript
public resetMailNickname()
```

##### `resetObjectId` <a name="@cdktf/provider-azuread.DataAzureadUser.resetObjectId"></a>

```typescript
public resetObjectId()
```

##### `resetTimeouts` <a name="@cdktf/provider-azuread.DataAzureadUser.resetTimeouts"></a>

```typescript
public resetTimeouts()
```

##### `resetUserPrincipalName` <a name="@cdktf/provider-azuread.DataAzureadUser.resetUserPrincipalName"></a>

```typescript
public resetUserPrincipalName()
```


#### Properties <a name="Properties"></a>

##### `accountEnabled`<sup>Required</sup> <a name="@cdktf/provider-azuread.DataAzureadUser.property.accountEnabled"></a>

```typescript
public readonly accountEnabled: IResolvable;
```

- *Type:* [`cdktf.IResolvable`](#cdktf.IResolvable)

---

##### `ageGroup`<sup>Required</sup> <a name="@cdktf/provider-azuread.DataAzureadUser.property.ageGroup"></a>

```typescript
public readonly ageGroup: string;
```

- *Type:* `string`

---

##### `businessPhones`<sup>Required</sup> <a name="@cdktf/provider-azuread.DataAzureadUser.property.businessPhones"></a>

```typescript
public readonly businessPhones: string[];
```

- *Type:* `string`[]

---

##### `city`<sup>Required</sup> <a name="@cdktf/provider-azuread.DataAzureadUser.property.city"></a>

```typescript
public readonly city: string;
```

- *Type:* `string`

---

##### `companyName`<sup>Required</sup> <a name="@cdktf/provider-azuread.DataAzureadUser.property.companyName"></a>

```typescript
public readonly companyName: string;
```

- *Type:* `string`

---

##### `consentProvidedForMinor`<sup>Required</sup> <a name="@cdktf/provider-azuread.DataAzureadUser.property.consentProvidedForMinor"></a>

```typescript
public readonly consentProvidedForMinor: string;
```

- *Type:* `string`

---

##### `country`<sup>Required</sup> <a name="@cdktf/provider-azuread.DataAzureadUser.property.country"></a>

```typescript
public readonly country: string;
```

- *Type:* `string`

---

##### `creationType`<sup>Required</sup> <a name="@cdktf/provider-azuread.DataAzureadUser.property.creationType"></a>

```typescript
public readonly creationType: string;
```

- *Type:* `string`

---

##### `department`<sup>Required</sup> <a name="@cdktf/provider-azuread.DataAzureadUser.property.department"></a>

```typescript
public readonly department: string;
```

- *Type:* `string`

---

##### `displayName`<sup>Required</sup> <a name="@cdktf/provider-azuread.DataAzureadUser.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* `string`

---

##### `employeeId`<sup>Required</sup> <a name="@cdktf/provider-azuread.DataAzureadUser.property.employeeId"></a>

```typescript
public readonly employeeId: string;
```

- *Type:* `string`

---

##### `externalUserState`<sup>Required</sup> <a name="@cdktf/provider-azuread.DataAzureadUser.property.externalUserState"></a>

```typescript
public readonly externalUserState: string;
```

- *Type:* `string`

---

##### `faxNumber`<sup>Required</sup> <a name="@cdktf/provider-azuread.DataAzureadUser.property.faxNumber"></a>

```typescript
public readonly faxNumber: string;
```

- *Type:* `string`

---

##### `givenName`<sup>Required</sup> <a name="@cdktf/provider-azuread.DataAzureadUser.property.givenName"></a>

```typescript
public readonly givenName: string;
```

- *Type:* `string`

---

##### `id`<sup>Required</sup> <a name="@cdktf/provider-azuread.DataAzureadUser.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* `string`

---

##### `imAddresses`<sup>Required</sup> <a name="@cdktf/provider-azuread.DataAzureadUser.property.imAddresses"></a>

```typescript
public readonly imAddresses: string[];
```

- *Type:* `string`[]

---

##### `jobTitle`<sup>Required</sup> <a name="@cdktf/provider-azuread.DataAzureadUser.property.jobTitle"></a>

```typescript
public readonly jobTitle: string;
```

- *Type:* `string`

---

##### `mail`<sup>Required</sup> <a name="@cdktf/provider-azuread.DataAzureadUser.property.mail"></a>

```typescript
public readonly mail: string;
```

- *Type:* `string`

---

##### `mobilePhone`<sup>Required</sup> <a name="@cdktf/provider-azuread.DataAzureadUser.property.mobilePhone"></a>

```typescript
public readonly mobilePhone: string;
```

- *Type:* `string`

---

##### `officeLocation`<sup>Required</sup> <a name="@cdktf/provider-azuread.DataAzureadUser.property.officeLocation"></a>

```typescript
public readonly officeLocation: string;
```

- *Type:* `string`

---

##### `onpremisesDistinguishedName`<sup>Required</sup> <a name="@cdktf/provider-azuread.DataAzureadUser.property.onpremisesDistinguishedName"></a>

```typescript
public readonly onpremisesDistinguishedName: string;
```

- *Type:* `string`

---

##### `onpremisesDomainName`<sup>Required</sup> <a name="@cdktf/provider-azuread.DataAzureadUser.property.onpremisesDomainName"></a>

```typescript
public readonly onpremisesDomainName: string;
```

- *Type:* `string`

---

##### `onpremisesImmutableId`<sup>Required</sup> <a name="@cdktf/provider-azuread.DataAzureadUser.property.onpremisesImmutableId"></a>

```typescript
public readonly onpremisesImmutableId: string;
```

- *Type:* `string`

---

##### `onpremisesSamAccountName`<sup>Required</sup> <a name="@cdktf/provider-azuread.DataAzureadUser.property.onpremisesSamAccountName"></a>

```typescript
public readonly onpremisesSamAccountName: string;
```

- *Type:* `string`

---

##### `onpremisesSecurityIdentifier`<sup>Required</sup> <a name="@cdktf/provider-azuread.DataAzureadUser.property.onpremisesSecurityIdentifier"></a>

```typescript
public readonly onpremisesSecurityIdentifier: string;
```

- *Type:* `string`

---

##### `onpremisesSyncEnabled`<sup>Required</sup> <a name="@cdktf/provider-azuread.DataAzureadUser.property.onpremisesSyncEnabled"></a>

```typescript
public readonly onpremisesSyncEnabled: IResolvable;
```

- *Type:* [`cdktf.IResolvable`](#cdktf.IResolvable)

---

##### `onpremisesUserPrincipalName`<sup>Required</sup> <a name="@cdktf/provider-azuread.DataAzureadUser.property.onpremisesUserPrincipalName"></a>

```typescript
public readonly onpremisesUserPrincipalName: string;
```

- *Type:* `string`

---

##### `otherMails`<sup>Required</sup> <a name="@cdktf/provider-azuread.DataAzureadUser.property.otherMails"></a>

```typescript
public readonly otherMails: string[];
```

- *Type:* `string`[]

---

##### `postalCode`<sup>Required</sup> <a name="@cdktf/provider-azuread.DataAzureadUser.property.postalCode"></a>

```typescript
public readonly postalCode: string;
```

- *Type:* `string`

---

##### `preferredLanguage`<sup>Required</sup> <a name="@cdktf/provider-azuread.DataAzureadUser.property.preferredLanguage"></a>

```typescript
public readonly preferredLanguage: string;
```

- *Type:* `string`

---

##### `proxyAddresses`<sup>Required</sup> <a name="@cdktf/provider-azuread.DataAzureadUser.property.proxyAddresses"></a>

```typescript
public readonly proxyAddresses: string[];
```

- *Type:* `string`[]

---

##### `showInAddressList`<sup>Required</sup> <a name="@cdktf/provider-azuread.DataAzureadUser.property.showInAddressList"></a>

```typescript
public readonly showInAddressList: IResolvable;
```

- *Type:* [`cdktf.IResolvable`](#cdktf.IResolvable)

---

##### `state`<sup>Required</sup> <a name="@cdktf/provider-azuread.DataAzureadUser.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* `string`

---

##### `streetAddress`<sup>Required</sup> <a name="@cdktf/provider-azuread.DataAzureadUser.property.streetAddress"></a>

```typescript
public readonly streetAddress: string;
```

- *Type:* `string`

---

##### `surname`<sup>Required</sup> <a name="@cdktf/provider-azuread.DataAzureadUser.property.surname"></a>

```typescript
public readonly surname: string;
```

- *Type:* `string`

---

##### `usageLocation`<sup>Required</sup> <a name="@cdktf/provider-azuread.DataAzureadUser.property.usageLocation"></a>

```typescript
public readonly usageLocation: string;
```

- *Type:* `string`

---

##### `userType`<sup>Required</sup> <a name="@cdktf/provider-azuread.DataAzureadUser.property.userType"></a>

```typescript
public readonly userType: string;
```

- *Type:* `string`

---

##### `mailNicknameInput`<sup>Optional</sup> <a name="@cdktf/provider-azuread.DataAzureadUser.property.mailNicknameInput"></a>

```typescript
public readonly mailNicknameInput: string;
```

- *Type:* `string`

---

##### `objectIdInput`<sup>Optional</sup> <a name="@cdktf/provider-azuread.DataAzureadUser.property.objectIdInput"></a>

```typescript
public readonly objectIdInput: string;
```

- *Type:* `string`

---

##### `timeoutsInput`<sup>Optional</sup> <a name="@cdktf/provider-azuread.DataAzureadUser.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: DataAzureadUserTimeouts;
```

- *Type:* [`@cdktf/provider-azuread.DataAzureadUserTimeouts`](#@cdktf/provider-azuread.DataAzureadUserTimeouts)

---

##### `userPrincipalNameInput`<sup>Optional</sup> <a name="@cdktf/provider-azuread.DataAzureadUser.property.userPrincipalNameInput"></a>

```typescript
public readonly userPrincipalNameInput: string;
```

- *Type:* `string`

---

##### `mailNickname`<sup>Required</sup> <a name="@cdktf/provider-azuread.DataAzureadUser.property.mailNickname"></a>

```typescript
public readonly mailNickname: string;
```

- *Type:* `string`

---

##### `objectId`<sup>Required</sup> <a name="@cdktf/provider-azuread.DataAzureadUser.property.objectId"></a>

```typescript
public readonly objectId: string;
```

- *Type:* `string`

---

##### `timeouts`<sup>Required</sup> <a name="@cdktf/provider-azuread.DataAzureadUser.property.timeouts"></a>

```typescript
public readonly timeouts: DataAzureadUserTimeouts;
```

- *Type:* [`@cdktf/provider-azuread.DataAzureadUserTimeouts`](#@cdktf/provider-azuread.DataAzureadUserTimeouts)

---

##### `userPrincipalName`<sup>Required</sup> <a name="@cdktf/provider-azuread.DataAzureadUser.property.userPrincipalName"></a>

```typescript
public readonly userPrincipalName: string;
```

- *Type:* `string`

---

#### Constants <a name="Constants"></a>

##### `tfResourceType` <a name="@cdktf/provider-azuread.DataAzureadUser.property.tfResourceType"></a>

- *Type:* `string`

---

### DataAzureadUsers <a name="@cdktf/provider-azuread.DataAzureadUsers"></a>

Represents a {@link https://www.terraform.io/docs/providers/azuread/d/users.html azuread_users}.

#### Initializers <a name="@cdktf/provider-azuread.DataAzureadUsers.Initializer"></a>

```typescript
import { DataAzureadUsers } from '@cdktf/provider-azuread'

new DataAzureadUsers(scope: Construct, id: string, config?: DataAzureadUsersConfig)
```

##### `scope`<sup>Required</sup> <a name="@cdktf/provider-azuread.DataAzureadUsers.parameter.scope"></a>

- *Type:* [`constructs.Construct`](#constructs.Construct)

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="@cdktf/provider-azuread.DataAzureadUsers.parameter.id"></a>

- *Type:* `string`

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="@cdktf/provider-azuread.DataAzureadUsers.parameter.config"></a>

- *Type:* [`@cdktf/provider-azuread.DataAzureadUsersConfig`](#@cdktf/provider-azuread.DataAzureadUsersConfig)

---

#### Methods <a name="Methods"></a>

##### `resetIgnoreMissing` <a name="@cdktf/provider-azuread.DataAzureadUsers.resetIgnoreMissing"></a>

```typescript
public resetIgnoreMissing()
```

##### `resetMailNicknames` <a name="@cdktf/provider-azuread.DataAzureadUsers.resetMailNicknames"></a>

```typescript
public resetMailNicknames()
```

##### `resetObjectIds` <a name="@cdktf/provider-azuread.DataAzureadUsers.resetObjectIds"></a>

```typescript
public resetObjectIds()
```

##### `resetReturnAll` <a name="@cdktf/provider-azuread.DataAzureadUsers.resetReturnAll"></a>

```typescript
public resetReturnAll()
```

##### `resetTimeouts` <a name="@cdktf/provider-azuread.DataAzureadUsers.resetTimeouts"></a>

```typescript
public resetTimeouts()
```

##### `resetUserPrincipalNames` <a name="@cdktf/provider-azuread.DataAzureadUsers.resetUserPrincipalNames"></a>

```typescript
public resetUserPrincipalNames()
```

##### `users` <a name="@cdktf/provider-azuread.DataAzureadUsers.users"></a>

```typescript
public users(index: string)
```

###### `index`<sup>Required</sup> <a name="@cdktf/provider-azuread.DataAzureadUsers.parameter.index"></a>

- *Type:* `string`

---


#### Properties <a name="Properties"></a>

##### `id`<sup>Required</sup> <a name="@cdktf/provider-azuread.DataAzureadUsers.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* `string`

---

##### `ignoreMissingInput`<sup>Optional</sup> <a name="@cdktf/provider-azuread.DataAzureadUsers.property.ignoreMissingInput"></a>

```typescript
public readonly ignoreMissingInput: boolean | IResolvable;
```

- *Type:* `boolean` | [`cdktf.IResolvable`](#cdktf.IResolvable)

---

##### `mailNicknamesInput`<sup>Optional</sup> <a name="@cdktf/provider-azuread.DataAzureadUsers.property.mailNicknamesInput"></a>

```typescript
public readonly mailNicknamesInput: string[];
```

- *Type:* `string`[]

---

##### `objectIdsInput`<sup>Optional</sup> <a name="@cdktf/provider-azuread.DataAzureadUsers.property.objectIdsInput"></a>

```typescript
public readonly objectIdsInput: string[];
```

- *Type:* `string`[]

---

##### `returnAllInput`<sup>Optional</sup> <a name="@cdktf/provider-azuread.DataAzureadUsers.property.returnAllInput"></a>

```typescript
public readonly returnAllInput: boolean | IResolvable;
```

- *Type:* `boolean` | [`cdktf.IResolvable`](#cdktf.IResolvable)

---

##### `timeoutsInput`<sup>Optional</sup> <a name="@cdktf/provider-azuread.DataAzureadUsers.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: DataAzureadUsersTimeouts;
```

- *Type:* [`@cdktf/provider-azuread.DataAzureadUsersTimeouts`](#@cdktf/provider-azuread.DataAzureadUsersTimeouts)

---

##### `userPrincipalNamesInput`<sup>Optional</sup> <a name="@cdktf/provider-azuread.DataAzureadUsers.property.userPrincipalNamesInput"></a>

```typescript
public readonly userPrincipalNamesInput: string[];
```

- *Type:* `string`[]

---

##### `ignoreMissing`<sup>Required</sup> <a name="@cdktf/provider-azuread.DataAzureadUsers.property.ignoreMissing"></a>

```typescript
public readonly ignoreMissing: boolean | IResolvable;
```

- *Type:* `boolean` | [`cdktf.IResolvable`](#cdktf.IResolvable)

---

##### `mailNicknames`<sup>Required</sup> <a name="@cdktf/provider-azuread.DataAzureadUsers.property.mailNicknames"></a>

```typescript
public readonly mailNicknames: string[];
```

- *Type:* `string`[]

---

##### `objectIds`<sup>Required</sup> <a name="@cdktf/provider-azuread.DataAzureadUsers.property.objectIds"></a>

```typescript
public readonly objectIds: string[];
```

- *Type:* `string`[]

---

##### `returnAll`<sup>Required</sup> <a name="@cdktf/provider-azuread.DataAzureadUsers.property.returnAll"></a>

```typescript
public readonly returnAll: boolean | IResolvable;
```

- *Type:* `boolean` | [`cdktf.IResolvable`](#cdktf.IResolvable)

---

##### `timeouts`<sup>Required</sup> <a name="@cdktf/provider-azuread.DataAzureadUsers.property.timeouts"></a>

```typescript
public readonly timeouts: DataAzureadUsersTimeouts;
```

- *Type:* [`@cdktf/provider-azuread.DataAzureadUsersTimeouts`](#@cdktf/provider-azuread.DataAzureadUsersTimeouts)

---

##### `userPrincipalNames`<sup>Required</sup> <a name="@cdktf/provider-azuread.DataAzureadUsers.property.userPrincipalNames"></a>

```typescript
public readonly userPrincipalNames: string[];
```

- *Type:* `string`[]

---

#### Constants <a name="Constants"></a>

##### `tfResourceType` <a name="@cdktf/provider-azuread.DataAzureadUsers.property.tfResourceType"></a>

- *Type:* `string`

---

### DirectoryRole <a name="@cdktf/provider-azuread.DirectoryRole"></a>

Represents a {@link https://www.terraform.io/docs/providers/azuread/r/directory_role.html azuread_directory_role}.

#### Initializers <a name="@cdktf/provider-azuread.DirectoryRole.Initializer"></a>

```typescript
import { DirectoryRole } from '@cdktf/provider-azuread'

new DirectoryRole(scope: Construct, id: string, config?: DirectoryRoleConfig)
```

##### `scope`<sup>Required</sup> <a name="@cdktf/provider-azuread.DirectoryRole.parameter.scope"></a>

- *Type:* [`constructs.Construct`](#constructs.Construct)

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="@cdktf/provider-azuread.DirectoryRole.parameter.id"></a>

- *Type:* `string`

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="@cdktf/provider-azuread.DirectoryRole.parameter.config"></a>

- *Type:* [`@cdktf/provider-azuread.DirectoryRoleConfig`](#@cdktf/provider-azuread.DirectoryRoleConfig)

---

#### Methods <a name="Methods"></a>

##### `resetDisplayName` <a name="@cdktf/provider-azuread.DirectoryRole.resetDisplayName"></a>

```typescript
public resetDisplayName()
```

##### `resetTemplateId` <a name="@cdktf/provider-azuread.DirectoryRole.resetTemplateId"></a>

```typescript
public resetTemplateId()
```

##### `resetTimeouts` <a name="@cdktf/provider-azuread.DirectoryRole.resetTimeouts"></a>

```typescript
public resetTimeouts()
```


#### Properties <a name="Properties"></a>

##### `description`<sup>Required</sup> <a name="@cdktf/provider-azuread.DirectoryRole.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* `string`

---

##### `id`<sup>Required</sup> <a name="@cdktf/provider-azuread.DirectoryRole.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* `string`

---

##### `objectId`<sup>Required</sup> <a name="@cdktf/provider-azuread.DirectoryRole.property.objectId"></a>

```typescript
public readonly objectId: string;
```

- *Type:* `string`

---

##### `displayNameInput`<sup>Optional</sup> <a name="@cdktf/provider-azuread.DirectoryRole.property.displayNameInput"></a>

```typescript
public readonly displayNameInput: string;
```

- *Type:* `string`

---

##### `templateIdInput`<sup>Optional</sup> <a name="@cdktf/provider-azuread.DirectoryRole.property.templateIdInput"></a>

```typescript
public readonly templateIdInput: string;
```

- *Type:* `string`

---

##### `timeoutsInput`<sup>Optional</sup> <a name="@cdktf/provider-azuread.DirectoryRole.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: DirectoryRoleTimeouts;
```

- *Type:* [`@cdktf/provider-azuread.DirectoryRoleTimeouts`](#@cdktf/provider-azuread.DirectoryRoleTimeouts)

---

##### `displayName`<sup>Required</sup> <a name="@cdktf/provider-azuread.DirectoryRole.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* `string`

---

##### `templateId`<sup>Required</sup> <a name="@cdktf/provider-azuread.DirectoryRole.property.templateId"></a>

```typescript
public readonly templateId: string;
```

- *Type:* `string`

---

##### `timeouts`<sup>Required</sup> <a name="@cdktf/provider-azuread.DirectoryRole.property.timeouts"></a>

```typescript
public readonly timeouts: DirectoryRoleTimeouts;
```

- *Type:* [`@cdktf/provider-azuread.DirectoryRoleTimeouts`](#@cdktf/provider-azuread.DirectoryRoleTimeouts)

---

#### Constants <a name="Constants"></a>

##### `tfResourceType` <a name="@cdktf/provider-azuread.DirectoryRole.property.tfResourceType"></a>

- *Type:* `string`

---

### DirectoryRoleMember <a name="@cdktf/provider-azuread.DirectoryRoleMember"></a>

Represents a {@link https://www.terraform.io/docs/providers/azuread/r/directory_role_member.html azuread_directory_role_member}.

#### Initializers <a name="@cdktf/provider-azuread.DirectoryRoleMember.Initializer"></a>

```typescript
import { DirectoryRoleMember } from '@cdktf/provider-azuread'

new DirectoryRoleMember(scope: Construct, id: string, config?: DirectoryRoleMemberConfig)
```

##### `scope`<sup>Required</sup> <a name="@cdktf/provider-azuread.DirectoryRoleMember.parameter.scope"></a>

- *Type:* [`constructs.Construct`](#constructs.Construct)

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="@cdktf/provider-azuread.DirectoryRoleMember.parameter.id"></a>

- *Type:* `string`

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="@cdktf/provider-azuread.DirectoryRoleMember.parameter.config"></a>

- *Type:* [`@cdktf/provider-azuread.DirectoryRoleMemberConfig`](#@cdktf/provider-azuread.DirectoryRoleMemberConfig)

---

#### Methods <a name="Methods"></a>

##### `resetMemberObjectId` <a name="@cdktf/provider-azuread.DirectoryRoleMember.resetMemberObjectId"></a>

```typescript
public resetMemberObjectId()
```

##### `resetRoleObjectId` <a name="@cdktf/provider-azuread.DirectoryRoleMember.resetRoleObjectId"></a>

```typescript
public resetRoleObjectId()
```

##### `resetTimeouts` <a name="@cdktf/provider-azuread.DirectoryRoleMember.resetTimeouts"></a>

```typescript
public resetTimeouts()
```


#### Properties <a name="Properties"></a>

##### `id`<sup>Required</sup> <a name="@cdktf/provider-azuread.DirectoryRoleMember.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* `string`

---

##### `memberObjectIdInput`<sup>Optional</sup> <a name="@cdktf/provider-azuread.DirectoryRoleMember.property.memberObjectIdInput"></a>

```typescript
public readonly memberObjectIdInput: string;
```

- *Type:* `string`

---

##### `roleObjectIdInput`<sup>Optional</sup> <a name="@cdktf/provider-azuread.DirectoryRoleMember.property.roleObjectIdInput"></a>

```typescript
public readonly roleObjectIdInput: string;
```

- *Type:* `string`

---

##### `timeoutsInput`<sup>Optional</sup> <a name="@cdktf/provider-azuread.DirectoryRoleMember.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: DirectoryRoleMemberTimeouts;
```

- *Type:* [`@cdktf/provider-azuread.DirectoryRoleMemberTimeouts`](#@cdktf/provider-azuread.DirectoryRoleMemberTimeouts)

---

##### `memberObjectId`<sup>Required</sup> <a name="@cdktf/provider-azuread.DirectoryRoleMember.property.memberObjectId"></a>

```typescript
public readonly memberObjectId: string;
```

- *Type:* `string`

---

##### `roleObjectId`<sup>Required</sup> <a name="@cdktf/provider-azuread.DirectoryRoleMember.property.roleObjectId"></a>

```typescript
public readonly roleObjectId: string;
```

- *Type:* `string`

---

##### `timeouts`<sup>Required</sup> <a name="@cdktf/provider-azuread.DirectoryRoleMember.property.timeouts"></a>

```typescript
public readonly timeouts: DirectoryRoleMemberTimeouts;
```

- *Type:* [`@cdktf/provider-azuread.DirectoryRoleMemberTimeouts`](#@cdktf/provider-azuread.DirectoryRoleMemberTimeouts)

---

#### Constants <a name="Constants"></a>

##### `tfResourceType` <a name="@cdktf/provider-azuread.DirectoryRoleMember.property.tfResourceType"></a>

- *Type:* `string`

---

### Group <a name="@cdktf/provider-azuread.Group"></a>

Represents a {@link https://www.terraform.io/docs/providers/azuread/r/group.html azuread_group}.

#### Initializers <a name="@cdktf/provider-azuread.Group.Initializer"></a>

```typescript
import { Group } from '@cdktf/provider-azuread'

new Group(scope: Construct, id: string, config: GroupConfig)
```

##### `scope`<sup>Required</sup> <a name="@cdktf/provider-azuread.Group.parameter.scope"></a>

- *Type:* [`constructs.Construct`](#constructs.Construct)

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="@cdktf/provider-azuread.Group.parameter.id"></a>

- *Type:* `string`

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="@cdktf/provider-azuread.Group.parameter.config"></a>

- *Type:* [`@cdktf/provider-azuread.GroupConfig`](#@cdktf/provider-azuread.GroupConfig)

---

#### Methods <a name="Methods"></a>

##### `resetAssignableToRole` <a name="@cdktf/provider-azuread.Group.resetAssignableToRole"></a>

```typescript
public resetAssignableToRole()
```

##### `resetBehaviors` <a name="@cdktf/provider-azuread.Group.resetBehaviors"></a>

```typescript
public resetBehaviors()
```

##### `resetDescription` <a name="@cdktf/provider-azuread.Group.resetDescription"></a>

```typescript
public resetDescription()
```

##### `resetMailEnabled` <a name="@cdktf/provider-azuread.Group.resetMailEnabled"></a>

```typescript
public resetMailEnabled()
```

##### `resetMailNickname` <a name="@cdktf/provider-azuread.Group.resetMailNickname"></a>

```typescript
public resetMailNickname()
```

##### `resetMembers` <a name="@cdktf/provider-azuread.Group.resetMembers"></a>

```typescript
public resetMembers()
```

##### `resetOwners` <a name="@cdktf/provider-azuread.Group.resetOwners"></a>

```typescript
public resetOwners()
```

##### `resetPreventDuplicateNames` <a name="@cdktf/provider-azuread.Group.resetPreventDuplicateNames"></a>

```typescript
public resetPreventDuplicateNames()
```

##### `resetProvisioningOptions` <a name="@cdktf/provider-azuread.Group.resetProvisioningOptions"></a>

```typescript
public resetProvisioningOptions()
```

##### `resetSecurityEnabled` <a name="@cdktf/provider-azuread.Group.resetSecurityEnabled"></a>

```typescript
public resetSecurityEnabled()
```

##### `resetTheme` <a name="@cdktf/provider-azuread.Group.resetTheme"></a>

```typescript
public resetTheme()
```

##### `resetTimeouts` <a name="@cdktf/provider-azuread.Group.resetTimeouts"></a>

```typescript
public resetTimeouts()
```

##### `resetTypes` <a name="@cdktf/provider-azuread.Group.resetTypes"></a>

```typescript
public resetTypes()
```

##### `resetVisibility` <a name="@cdktf/provider-azuread.Group.resetVisibility"></a>

```typescript
public resetVisibility()
```


#### Properties <a name="Properties"></a>

##### `displayNameInput`<sup>Required</sup> <a name="@cdktf/provider-azuread.Group.property.displayNameInput"></a>

```typescript
public readonly displayNameInput: string;
```

- *Type:* `string`

---

##### `id`<sup>Required</sup> <a name="@cdktf/provider-azuread.Group.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* `string`

---

##### `mail`<sup>Required</sup> <a name="@cdktf/provider-azuread.Group.property.mail"></a>

```typescript
public readonly mail: string;
```

- *Type:* `string`

---

##### `objectId`<sup>Required</sup> <a name="@cdktf/provider-azuread.Group.property.objectId"></a>

```typescript
public readonly objectId: string;
```

- *Type:* `string`

---

##### `onpremisesDomainName`<sup>Required</sup> <a name="@cdktf/provider-azuread.Group.property.onpremisesDomainName"></a>

```typescript
public readonly onpremisesDomainName: string;
```

- *Type:* `string`

---

##### `onpremisesNetbiosName`<sup>Required</sup> <a name="@cdktf/provider-azuread.Group.property.onpremisesNetbiosName"></a>

```typescript
public readonly onpremisesNetbiosName: string;
```

- *Type:* `string`

---

##### `onpremisesSamAccountName`<sup>Required</sup> <a name="@cdktf/provider-azuread.Group.property.onpremisesSamAccountName"></a>

```typescript
public readonly onpremisesSamAccountName: string;
```

- *Type:* `string`

---

##### `onpremisesSecurityIdentifier`<sup>Required</sup> <a name="@cdktf/provider-azuread.Group.property.onpremisesSecurityIdentifier"></a>

```typescript
public readonly onpremisesSecurityIdentifier: string;
```

- *Type:* `string`

---

##### `onpremisesSyncEnabled`<sup>Required</sup> <a name="@cdktf/provider-azuread.Group.property.onpremisesSyncEnabled"></a>

```typescript
public readonly onpremisesSyncEnabled: IResolvable;
```

- *Type:* [`cdktf.IResolvable`](#cdktf.IResolvable)

---

##### `preferredLanguage`<sup>Required</sup> <a name="@cdktf/provider-azuread.Group.property.preferredLanguage"></a>

```typescript
public readonly preferredLanguage: string;
```

- *Type:* `string`

---

##### `proxyAddresses`<sup>Required</sup> <a name="@cdktf/provider-azuread.Group.property.proxyAddresses"></a>

```typescript
public readonly proxyAddresses: string[];
```

- *Type:* `string`[]

---

##### `assignableToRoleInput`<sup>Optional</sup> <a name="@cdktf/provider-azuread.Group.property.assignableToRoleInput"></a>

```typescript
public readonly assignableToRoleInput: boolean | IResolvable;
```

- *Type:* `boolean` | [`cdktf.IResolvable`](#cdktf.IResolvable)

---

##### `behaviorsInput`<sup>Optional</sup> <a name="@cdktf/provider-azuread.Group.property.behaviorsInput"></a>

```typescript
public readonly behaviorsInput: string[];
```

- *Type:* `string`[]

---

##### `descriptionInput`<sup>Optional</sup> <a name="@cdktf/provider-azuread.Group.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* `string`

---

##### `mailEnabledInput`<sup>Optional</sup> <a name="@cdktf/provider-azuread.Group.property.mailEnabledInput"></a>

```typescript
public readonly mailEnabledInput: boolean | IResolvable;
```

- *Type:* `boolean` | [`cdktf.IResolvable`](#cdktf.IResolvable)

---

##### `mailNicknameInput`<sup>Optional</sup> <a name="@cdktf/provider-azuread.Group.property.mailNicknameInput"></a>

```typescript
public readonly mailNicknameInput: string;
```

- *Type:* `string`

---

##### `membersInput`<sup>Optional</sup> <a name="@cdktf/provider-azuread.Group.property.membersInput"></a>

```typescript
public readonly membersInput: string[];
```

- *Type:* `string`[]

---

##### `ownersInput`<sup>Optional</sup> <a name="@cdktf/provider-azuread.Group.property.ownersInput"></a>

```typescript
public readonly ownersInput: string[];
```

- *Type:* `string`[]

---

##### `preventDuplicateNamesInput`<sup>Optional</sup> <a name="@cdktf/provider-azuread.Group.property.preventDuplicateNamesInput"></a>

```typescript
public readonly preventDuplicateNamesInput: boolean | IResolvable;
```

- *Type:* `boolean` | [`cdktf.IResolvable`](#cdktf.IResolvable)

---

##### `provisioningOptionsInput`<sup>Optional</sup> <a name="@cdktf/provider-azuread.Group.property.provisioningOptionsInput"></a>

```typescript
public readonly provisioningOptionsInput: string[];
```

- *Type:* `string`[]

---

##### `securityEnabledInput`<sup>Optional</sup> <a name="@cdktf/provider-azuread.Group.property.securityEnabledInput"></a>

```typescript
public readonly securityEnabledInput: boolean | IResolvable;
```

- *Type:* `boolean` | [`cdktf.IResolvable`](#cdktf.IResolvable)

---

##### `themeInput`<sup>Optional</sup> <a name="@cdktf/provider-azuread.Group.property.themeInput"></a>

```typescript
public readonly themeInput: string;
```

- *Type:* `string`

---

##### `timeoutsInput`<sup>Optional</sup> <a name="@cdktf/provider-azuread.Group.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: GroupTimeouts;
```

- *Type:* [`@cdktf/provider-azuread.GroupTimeouts`](#@cdktf/provider-azuread.GroupTimeouts)

---

##### `typesInput`<sup>Optional</sup> <a name="@cdktf/provider-azuread.Group.property.typesInput"></a>

```typescript
public readonly typesInput: string[];
```

- *Type:* `string`[]

---

##### `visibilityInput`<sup>Optional</sup> <a name="@cdktf/provider-azuread.Group.property.visibilityInput"></a>

```typescript
public readonly visibilityInput: string;
```

- *Type:* `string`

---

##### `assignableToRole`<sup>Required</sup> <a name="@cdktf/provider-azuread.Group.property.assignableToRole"></a>

```typescript
public readonly assignableToRole: boolean | IResolvable;
```

- *Type:* `boolean` | [`cdktf.IResolvable`](#cdktf.IResolvable)

---

##### `behaviors`<sup>Required</sup> <a name="@cdktf/provider-azuread.Group.property.behaviors"></a>

```typescript
public readonly behaviors: string[];
```

- *Type:* `string`[]

---

##### `description`<sup>Required</sup> <a name="@cdktf/provider-azuread.Group.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* `string`

---

##### `displayName`<sup>Required</sup> <a name="@cdktf/provider-azuread.Group.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* `string`

---

##### `mailEnabled`<sup>Required</sup> <a name="@cdktf/provider-azuread.Group.property.mailEnabled"></a>

```typescript
public readonly mailEnabled: boolean | IResolvable;
```

- *Type:* `boolean` | [`cdktf.IResolvable`](#cdktf.IResolvable)

---

##### `mailNickname`<sup>Required</sup> <a name="@cdktf/provider-azuread.Group.property.mailNickname"></a>

```typescript
public readonly mailNickname: string;
```

- *Type:* `string`

---

##### `members`<sup>Required</sup> <a name="@cdktf/provider-azuread.Group.property.members"></a>

```typescript
public readonly members: string[];
```

- *Type:* `string`[]

---

##### `owners`<sup>Required</sup> <a name="@cdktf/provider-azuread.Group.property.owners"></a>

```typescript
public readonly owners: string[];
```

- *Type:* `string`[]

---

##### `preventDuplicateNames`<sup>Required</sup> <a name="@cdktf/provider-azuread.Group.property.preventDuplicateNames"></a>

```typescript
public readonly preventDuplicateNames: boolean | IResolvable;
```

- *Type:* `boolean` | [`cdktf.IResolvable`](#cdktf.IResolvable)

---

##### `provisioningOptions`<sup>Required</sup> <a name="@cdktf/provider-azuread.Group.property.provisioningOptions"></a>

```typescript
public readonly provisioningOptions: string[];
```

- *Type:* `string`[]

---

##### `securityEnabled`<sup>Required</sup> <a name="@cdktf/provider-azuread.Group.property.securityEnabled"></a>

```typescript
public readonly securityEnabled: boolean | IResolvable;
```

- *Type:* `boolean` | [`cdktf.IResolvable`](#cdktf.IResolvable)

---

##### `theme`<sup>Required</sup> <a name="@cdktf/provider-azuread.Group.property.theme"></a>

```typescript
public readonly theme: string;
```

- *Type:* `string`

---

##### `timeouts`<sup>Required</sup> <a name="@cdktf/provider-azuread.Group.property.timeouts"></a>

```typescript
public readonly timeouts: GroupTimeouts;
```

- *Type:* [`@cdktf/provider-azuread.GroupTimeouts`](#@cdktf/provider-azuread.GroupTimeouts)

---

##### `types`<sup>Required</sup> <a name="@cdktf/provider-azuread.Group.property.types"></a>

```typescript
public readonly types: string[];
```

- *Type:* `string`[]

---

##### `visibility`<sup>Required</sup> <a name="@cdktf/provider-azuread.Group.property.visibility"></a>

```typescript
public readonly visibility: string;
```

- *Type:* `string`

---

#### Constants <a name="Constants"></a>

##### `tfResourceType` <a name="@cdktf/provider-azuread.Group.property.tfResourceType"></a>

- *Type:* `string`

---

### GroupMember <a name="@cdktf/provider-azuread.GroupMember"></a>

Represents a {@link https://www.terraform.io/docs/providers/azuread/r/group_member.html azuread_group_member}.

#### Initializers <a name="@cdktf/provider-azuread.GroupMember.Initializer"></a>

```typescript
import { GroupMember } from '@cdktf/provider-azuread'

new GroupMember(scope: Construct, id: string, config: GroupMemberConfig)
```

##### `scope`<sup>Required</sup> <a name="@cdktf/provider-azuread.GroupMember.parameter.scope"></a>

- *Type:* [`constructs.Construct`](#constructs.Construct)

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="@cdktf/provider-azuread.GroupMember.parameter.id"></a>

- *Type:* `string`

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="@cdktf/provider-azuread.GroupMember.parameter.config"></a>

- *Type:* [`@cdktf/provider-azuread.GroupMemberConfig`](#@cdktf/provider-azuread.GroupMemberConfig)

---

#### Methods <a name="Methods"></a>

##### `resetTimeouts` <a name="@cdktf/provider-azuread.GroupMember.resetTimeouts"></a>

```typescript
public resetTimeouts()
```


#### Properties <a name="Properties"></a>

##### `groupObjectIdInput`<sup>Required</sup> <a name="@cdktf/provider-azuread.GroupMember.property.groupObjectIdInput"></a>

```typescript
public readonly groupObjectIdInput: string;
```

- *Type:* `string`

---

##### `id`<sup>Required</sup> <a name="@cdktf/provider-azuread.GroupMember.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* `string`

---

##### `memberObjectIdInput`<sup>Required</sup> <a name="@cdktf/provider-azuread.GroupMember.property.memberObjectIdInput"></a>

```typescript
public readonly memberObjectIdInput: string;
```

- *Type:* `string`

---

##### `timeoutsInput`<sup>Optional</sup> <a name="@cdktf/provider-azuread.GroupMember.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: GroupMemberTimeouts;
```

- *Type:* [`@cdktf/provider-azuread.GroupMemberTimeouts`](#@cdktf/provider-azuread.GroupMemberTimeouts)

---

##### `groupObjectId`<sup>Required</sup> <a name="@cdktf/provider-azuread.GroupMember.property.groupObjectId"></a>

```typescript
public readonly groupObjectId: string;
```

- *Type:* `string`

---

##### `memberObjectId`<sup>Required</sup> <a name="@cdktf/provider-azuread.GroupMember.property.memberObjectId"></a>

```typescript
public readonly memberObjectId: string;
```

- *Type:* `string`

---

##### `timeouts`<sup>Required</sup> <a name="@cdktf/provider-azuread.GroupMember.property.timeouts"></a>

```typescript
public readonly timeouts: GroupMemberTimeouts;
```

- *Type:* [`@cdktf/provider-azuread.GroupMemberTimeouts`](#@cdktf/provider-azuread.GroupMemberTimeouts)

---

#### Constants <a name="Constants"></a>

##### `tfResourceType` <a name="@cdktf/provider-azuread.GroupMember.property.tfResourceType"></a>

- *Type:* `string`

---

### Invitation <a name="@cdktf/provider-azuread.Invitation"></a>

Represents a {@link https://www.terraform.io/docs/providers/azuread/r/invitation.html azuread_invitation}.

#### Initializers <a name="@cdktf/provider-azuread.Invitation.Initializer"></a>

```typescript
import { Invitation } from '@cdktf/provider-azuread'

new Invitation(scope: Construct, id: string, config: InvitationConfig)
```

##### `scope`<sup>Required</sup> <a name="@cdktf/provider-azuread.Invitation.parameter.scope"></a>

- *Type:* [`constructs.Construct`](#constructs.Construct)

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="@cdktf/provider-azuread.Invitation.parameter.id"></a>

- *Type:* `string`

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="@cdktf/provider-azuread.Invitation.parameter.config"></a>

- *Type:* [`@cdktf/provider-azuread.InvitationConfig`](#@cdktf/provider-azuread.InvitationConfig)

---

#### Methods <a name="Methods"></a>

##### `resetMessage` <a name="@cdktf/provider-azuread.Invitation.resetMessage"></a>

```typescript
public resetMessage()
```

##### `resetTimeouts` <a name="@cdktf/provider-azuread.Invitation.resetTimeouts"></a>

```typescript
public resetTimeouts()
```

##### `resetUserDisplayName` <a name="@cdktf/provider-azuread.Invitation.resetUserDisplayName"></a>

```typescript
public resetUserDisplayName()
```

##### `resetUserType` <a name="@cdktf/provider-azuread.Invitation.resetUserType"></a>

```typescript
public resetUserType()
```


#### Properties <a name="Properties"></a>

##### `id`<sup>Required</sup> <a name="@cdktf/provider-azuread.Invitation.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* `string`

---

##### `redeemUrl`<sup>Required</sup> <a name="@cdktf/provider-azuread.Invitation.property.redeemUrl"></a>

```typescript
public readonly redeemUrl: string;
```

- *Type:* `string`

---

##### `redirectUrlInput`<sup>Required</sup> <a name="@cdktf/provider-azuread.Invitation.property.redirectUrlInput"></a>

```typescript
public readonly redirectUrlInput: string;
```

- *Type:* `string`

---

##### `userEmailAddressInput`<sup>Required</sup> <a name="@cdktf/provider-azuread.Invitation.property.userEmailAddressInput"></a>

```typescript
public readonly userEmailAddressInput: string;
```

- *Type:* `string`

---

##### `userId`<sup>Required</sup> <a name="@cdktf/provider-azuread.Invitation.property.userId"></a>

```typescript
public readonly userId: string;
```

- *Type:* `string`

---

##### `messageInput`<sup>Optional</sup> <a name="@cdktf/provider-azuread.Invitation.property.messageInput"></a>

```typescript
public readonly messageInput: InvitationMessage[];
```

- *Type:* [`@cdktf/provider-azuread.InvitationMessage`](#@cdktf/provider-azuread.InvitationMessage)[]

---

##### `timeoutsInput`<sup>Optional</sup> <a name="@cdktf/provider-azuread.Invitation.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: InvitationTimeouts;
```

- *Type:* [`@cdktf/provider-azuread.InvitationTimeouts`](#@cdktf/provider-azuread.InvitationTimeouts)

---

##### `userDisplayNameInput`<sup>Optional</sup> <a name="@cdktf/provider-azuread.Invitation.property.userDisplayNameInput"></a>

```typescript
public readonly userDisplayNameInput: string;
```

- *Type:* `string`

---

##### `userTypeInput`<sup>Optional</sup> <a name="@cdktf/provider-azuread.Invitation.property.userTypeInput"></a>

```typescript
public readonly userTypeInput: string;
```

- *Type:* `string`

---

##### `message`<sup>Required</sup> <a name="@cdktf/provider-azuread.Invitation.property.message"></a>

```typescript
public readonly message: InvitationMessage[];
```

- *Type:* [`@cdktf/provider-azuread.InvitationMessage`](#@cdktf/provider-azuread.InvitationMessage)[]

---

##### `redirectUrl`<sup>Required</sup> <a name="@cdktf/provider-azuread.Invitation.property.redirectUrl"></a>

```typescript
public readonly redirectUrl: string;
```

- *Type:* `string`

---

##### `timeouts`<sup>Required</sup> <a name="@cdktf/provider-azuread.Invitation.property.timeouts"></a>

```typescript
public readonly timeouts: InvitationTimeouts;
```

- *Type:* [`@cdktf/provider-azuread.InvitationTimeouts`](#@cdktf/provider-azuread.InvitationTimeouts)

---

##### `userDisplayName`<sup>Required</sup> <a name="@cdktf/provider-azuread.Invitation.property.userDisplayName"></a>

```typescript
public readonly userDisplayName: string;
```

- *Type:* `string`

---

##### `userEmailAddress`<sup>Required</sup> <a name="@cdktf/provider-azuread.Invitation.property.userEmailAddress"></a>

```typescript
public readonly userEmailAddress: string;
```

- *Type:* `string`

---

##### `userType`<sup>Required</sup> <a name="@cdktf/provider-azuread.Invitation.property.userType"></a>

```typescript
public readonly userType: string;
```

- *Type:* `string`

---

#### Constants <a name="Constants"></a>

##### `tfResourceType` <a name="@cdktf/provider-azuread.Invitation.property.tfResourceType"></a>

- *Type:* `string`

---

### NamedLocation <a name="@cdktf/provider-azuread.NamedLocation"></a>

Represents a {@link https://www.terraform.io/docs/providers/azuread/r/named_location.html azuread_named_location}.

#### Initializers <a name="@cdktf/provider-azuread.NamedLocation.Initializer"></a>

```typescript
import { NamedLocation } from '@cdktf/provider-azuread'

new NamedLocation(scope: Construct, id: string, config: NamedLocationConfig)
```

##### `scope`<sup>Required</sup> <a name="@cdktf/provider-azuread.NamedLocation.parameter.scope"></a>

- *Type:* [`constructs.Construct`](#constructs.Construct)

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="@cdktf/provider-azuread.NamedLocation.parameter.id"></a>

- *Type:* `string`

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="@cdktf/provider-azuread.NamedLocation.parameter.config"></a>

- *Type:* [`@cdktf/provider-azuread.NamedLocationConfig`](#@cdktf/provider-azuread.NamedLocationConfig)

---

#### Methods <a name="Methods"></a>

##### `resetCountry` <a name="@cdktf/provider-azuread.NamedLocation.resetCountry"></a>

```typescript
public resetCountry()
```

##### `resetIp` <a name="@cdktf/provider-azuread.NamedLocation.resetIp"></a>

```typescript
public resetIp()
```

##### `resetTimeouts` <a name="@cdktf/provider-azuread.NamedLocation.resetTimeouts"></a>

```typescript
public resetTimeouts()
```


#### Properties <a name="Properties"></a>

##### `displayNameInput`<sup>Required</sup> <a name="@cdktf/provider-azuread.NamedLocation.property.displayNameInput"></a>

```typescript
public readonly displayNameInput: string;
```

- *Type:* `string`

---

##### `id`<sup>Required</sup> <a name="@cdktf/provider-azuread.NamedLocation.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* `string`

---

##### `countryInput`<sup>Optional</sup> <a name="@cdktf/provider-azuread.NamedLocation.property.countryInput"></a>

```typescript
public readonly countryInput: NamedLocationCountry[];
```

- *Type:* [`@cdktf/provider-azuread.NamedLocationCountry`](#@cdktf/provider-azuread.NamedLocationCountry)[]

---

##### `ipInput`<sup>Optional</sup> <a name="@cdktf/provider-azuread.NamedLocation.property.ipInput"></a>

```typescript
public readonly ipInput: NamedLocationIp[];
```

- *Type:* [`@cdktf/provider-azuread.NamedLocationIp`](#@cdktf/provider-azuread.NamedLocationIp)[]

---

##### `timeoutsInput`<sup>Optional</sup> <a name="@cdktf/provider-azuread.NamedLocation.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: NamedLocationTimeouts;
```

- *Type:* [`@cdktf/provider-azuread.NamedLocationTimeouts`](#@cdktf/provider-azuread.NamedLocationTimeouts)

---

##### `country`<sup>Required</sup> <a name="@cdktf/provider-azuread.NamedLocation.property.country"></a>

```typescript
public readonly country: NamedLocationCountry[];
```

- *Type:* [`@cdktf/provider-azuread.NamedLocationCountry`](#@cdktf/provider-azuread.NamedLocationCountry)[]

---

##### `displayName`<sup>Required</sup> <a name="@cdktf/provider-azuread.NamedLocation.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* `string`

---

##### `ip`<sup>Required</sup> <a name="@cdktf/provider-azuread.NamedLocation.property.ip"></a>

```typescript
public readonly ip: NamedLocationIp[];
```

- *Type:* [`@cdktf/provider-azuread.NamedLocationIp`](#@cdktf/provider-azuread.NamedLocationIp)[]

---

##### `timeouts`<sup>Required</sup> <a name="@cdktf/provider-azuread.NamedLocation.property.timeouts"></a>

```typescript
public readonly timeouts: NamedLocationTimeouts;
```

- *Type:* [`@cdktf/provider-azuread.NamedLocationTimeouts`](#@cdktf/provider-azuread.NamedLocationTimeouts)

---

#### Constants <a name="Constants"></a>

##### `tfResourceType` <a name="@cdktf/provider-azuread.NamedLocation.property.tfResourceType"></a>

- *Type:* `string`

---

### ServicePrincipal <a name="@cdktf/provider-azuread.ServicePrincipal"></a>

Represents a {@link https://www.terraform.io/docs/providers/azuread/r/service_principal.html azuread_service_principal}.

#### Initializers <a name="@cdktf/provider-azuread.ServicePrincipal.Initializer"></a>

```typescript
import { ServicePrincipal } from '@cdktf/provider-azuread'

new ServicePrincipal(scope: Construct, id: string, config: ServicePrincipalConfig)
```

##### `scope`<sup>Required</sup> <a name="@cdktf/provider-azuread.ServicePrincipal.parameter.scope"></a>

- *Type:* [`constructs.Construct`](#constructs.Construct)

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="@cdktf/provider-azuread.ServicePrincipal.parameter.id"></a>

- *Type:* `string`

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="@cdktf/provider-azuread.ServicePrincipal.parameter.config"></a>

- *Type:* [`@cdktf/provider-azuread.ServicePrincipalConfig`](#@cdktf/provider-azuread.ServicePrincipalConfig)

---

#### Methods <a name="Methods"></a>

##### `appRoleIds` <a name="@cdktf/provider-azuread.ServicePrincipal.appRoleIds"></a>

```typescript
public appRoleIds(key: string)
```

###### `key`<sup>Required</sup> <a name="@cdktf/provider-azuread.ServicePrincipal.parameter.key"></a>

- *Type:* `string`

---

##### `appRoles` <a name="@cdktf/provider-azuread.ServicePrincipal.appRoles"></a>

```typescript
public appRoles(index: string)
```

###### `index`<sup>Required</sup> <a name="@cdktf/provider-azuread.ServicePrincipal.parameter.index"></a>

- *Type:* `string`

---

##### `oauth2PermissionScopeIds` <a name="@cdktf/provider-azuread.ServicePrincipal.oauth2PermissionScopeIds"></a>

```typescript
public oauth2PermissionScopeIds(key: string)
```

###### `key`<sup>Required</sup> <a name="@cdktf/provider-azuread.ServicePrincipal.parameter.key"></a>

- *Type:* `string`

---

##### `oauth2PermissionScopes` <a name="@cdktf/provider-azuread.ServicePrincipal.oauth2PermissionScopes"></a>

```typescript
public oauth2PermissionScopes(index: string)
```

###### `index`<sup>Required</sup> <a name="@cdktf/provider-azuread.ServicePrincipal.parameter.index"></a>

- *Type:* `string`

---

##### `resetAccountEnabled` <a name="@cdktf/provider-azuread.ServicePrincipal.resetAccountEnabled"></a>

```typescript
public resetAccountEnabled()
```

##### `resetAlternativeNames` <a name="@cdktf/provider-azuread.ServicePrincipal.resetAlternativeNames"></a>

```typescript
public resetAlternativeNames()
```

##### `resetAppRoleAssignmentRequired` <a name="@cdktf/provider-azuread.ServicePrincipal.resetAppRoleAssignmentRequired"></a>

```typescript
public resetAppRoleAssignmentRequired()
```

##### `resetDescription` <a name="@cdktf/provider-azuread.ServicePrincipal.resetDescription"></a>

```typescript
public resetDescription()
```

##### `resetFeatures` <a name="@cdktf/provider-azuread.ServicePrincipal.resetFeatures"></a>

```typescript
public resetFeatures()
```

##### `resetLoginUrl` <a name="@cdktf/provider-azuread.ServicePrincipal.resetLoginUrl"></a>

```typescript
public resetLoginUrl()
```

##### `resetNotes` <a name="@cdktf/provider-azuread.ServicePrincipal.resetNotes"></a>

```typescript
public resetNotes()
```

##### `resetNotificationEmailAddresses` <a name="@cdktf/provider-azuread.ServicePrincipal.resetNotificationEmailAddresses"></a>

```typescript
public resetNotificationEmailAddresses()
```

##### `resetOwners` <a name="@cdktf/provider-azuread.ServicePrincipal.resetOwners"></a>

```typescript
public resetOwners()
```

##### `resetPreferredSingleSignOnMode` <a name="@cdktf/provider-azuread.ServicePrincipal.resetPreferredSingleSignOnMode"></a>

```typescript
public resetPreferredSingleSignOnMode()
```

##### `resetSamlSingleSignOn` <a name="@cdktf/provider-azuread.ServicePrincipal.resetSamlSingleSignOn"></a>

```typescript
public resetSamlSingleSignOn()
```

##### `resetTags` <a name="@cdktf/provider-azuread.ServicePrincipal.resetTags"></a>

```typescript
public resetTags()
```

##### `resetTimeouts` <a name="@cdktf/provider-azuread.ServicePrincipal.resetTimeouts"></a>

```typescript
public resetTimeouts()
```

##### `resetUseExisting` <a name="@cdktf/provider-azuread.ServicePrincipal.resetUseExisting"></a>

```typescript
public resetUseExisting()
```


#### Properties <a name="Properties"></a>

##### `applicationIdInput`<sup>Required</sup> <a name="@cdktf/provider-azuread.ServicePrincipal.property.applicationIdInput"></a>

```typescript
public readonly applicationIdInput: string;
```

- *Type:* `string`

---

##### `applicationTenantId`<sup>Required</sup> <a name="@cdktf/provider-azuread.ServicePrincipal.property.applicationTenantId"></a>

```typescript
public readonly applicationTenantId: string;
```

- *Type:* `string`

---

##### `displayName`<sup>Required</sup> <a name="@cdktf/provider-azuread.ServicePrincipal.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* `string`

---

##### `homepageUrl`<sup>Required</sup> <a name="@cdktf/provider-azuread.ServicePrincipal.property.homepageUrl"></a>

```typescript
public readonly homepageUrl: string;
```

- *Type:* `string`

---

##### `id`<sup>Required</sup> <a name="@cdktf/provider-azuread.ServicePrincipal.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* `string`

---

##### `logoutUrl`<sup>Required</sup> <a name="@cdktf/provider-azuread.ServicePrincipal.property.logoutUrl"></a>

```typescript
public readonly logoutUrl: string;
```

- *Type:* `string`

---

##### `objectId`<sup>Required</sup> <a name="@cdktf/provider-azuread.ServicePrincipal.property.objectId"></a>

```typescript
public readonly objectId: string;
```

- *Type:* `string`

---

##### `redirectUris`<sup>Required</sup> <a name="@cdktf/provider-azuread.ServicePrincipal.property.redirectUris"></a>

```typescript
public readonly redirectUris: string[];
```

- *Type:* `string`[]

---

##### `samlMetadataUrl`<sup>Required</sup> <a name="@cdktf/provider-azuread.ServicePrincipal.property.samlMetadataUrl"></a>

```typescript
public readonly samlMetadataUrl: string;
```

- *Type:* `string`

---

##### `servicePrincipalNames`<sup>Required</sup> <a name="@cdktf/provider-azuread.ServicePrincipal.property.servicePrincipalNames"></a>

```typescript
public readonly servicePrincipalNames: string[];
```

- *Type:* `string`[]

---

##### `signInAudience`<sup>Required</sup> <a name="@cdktf/provider-azuread.ServicePrincipal.property.signInAudience"></a>

```typescript
public readonly signInAudience: string;
```

- *Type:* `string`

---

##### `type`<sup>Required</sup> <a name="@cdktf/provider-azuread.ServicePrincipal.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* `string`

---

##### `accountEnabledInput`<sup>Optional</sup> <a name="@cdktf/provider-azuread.ServicePrincipal.property.accountEnabledInput"></a>

```typescript
public readonly accountEnabledInput: boolean | IResolvable;
```

- *Type:* `boolean` | [`cdktf.IResolvable`](#cdktf.IResolvable)

---

##### `alternativeNamesInput`<sup>Optional</sup> <a name="@cdktf/provider-azuread.ServicePrincipal.property.alternativeNamesInput"></a>

```typescript
public readonly alternativeNamesInput: string[];
```

- *Type:* `string`[]

---

##### `appRoleAssignmentRequiredInput`<sup>Optional</sup> <a name="@cdktf/provider-azuread.ServicePrincipal.property.appRoleAssignmentRequiredInput"></a>

```typescript
public readonly appRoleAssignmentRequiredInput: boolean | IResolvable;
```

- *Type:* `boolean` | [`cdktf.IResolvable`](#cdktf.IResolvable)

---

##### `descriptionInput`<sup>Optional</sup> <a name="@cdktf/provider-azuread.ServicePrincipal.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* `string`

---

##### `featuresInput`<sup>Optional</sup> <a name="@cdktf/provider-azuread.ServicePrincipal.property.featuresInput"></a>

```typescript
public readonly featuresInput: ServicePrincipalFeatures[];
```

- *Type:* [`@cdktf/provider-azuread.ServicePrincipalFeatures`](#@cdktf/provider-azuread.ServicePrincipalFeatures)[]

---

##### `loginUrlInput`<sup>Optional</sup> <a name="@cdktf/provider-azuread.ServicePrincipal.property.loginUrlInput"></a>

```typescript
public readonly loginUrlInput: string;
```

- *Type:* `string`

---

##### `notesInput`<sup>Optional</sup> <a name="@cdktf/provider-azuread.ServicePrincipal.property.notesInput"></a>

```typescript
public readonly notesInput: string;
```

- *Type:* `string`

---

##### `notificationEmailAddressesInput`<sup>Optional</sup> <a name="@cdktf/provider-azuread.ServicePrincipal.property.notificationEmailAddressesInput"></a>

```typescript
public readonly notificationEmailAddressesInput: string[];
```

- *Type:* `string`[]

---

##### `ownersInput`<sup>Optional</sup> <a name="@cdktf/provider-azuread.ServicePrincipal.property.ownersInput"></a>

```typescript
public readonly ownersInput: string[];
```

- *Type:* `string`[]

---

##### `preferredSingleSignOnModeInput`<sup>Optional</sup> <a name="@cdktf/provider-azuread.ServicePrincipal.property.preferredSingleSignOnModeInput"></a>

```typescript
public readonly preferredSingleSignOnModeInput: string;
```

- *Type:* `string`

---

##### `samlSingleSignOnInput`<sup>Optional</sup> <a name="@cdktf/provider-azuread.ServicePrincipal.property.samlSingleSignOnInput"></a>

```typescript
public readonly samlSingleSignOnInput: ServicePrincipalSamlSingleSignOn[];
```

- *Type:* [`@cdktf/provider-azuread.ServicePrincipalSamlSingleSignOn`](#@cdktf/provider-azuread.ServicePrincipalSamlSingleSignOn)[]

---

##### `tagsInput`<sup>Optional</sup> <a name="@cdktf/provider-azuread.ServicePrincipal.property.tagsInput"></a>

```typescript
public readonly tagsInput: string[];
```

- *Type:* `string`[]

---

##### `timeoutsInput`<sup>Optional</sup> <a name="@cdktf/provider-azuread.ServicePrincipal.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: ServicePrincipalTimeouts;
```

- *Type:* [`@cdktf/provider-azuread.ServicePrincipalTimeouts`](#@cdktf/provider-azuread.ServicePrincipalTimeouts)

---

##### `useExistingInput`<sup>Optional</sup> <a name="@cdktf/provider-azuread.ServicePrincipal.property.useExistingInput"></a>

```typescript
public readonly useExistingInput: boolean | IResolvable;
```

- *Type:* `boolean` | [`cdktf.IResolvable`](#cdktf.IResolvable)

---

##### `accountEnabled`<sup>Required</sup> <a name="@cdktf/provider-azuread.ServicePrincipal.property.accountEnabled"></a>

```typescript
public readonly accountEnabled: boolean | IResolvable;
```

- *Type:* `boolean` | [`cdktf.IResolvable`](#cdktf.IResolvable)

---

##### `alternativeNames`<sup>Required</sup> <a name="@cdktf/provider-azuread.ServicePrincipal.property.alternativeNames"></a>

```typescript
public readonly alternativeNames: string[];
```

- *Type:* `string`[]

---

##### `applicationId`<sup>Required</sup> <a name="@cdktf/provider-azuread.ServicePrincipal.property.applicationId"></a>

```typescript
public readonly applicationId: string;
```

- *Type:* `string`

---

##### `appRoleAssignmentRequired`<sup>Required</sup> <a name="@cdktf/provider-azuread.ServicePrincipal.property.appRoleAssignmentRequired"></a>

```typescript
public readonly appRoleAssignmentRequired: boolean | IResolvable;
```

- *Type:* `boolean` | [`cdktf.IResolvable`](#cdktf.IResolvable)

---

##### `description`<sup>Required</sup> <a name="@cdktf/provider-azuread.ServicePrincipal.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* `string`

---

##### `features`<sup>Required</sup> <a name="@cdktf/provider-azuread.ServicePrincipal.property.features"></a>

```typescript
public readonly features: ServicePrincipalFeatures[];
```

- *Type:* [`@cdktf/provider-azuread.ServicePrincipalFeatures`](#@cdktf/provider-azuread.ServicePrincipalFeatures)[]

---

##### `loginUrl`<sup>Required</sup> <a name="@cdktf/provider-azuread.ServicePrincipal.property.loginUrl"></a>

```typescript
public readonly loginUrl: string;
```

- *Type:* `string`

---

##### `notes`<sup>Required</sup> <a name="@cdktf/provider-azuread.ServicePrincipal.property.notes"></a>

```typescript
public readonly notes: string;
```

- *Type:* `string`

---

##### `notificationEmailAddresses`<sup>Required</sup> <a name="@cdktf/provider-azuread.ServicePrincipal.property.notificationEmailAddresses"></a>

```typescript
public readonly notificationEmailAddresses: string[];
```

- *Type:* `string`[]

---

##### `owners`<sup>Required</sup> <a name="@cdktf/provider-azuread.ServicePrincipal.property.owners"></a>

```typescript
public readonly owners: string[];
```

- *Type:* `string`[]

---

##### `preferredSingleSignOnMode`<sup>Required</sup> <a name="@cdktf/provider-azuread.ServicePrincipal.property.preferredSingleSignOnMode"></a>

```typescript
public readonly preferredSingleSignOnMode: string;
```

- *Type:* `string`

---

##### `samlSingleSignOn`<sup>Required</sup> <a name="@cdktf/provider-azuread.ServicePrincipal.property.samlSingleSignOn"></a>

```typescript
public readonly samlSingleSignOn: ServicePrincipalSamlSingleSignOn[];
```

- *Type:* [`@cdktf/provider-azuread.ServicePrincipalSamlSingleSignOn`](#@cdktf/provider-azuread.ServicePrincipalSamlSingleSignOn)[]

---

##### `tags`<sup>Required</sup> <a name="@cdktf/provider-azuread.ServicePrincipal.property.tags"></a>

```typescript
public readonly tags: string[];
```

- *Type:* `string`[]

---

##### `timeouts`<sup>Required</sup> <a name="@cdktf/provider-azuread.ServicePrincipal.property.timeouts"></a>

```typescript
public readonly timeouts: ServicePrincipalTimeouts;
```

- *Type:* [`@cdktf/provider-azuread.ServicePrincipalTimeouts`](#@cdktf/provider-azuread.ServicePrincipalTimeouts)

---

##### `useExisting`<sup>Required</sup> <a name="@cdktf/provider-azuread.ServicePrincipal.property.useExisting"></a>

```typescript
public readonly useExisting: boolean | IResolvable;
```

- *Type:* `boolean` | [`cdktf.IResolvable`](#cdktf.IResolvable)

---

#### Constants <a name="Constants"></a>

##### `tfResourceType` <a name="@cdktf/provider-azuread.ServicePrincipal.property.tfResourceType"></a>

- *Type:* `string`

---

### ServicePrincipalCertificate <a name="@cdktf/provider-azuread.ServicePrincipalCertificate"></a>

Represents a {@link https://www.terraform.io/docs/providers/azuread/r/service_principal_certificate.html azuread_service_principal_certificate}.

#### Initializers <a name="@cdktf/provider-azuread.ServicePrincipalCertificate.Initializer"></a>

```typescript
import { ServicePrincipalCertificate } from '@cdktf/provider-azuread'

new ServicePrincipalCertificate(scope: Construct, id: string, config: ServicePrincipalCertificateConfig)
```

##### `scope`<sup>Required</sup> <a name="@cdktf/provider-azuread.ServicePrincipalCertificate.parameter.scope"></a>

- *Type:* [`constructs.Construct`](#constructs.Construct)

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="@cdktf/provider-azuread.ServicePrincipalCertificate.parameter.id"></a>

- *Type:* `string`

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="@cdktf/provider-azuread.ServicePrincipalCertificate.parameter.config"></a>

- *Type:* [`@cdktf/provider-azuread.ServicePrincipalCertificateConfig`](#@cdktf/provider-azuread.ServicePrincipalCertificateConfig)

---

#### Methods <a name="Methods"></a>

##### `resetEncoding` <a name="@cdktf/provider-azuread.ServicePrincipalCertificate.resetEncoding"></a>

```typescript
public resetEncoding()
```

##### `resetEndDate` <a name="@cdktf/provider-azuread.ServicePrincipalCertificate.resetEndDate"></a>

```typescript
public resetEndDate()
```

##### `resetEndDateRelative` <a name="@cdktf/provider-azuread.ServicePrincipalCertificate.resetEndDateRelative"></a>

```typescript
public resetEndDateRelative()
```

##### `resetKeyId` <a name="@cdktf/provider-azuread.ServicePrincipalCertificate.resetKeyId"></a>

```typescript
public resetKeyId()
```

##### `resetStartDate` <a name="@cdktf/provider-azuread.ServicePrincipalCertificate.resetStartDate"></a>

```typescript
public resetStartDate()
```

##### `resetTimeouts` <a name="@cdktf/provider-azuread.ServicePrincipalCertificate.resetTimeouts"></a>

```typescript
public resetTimeouts()
```

##### `resetType` <a name="@cdktf/provider-azuread.ServicePrincipalCertificate.resetType"></a>

```typescript
public resetType()
```


#### Properties <a name="Properties"></a>

##### `id`<sup>Required</sup> <a name="@cdktf/provider-azuread.ServicePrincipalCertificate.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* `string`

---

##### `servicePrincipalIdInput`<sup>Required</sup> <a name="@cdktf/provider-azuread.ServicePrincipalCertificate.property.servicePrincipalIdInput"></a>

```typescript
public readonly servicePrincipalIdInput: string;
```

- *Type:* `string`

---

##### `valueInput`<sup>Required</sup> <a name="@cdktf/provider-azuread.ServicePrincipalCertificate.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* `string`

---

##### `encodingInput`<sup>Optional</sup> <a name="@cdktf/provider-azuread.ServicePrincipalCertificate.property.encodingInput"></a>

```typescript
public readonly encodingInput: string;
```

- *Type:* `string`

---

##### `endDateInput`<sup>Optional</sup> <a name="@cdktf/provider-azuread.ServicePrincipalCertificate.property.endDateInput"></a>

```typescript
public readonly endDateInput: string;
```

- *Type:* `string`

---

##### `endDateRelativeInput`<sup>Optional</sup> <a name="@cdktf/provider-azuread.ServicePrincipalCertificate.property.endDateRelativeInput"></a>

```typescript
public readonly endDateRelativeInput: string;
```

- *Type:* `string`

---

##### `keyIdInput`<sup>Optional</sup> <a name="@cdktf/provider-azuread.ServicePrincipalCertificate.property.keyIdInput"></a>

```typescript
public readonly keyIdInput: string;
```

- *Type:* `string`

---

##### `startDateInput`<sup>Optional</sup> <a name="@cdktf/provider-azuread.ServicePrincipalCertificate.property.startDateInput"></a>

```typescript
public readonly startDateInput: string;
```

- *Type:* `string`

---

##### `timeoutsInput`<sup>Optional</sup> <a name="@cdktf/provider-azuread.ServicePrincipalCertificate.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: ServicePrincipalCertificateTimeouts;
```

- *Type:* [`@cdktf/provider-azuread.ServicePrincipalCertificateTimeouts`](#@cdktf/provider-azuread.ServicePrincipalCertificateTimeouts)

---

##### `typeInput`<sup>Optional</sup> <a name="@cdktf/provider-azuread.ServicePrincipalCertificate.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* `string`

---

##### `encoding`<sup>Required</sup> <a name="@cdktf/provider-azuread.ServicePrincipalCertificate.property.encoding"></a>

```typescript
public readonly encoding: string;
```

- *Type:* `string`

---

##### `endDate`<sup>Required</sup> <a name="@cdktf/provider-azuread.ServicePrincipalCertificate.property.endDate"></a>

```typescript
public readonly endDate: string;
```

- *Type:* `string`

---

##### `endDateRelative`<sup>Required</sup> <a name="@cdktf/provider-azuread.ServicePrincipalCertificate.property.endDateRelative"></a>

```typescript
public readonly endDateRelative: string;
```

- *Type:* `string`

---

##### `keyId`<sup>Required</sup> <a name="@cdktf/provider-azuread.ServicePrincipalCertificate.property.keyId"></a>

```typescript
public readonly keyId: string;
```

- *Type:* `string`

---

##### `servicePrincipalId`<sup>Required</sup> <a name="@cdktf/provider-azuread.ServicePrincipalCertificate.property.servicePrincipalId"></a>

```typescript
public readonly servicePrincipalId: string;
```

- *Type:* `string`

---

##### `startDate`<sup>Required</sup> <a name="@cdktf/provider-azuread.ServicePrincipalCertificate.property.startDate"></a>

```typescript
public readonly startDate: string;
```

- *Type:* `string`

---

##### `timeouts`<sup>Required</sup> <a name="@cdktf/provider-azuread.ServicePrincipalCertificate.property.timeouts"></a>

```typescript
public readonly timeouts: ServicePrincipalCertificateTimeouts;
```

- *Type:* [`@cdktf/provider-azuread.ServicePrincipalCertificateTimeouts`](#@cdktf/provider-azuread.ServicePrincipalCertificateTimeouts)

---

##### `type`<sup>Required</sup> <a name="@cdktf/provider-azuread.ServicePrincipalCertificate.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* `string`

---

##### `value`<sup>Required</sup> <a name="@cdktf/provider-azuread.ServicePrincipalCertificate.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* `string`

---

#### Constants <a name="Constants"></a>

##### `tfResourceType` <a name="@cdktf/provider-azuread.ServicePrincipalCertificate.property.tfResourceType"></a>

- *Type:* `string`

---

### ServicePrincipalPassword <a name="@cdktf/provider-azuread.ServicePrincipalPassword"></a>

Represents a {@link https://www.terraform.io/docs/providers/azuread/r/service_principal_password.html azuread_service_principal_password}.

#### Initializers <a name="@cdktf/provider-azuread.ServicePrincipalPassword.Initializer"></a>

```typescript
import { ServicePrincipalPassword } from '@cdktf/provider-azuread'

new ServicePrincipalPassword(scope: Construct, id: string, config: ServicePrincipalPasswordConfig)
```

##### `scope`<sup>Required</sup> <a name="@cdktf/provider-azuread.ServicePrincipalPassword.parameter.scope"></a>

- *Type:* [`constructs.Construct`](#constructs.Construct)

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="@cdktf/provider-azuread.ServicePrincipalPassword.parameter.id"></a>

- *Type:* `string`

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="@cdktf/provider-azuread.ServicePrincipalPassword.parameter.config"></a>

- *Type:* [`@cdktf/provider-azuread.ServicePrincipalPasswordConfig`](#@cdktf/provider-azuread.ServicePrincipalPasswordConfig)

---

#### Methods <a name="Methods"></a>

##### `resetRotateWhenChanged` <a name="@cdktf/provider-azuread.ServicePrincipalPassword.resetRotateWhenChanged"></a>

```typescript
public resetRotateWhenChanged()
```

##### `resetTimeouts` <a name="@cdktf/provider-azuread.ServicePrincipalPassword.resetTimeouts"></a>

```typescript
public resetTimeouts()
```


#### Properties <a name="Properties"></a>

##### `displayName`<sup>Required</sup> <a name="@cdktf/provider-azuread.ServicePrincipalPassword.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* `string`

---

##### `endDate`<sup>Required</sup> <a name="@cdktf/provider-azuread.ServicePrincipalPassword.property.endDate"></a>

```typescript
public readonly endDate: string;
```

- *Type:* `string`

---

##### `id`<sup>Required</sup> <a name="@cdktf/provider-azuread.ServicePrincipalPassword.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* `string`

---

##### `keyId`<sup>Required</sup> <a name="@cdktf/provider-azuread.ServicePrincipalPassword.property.keyId"></a>

```typescript
public readonly keyId: string;
```

- *Type:* `string`

---

##### `servicePrincipalIdInput`<sup>Required</sup> <a name="@cdktf/provider-azuread.ServicePrincipalPassword.property.servicePrincipalIdInput"></a>

```typescript
public readonly servicePrincipalIdInput: string;
```

- *Type:* `string`

---

##### `startDate`<sup>Required</sup> <a name="@cdktf/provider-azuread.ServicePrincipalPassword.property.startDate"></a>

```typescript
public readonly startDate: string;
```

- *Type:* `string`

---

##### `value`<sup>Required</sup> <a name="@cdktf/provider-azuread.ServicePrincipalPassword.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* `string`

---

##### `rotateWhenChangedInput`<sup>Optional</sup> <a name="@cdktf/provider-azuread.ServicePrincipalPassword.property.rotateWhenChangedInput"></a>

```typescript
public readonly rotateWhenChangedInput: IResolvable | {[ key: string ]: string};
```

- *Type:* [`cdktf.IResolvable`](#cdktf.IResolvable) | {[ key: string ]: `string`}

---

##### `timeoutsInput`<sup>Optional</sup> <a name="@cdktf/provider-azuread.ServicePrincipalPassword.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: ServicePrincipalPasswordTimeouts;
```

- *Type:* [`@cdktf/provider-azuread.ServicePrincipalPasswordTimeouts`](#@cdktf/provider-azuread.ServicePrincipalPasswordTimeouts)

---

##### `rotateWhenChanged`<sup>Required</sup> <a name="@cdktf/provider-azuread.ServicePrincipalPassword.property.rotateWhenChanged"></a>

```typescript
public readonly rotateWhenChanged: IResolvable | {[ key: string ]: string};
```

- *Type:* [`cdktf.IResolvable`](#cdktf.IResolvable) | {[ key: string ]: `string`}

---

##### `servicePrincipalId`<sup>Required</sup> <a name="@cdktf/provider-azuread.ServicePrincipalPassword.property.servicePrincipalId"></a>

```typescript
public readonly servicePrincipalId: string;
```

- *Type:* `string`

---

##### `timeouts`<sup>Required</sup> <a name="@cdktf/provider-azuread.ServicePrincipalPassword.property.timeouts"></a>

```typescript
public readonly timeouts: ServicePrincipalPasswordTimeouts;
```

- *Type:* [`@cdktf/provider-azuread.ServicePrincipalPasswordTimeouts`](#@cdktf/provider-azuread.ServicePrincipalPasswordTimeouts)

---

#### Constants <a name="Constants"></a>

##### `tfResourceType` <a name="@cdktf/provider-azuread.ServicePrincipalPassword.property.tfResourceType"></a>

- *Type:* `string`

---

### User <a name="@cdktf/provider-azuread.User"></a>

Represents a {@link https://www.terraform.io/docs/providers/azuread/r/user.html azuread_user}.

#### Initializers <a name="@cdktf/provider-azuread.User.Initializer"></a>

```typescript
import { User } from '@cdktf/provider-azuread'

new User(scope: Construct, id: string, config: UserConfig)
```

##### `scope`<sup>Required</sup> <a name="@cdktf/provider-azuread.User.parameter.scope"></a>

- *Type:* [`constructs.Construct`](#constructs.Construct)

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="@cdktf/provider-azuread.User.parameter.id"></a>

- *Type:* `string`

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="@cdktf/provider-azuread.User.parameter.config"></a>

- *Type:* [`@cdktf/provider-azuread.UserConfig`](#@cdktf/provider-azuread.UserConfig)

---

#### Methods <a name="Methods"></a>

##### `resetAccountEnabled` <a name="@cdktf/provider-azuread.User.resetAccountEnabled"></a>

```typescript
public resetAccountEnabled()
```

##### `resetAgeGroup` <a name="@cdktf/provider-azuread.User.resetAgeGroup"></a>

```typescript
public resetAgeGroup()
```

##### `resetBusinessPhones` <a name="@cdktf/provider-azuread.User.resetBusinessPhones"></a>

```typescript
public resetBusinessPhones()
```

##### `resetCity` <a name="@cdktf/provider-azuread.User.resetCity"></a>

```typescript
public resetCity()
```

##### `resetCompanyName` <a name="@cdktf/provider-azuread.User.resetCompanyName"></a>

```typescript
public resetCompanyName()
```

##### `resetConsentProvidedForMinor` <a name="@cdktf/provider-azuread.User.resetConsentProvidedForMinor"></a>

```typescript
public resetConsentProvidedForMinor()
```

##### `resetCountry` <a name="@cdktf/provider-azuread.User.resetCountry"></a>

```typescript
public resetCountry()
```

##### `resetDepartment` <a name="@cdktf/provider-azuread.User.resetDepartment"></a>

```typescript
public resetDepartment()
```

##### `resetDisablePasswordExpiration` <a name="@cdktf/provider-azuread.User.resetDisablePasswordExpiration"></a>

```typescript
public resetDisablePasswordExpiration()
```

##### `resetDisableStrongPassword` <a name="@cdktf/provider-azuread.User.resetDisableStrongPassword"></a>

```typescript
public resetDisableStrongPassword()
```

##### `resetEmployeeId` <a name="@cdktf/provider-azuread.User.resetEmployeeId"></a>

```typescript
public resetEmployeeId()
```

##### `resetFaxNumber` <a name="@cdktf/provider-azuread.User.resetFaxNumber"></a>

```typescript
public resetFaxNumber()
```

##### `resetForcePasswordChange` <a name="@cdktf/provider-azuread.User.resetForcePasswordChange"></a>

```typescript
public resetForcePasswordChange()
```

##### `resetGivenName` <a name="@cdktf/provider-azuread.User.resetGivenName"></a>

```typescript
public resetGivenName()
```

##### `resetJobTitle` <a name="@cdktf/provider-azuread.User.resetJobTitle"></a>

```typescript
public resetJobTitle()
```

##### `resetMail` <a name="@cdktf/provider-azuread.User.resetMail"></a>

```typescript
public resetMail()
```

##### `resetMailNickname` <a name="@cdktf/provider-azuread.User.resetMailNickname"></a>

```typescript
public resetMailNickname()
```

##### `resetMobilePhone` <a name="@cdktf/provider-azuread.User.resetMobilePhone"></a>

```typescript
public resetMobilePhone()
```

##### `resetOfficeLocation` <a name="@cdktf/provider-azuread.User.resetOfficeLocation"></a>

```typescript
public resetOfficeLocation()
```

##### `resetOnpremisesImmutableId` <a name="@cdktf/provider-azuread.User.resetOnpremisesImmutableId"></a>

```typescript
public resetOnpremisesImmutableId()
```

##### `resetOtherMails` <a name="@cdktf/provider-azuread.User.resetOtherMails"></a>

```typescript
public resetOtherMails()
```

##### `resetPassword` <a name="@cdktf/provider-azuread.User.resetPassword"></a>

```typescript
public resetPassword()
```

##### `resetPostalCode` <a name="@cdktf/provider-azuread.User.resetPostalCode"></a>

```typescript
public resetPostalCode()
```

##### `resetPreferredLanguage` <a name="@cdktf/provider-azuread.User.resetPreferredLanguage"></a>

```typescript
public resetPreferredLanguage()
```

##### `resetShowInAddressList` <a name="@cdktf/provider-azuread.User.resetShowInAddressList"></a>

```typescript
public resetShowInAddressList()
```

##### `resetState` <a name="@cdktf/provider-azuread.User.resetState"></a>

```typescript
public resetState()
```

##### `resetStreetAddress` <a name="@cdktf/provider-azuread.User.resetStreetAddress"></a>

```typescript
public resetStreetAddress()
```

##### `resetSurname` <a name="@cdktf/provider-azuread.User.resetSurname"></a>

```typescript
public resetSurname()
```

##### `resetTimeouts` <a name="@cdktf/provider-azuread.User.resetTimeouts"></a>

```typescript
public resetTimeouts()
```

##### `resetUsageLocation` <a name="@cdktf/provider-azuread.User.resetUsageLocation"></a>

```typescript
public resetUsageLocation()
```


#### Properties <a name="Properties"></a>

##### `aboutMe`<sup>Required</sup> <a name="@cdktf/provider-azuread.User.property.aboutMe"></a>

```typescript
public readonly aboutMe: string;
```

- *Type:* `string`

---

##### `creationType`<sup>Required</sup> <a name="@cdktf/provider-azuread.User.property.creationType"></a>

```typescript
public readonly creationType: string;
```

- *Type:* `string`

---

##### `displayNameInput`<sup>Required</sup> <a name="@cdktf/provider-azuread.User.property.displayNameInput"></a>

```typescript
public readonly displayNameInput: string;
```

- *Type:* `string`

---

##### `externalUserState`<sup>Required</sup> <a name="@cdktf/provider-azuread.User.property.externalUserState"></a>

```typescript
public readonly externalUserState: string;
```

- *Type:* `string`

---

##### `id`<sup>Required</sup> <a name="@cdktf/provider-azuread.User.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* `string`

---

##### `imAddresses`<sup>Required</sup> <a name="@cdktf/provider-azuread.User.property.imAddresses"></a>

```typescript
public readonly imAddresses: string[];
```

- *Type:* `string`[]

---

##### `objectId`<sup>Required</sup> <a name="@cdktf/provider-azuread.User.property.objectId"></a>

```typescript
public readonly objectId: string;
```

- *Type:* `string`

---

##### `onpremisesDistinguishedName`<sup>Required</sup> <a name="@cdktf/provider-azuread.User.property.onpremisesDistinguishedName"></a>

```typescript
public readonly onpremisesDistinguishedName: string;
```

- *Type:* `string`

---

##### `onpremisesDomainName`<sup>Required</sup> <a name="@cdktf/provider-azuread.User.property.onpremisesDomainName"></a>

```typescript
public readonly onpremisesDomainName: string;
```

- *Type:* `string`

---

##### `onpremisesSamAccountName`<sup>Required</sup> <a name="@cdktf/provider-azuread.User.property.onpremisesSamAccountName"></a>

```typescript
public readonly onpremisesSamAccountName: string;
```

- *Type:* `string`

---

##### `onpremisesSecurityIdentifier`<sup>Required</sup> <a name="@cdktf/provider-azuread.User.property.onpremisesSecurityIdentifier"></a>

```typescript
public readonly onpremisesSecurityIdentifier: string;
```

- *Type:* `string`

---

##### `onpremisesSyncEnabled`<sup>Required</sup> <a name="@cdktf/provider-azuread.User.property.onpremisesSyncEnabled"></a>

```typescript
public readonly onpremisesSyncEnabled: IResolvable;
```

- *Type:* [`cdktf.IResolvable`](#cdktf.IResolvable)

---

##### `onpremisesUserPrincipalName`<sup>Required</sup> <a name="@cdktf/provider-azuread.User.property.onpremisesUserPrincipalName"></a>

```typescript
public readonly onpremisesUserPrincipalName: string;
```

- *Type:* `string`

---

##### `proxyAddresses`<sup>Required</sup> <a name="@cdktf/provider-azuread.User.property.proxyAddresses"></a>

```typescript
public readonly proxyAddresses: string[];
```

- *Type:* `string`[]

---

##### `userPrincipalNameInput`<sup>Required</sup> <a name="@cdktf/provider-azuread.User.property.userPrincipalNameInput"></a>

```typescript
public readonly userPrincipalNameInput: string;
```

- *Type:* `string`

---

##### `userType`<sup>Required</sup> <a name="@cdktf/provider-azuread.User.property.userType"></a>

```typescript
public readonly userType: string;
```

- *Type:* `string`

---

##### `accountEnabledInput`<sup>Optional</sup> <a name="@cdktf/provider-azuread.User.property.accountEnabledInput"></a>

```typescript
public readonly accountEnabledInput: boolean | IResolvable;
```

- *Type:* `boolean` | [`cdktf.IResolvable`](#cdktf.IResolvable)

---

##### `ageGroupInput`<sup>Optional</sup> <a name="@cdktf/provider-azuread.User.property.ageGroupInput"></a>

```typescript
public readonly ageGroupInput: string;
```

- *Type:* `string`

---

##### `businessPhonesInput`<sup>Optional</sup> <a name="@cdktf/provider-azuread.User.property.businessPhonesInput"></a>

```typescript
public readonly businessPhonesInput: string[];
```

- *Type:* `string`[]

---

##### `cityInput`<sup>Optional</sup> <a name="@cdktf/provider-azuread.User.property.cityInput"></a>

```typescript
public readonly cityInput: string;
```

- *Type:* `string`

---

##### `companyNameInput`<sup>Optional</sup> <a name="@cdktf/provider-azuread.User.property.companyNameInput"></a>

```typescript
public readonly companyNameInput: string;
```

- *Type:* `string`

---

##### `consentProvidedForMinorInput`<sup>Optional</sup> <a name="@cdktf/provider-azuread.User.property.consentProvidedForMinorInput"></a>

```typescript
public readonly consentProvidedForMinorInput: string;
```

- *Type:* `string`

---

##### `countryInput`<sup>Optional</sup> <a name="@cdktf/provider-azuread.User.property.countryInput"></a>

```typescript
public readonly countryInput: string;
```

- *Type:* `string`

---

##### `departmentInput`<sup>Optional</sup> <a name="@cdktf/provider-azuread.User.property.departmentInput"></a>

```typescript
public readonly departmentInput: string;
```

- *Type:* `string`

---

##### `disablePasswordExpirationInput`<sup>Optional</sup> <a name="@cdktf/provider-azuread.User.property.disablePasswordExpirationInput"></a>

```typescript
public readonly disablePasswordExpirationInput: boolean | IResolvable;
```

- *Type:* `boolean` | [`cdktf.IResolvable`](#cdktf.IResolvable)

---

##### `disableStrongPasswordInput`<sup>Optional</sup> <a name="@cdktf/provider-azuread.User.property.disableStrongPasswordInput"></a>

```typescript
public readonly disableStrongPasswordInput: boolean | IResolvable;
```

- *Type:* `boolean` | [`cdktf.IResolvable`](#cdktf.IResolvable)

---

##### `employeeIdInput`<sup>Optional</sup> <a name="@cdktf/provider-azuread.User.property.employeeIdInput"></a>

```typescript
public readonly employeeIdInput: string;
```

- *Type:* `string`

---

##### `faxNumberInput`<sup>Optional</sup> <a name="@cdktf/provider-azuread.User.property.faxNumberInput"></a>

```typescript
public readonly faxNumberInput: string;
```

- *Type:* `string`

---

##### `forcePasswordChangeInput`<sup>Optional</sup> <a name="@cdktf/provider-azuread.User.property.forcePasswordChangeInput"></a>

```typescript
public readonly forcePasswordChangeInput: boolean | IResolvable;
```

- *Type:* `boolean` | [`cdktf.IResolvable`](#cdktf.IResolvable)

---

##### `givenNameInput`<sup>Optional</sup> <a name="@cdktf/provider-azuread.User.property.givenNameInput"></a>

```typescript
public readonly givenNameInput: string;
```

- *Type:* `string`

---

##### `jobTitleInput`<sup>Optional</sup> <a name="@cdktf/provider-azuread.User.property.jobTitleInput"></a>

```typescript
public readonly jobTitleInput: string;
```

- *Type:* `string`

---

##### `mailInput`<sup>Optional</sup> <a name="@cdktf/provider-azuread.User.property.mailInput"></a>

```typescript
public readonly mailInput: string;
```

- *Type:* `string`

---

##### `mailNicknameInput`<sup>Optional</sup> <a name="@cdktf/provider-azuread.User.property.mailNicknameInput"></a>

```typescript
public readonly mailNicknameInput: string;
```

- *Type:* `string`

---

##### `mobilePhoneInput`<sup>Optional</sup> <a name="@cdktf/provider-azuread.User.property.mobilePhoneInput"></a>

```typescript
public readonly mobilePhoneInput: string;
```

- *Type:* `string`

---

##### `officeLocationInput`<sup>Optional</sup> <a name="@cdktf/provider-azuread.User.property.officeLocationInput"></a>

```typescript
public readonly officeLocationInput: string;
```

- *Type:* `string`

---

##### `onpremisesImmutableIdInput`<sup>Optional</sup> <a name="@cdktf/provider-azuread.User.property.onpremisesImmutableIdInput"></a>

```typescript
public readonly onpremisesImmutableIdInput: string;
```

- *Type:* `string`

---

##### `otherMailsInput`<sup>Optional</sup> <a name="@cdktf/provider-azuread.User.property.otherMailsInput"></a>

```typescript
public readonly otherMailsInput: string[];
```

- *Type:* `string`[]

---

##### `passwordInput`<sup>Optional</sup> <a name="@cdktf/provider-azuread.User.property.passwordInput"></a>

```typescript
public readonly passwordInput: string;
```

- *Type:* `string`

---

##### `postalCodeInput`<sup>Optional</sup> <a name="@cdktf/provider-azuread.User.property.postalCodeInput"></a>

```typescript
public readonly postalCodeInput: string;
```

- *Type:* `string`

---

##### `preferredLanguageInput`<sup>Optional</sup> <a name="@cdktf/provider-azuread.User.property.preferredLanguageInput"></a>

```typescript
public readonly preferredLanguageInput: string;
```

- *Type:* `string`

---

##### `showInAddressListInput`<sup>Optional</sup> <a name="@cdktf/provider-azuread.User.property.showInAddressListInput"></a>

```typescript
public readonly showInAddressListInput: boolean | IResolvable;
```

- *Type:* `boolean` | [`cdktf.IResolvable`](#cdktf.IResolvable)

---

##### `stateInput`<sup>Optional</sup> <a name="@cdktf/provider-azuread.User.property.stateInput"></a>

```typescript
public readonly stateInput: string;
```

- *Type:* `string`

---

##### `streetAddressInput`<sup>Optional</sup> <a name="@cdktf/provider-azuread.User.property.streetAddressInput"></a>

```typescript
public readonly streetAddressInput: string;
```

- *Type:* `string`

---

##### `surnameInput`<sup>Optional</sup> <a name="@cdktf/provider-azuread.User.property.surnameInput"></a>

```typescript
public readonly surnameInput: string;
```

- *Type:* `string`

---

##### `timeoutsInput`<sup>Optional</sup> <a name="@cdktf/provider-azuread.User.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: UserTimeouts;
```

- *Type:* [`@cdktf/provider-azuread.UserTimeouts`](#@cdktf/provider-azuread.UserTimeouts)

---

##### `usageLocationInput`<sup>Optional</sup> <a name="@cdktf/provider-azuread.User.property.usageLocationInput"></a>

```typescript
public readonly usageLocationInput: string;
```

- *Type:* `string`

---

##### `accountEnabled`<sup>Required</sup> <a name="@cdktf/provider-azuread.User.property.accountEnabled"></a>

```typescript
public readonly accountEnabled: boolean | IResolvable;
```

- *Type:* `boolean` | [`cdktf.IResolvable`](#cdktf.IResolvable)

---

##### `ageGroup`<sup>Required</sup> <a name="@cdktf/provider-azuread.User.property.ageGroup"></a>

```typescript
public readonly ageGroup: string;
```

- *Type:* `string`

---

##### `businessPhones`<sup>Required</sup> <a name="@cdktf/provider-azuread.User.property.businessPhones"></a>

```typescript
public readonly businessPhones: string[];
```

- *Type:* `string`[]

---

##### `city`<sup>Required</sup> <a name="@cdktf/provider-azuread.User.property.city"></a>

```typescript
public readonly city: string;
```

- *Type:* `string`

---

##### `companyName`<sup>Required</sup> <a name="@cdktf/provider-azuread.User.property.companyName"></a>

```typescript
public readonly companyName: string;
```

- *Type:* `string`

---

##### `consentProvidedForMinor`<sup>Required</sup> <a name="@cdktf/provider-azuread.User.property.consentProvidedForMinor"></a>

```typescript
public readonly consentProvidedForMinor: string;
```

- *Type:* `string`

---

##### `country`<sup>Required</sup> <a name="@cdktf/provider-azuread.User.property.country"></a>

```typescript
public readonly country: string;
```

- *Type:* `string`

---

##### `department`<sup>Required</sup> <a name="@cdktf/provider-azuread.User.property.department"></a>

```typescript
public readonly department: string;
```

- *Type:* `string`

---

##### `disablePasswordExpiration`<sup>Required</sup> <a name="@cdktf/provider-azuread.User.property.disablePasswordExpiration"></a>

```typescript
public readonly disablePasswordExpiration: boolean | IResolvable;
```

- *Type:* `boolean` | [`cdktf.IResolvable`](#cdktf.IResolvable)

---

##### `disableStrongPassword`<sup>Required</sup> <a name="@cdktf/provider-azuread.User.property.disableStrongPassword"></a>

```typescript
public readonly disableStrongPassword: boolean | IResolvable;
```

- *Type:* `boolean` | [`cdktf.IResolvable`](#cdktf.IResolvable)

---

##### `displayName`<sup>Required</sup> <a name="@cdktf/provider-azuread.User.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* `string`

---

##### `employeeId`<sup>Required</sup> <a name="@cdktf/provider-azuread.User.property.employeeId"></a>

```typescript
public readonly employeeId: string;
```

- *Type:* `string`

---

##### `faxNumber`<sup>Required</sup> <a name="@cdktf/provider-azuread.User.property.faxNumber"></a>

```typescript
public readonly faxNumber: string;
```

- *Type:* `string`

---

##### `forcePasswordChange`<sup>Required</sup> <a name="@cdktf/provider-azuread.User.property.forcePasswordChange"></a>

```typescript
public readonly forcePasswordChange: boolean | IResolvable;
```

- *Type:* `boolean` | [`cdktf.IResolvable`](#cdktf.IResolvable)

---

##### `givenName`<sup>Required</sup> <a name="@cdktf/provider-azuread.User.property.givenName"></a>

```typescript
public readonly givenName: string;
```

- *Type:* `string`

---

##### `jobTitle`<sup>Required</sup> <a name="@cdktf/provider-azuread.User.property.jobTitle"></a>

```typescript
public readonly jobTitle: string;
```

- *Type:* `string`

---

##### `mail`<sup>Required</sup> <a name="@cdktf/provider-azuread.User.property.mail"></a>

```typescript
public readonly mail: string;
```

- *Type:* `string`

---

##### `mailNickname`<sup>Required</sup> <a name="@cdktf/provider-azuread.User.property.mailNickname"></a>

```typescript
public readonly mailNickname: string;
```

- *Type:* `string`

---

##### `mobilePhone`<sup>Required</sup> <a name="@cdktf/provider-azuread.User.property.mobilePhone"></a>

```typescript
public readonly mobilePhone: string;
```

- *Type:* `string`

---

##### `officeLocation`<sup>Required</sup> <a name="@cdktf/provider-azuread.User.property.officeLocation"></a>

```typescript
public readonly officeLocation: string;
```

- *Type:* `string`

---

##### `onpremisesImmutableId`<sup>Required</sup> <a name="@cdktf/provider-azuread.User.property.onpremisesImmutableId"></a>

```typescript
public readonly onpremisesImmutableId: string;
```

- *Type:* `string`

---

##### `otherMails`<sup>Required</sup> <a name="@cdktf/provider-azuread.User.property.otherMails"></a>

```typescript
public readonly otherMails: string[];
```

- *Type:* `string`[]

---

##### `password`<sup>Required</sup> <a name="@cdktf/provider-azuread.User.property.password"></a>

```typescript
public readonly password: string;
```

- *Type:* `string`

---

##### `postalCode`<sup>Required</sup> <a name="@cdktf/provider-azuread.User.property.postalCode"></a>

```typescript
public readonly postalCode: string;
```

- *Type:* `string`

---

##### `preferredLanguage`<sup>Required</sup> <a name="@cdktf/provider-azuread.User.property.preferredLanguage"></a>

```typescript
public readonly preferredLanguage: string;
```

- *Type:* `string`

---

##### `showInAddressList`<sup>Required</sup> <a name="@cdktf/provider-azuread.User.property.showInAddressList"></a>

```typescript
public readonly showInAddressList: boolean | IResolvable;
```

- *Type:* `boolean` | [`cdktf.IResolvable`](#cdktf.IResolvable)

---

##### `state`<sup>Required</sup> <a name="@cdktf/provider-azuread.User.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* `string`

---

##### `streetAddress`<sup>Required</sup> <a name="@cdktf/provider-azuread.User.property.streetAddress"></a>

```typescript
public readonly streetAddress: string;
```

- *Type:* `string`

---

##### `surname`<sup>Required</sup> <a name="@cdktf/provider-azuread.User.property.surname"></a>

```typescript
public readonly surname: string;
```

- *Type:* `string`

---

##### `timeouts`<sup>Required</sup> <a name="@cdktf/provider-azuread.User.property.timeouts"></a>

```typescript
public readonly timeouts: UserTimeouts;
```

- *Type:* [`@cdktf/provider-azuread.UserTimeouts`](#@cdktf/provider-azuread.UserTimeouts)

---

##### `usageLocation`<sup>Required</sup> <a name="@cdktf/provider-azuread.User.property.usageLocation"></a>

```typescript
public readonly usageLocation: string;
```

- *Type:* `string`

---

##### `userPrincipalName`<sup>Required</sup> <a name="@cdktf/provider-azuread.User.property.userPrincipalName"></a>

```typescript
public readonly userPrincipalName: string;
```

- *Type:* `string`

---

#### Constants <a name="Constants"></a>

##### `tfResourceType` <a name="@cdktf/provider-azuread.User.property.tfResourceType"></a>

- *Type:* `string`

---

## Structs <a name="Structs"></a>

### ApplicationApi <a name="@cdktf/provider-azuread.ApplicationApi"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ApplicationApi } from '@cdktf/provider-azuread'

const applicationApi: ApplicationApi = { ... }
```

##### `knownClientApplications`<sup>Optional</sup> <a name="@cdktf/provider-azuread.ApplicationApi.property.knownClientApplications"></a>

```typescript
public readonly knownClientApplications: string[];
```

- *Type:* `string`[]

Used for bundling consent if you have a solution that contains two parts: a client app and a custom web API app.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/application.html#known_client_applications Application#known_client_applications}

---

##### `mappedClaimsEnabled`<sup>Optional</sup> <a name="@cdktf/provider-azuread.ApplicationApi.property.mappedClaimsEnabled"></a>

```typescript
public readonly mappedClaimsEnabled: boolean | IResolvable;
```

- *Type:* `boolean` | [`cdktf.IResolvable`](#cdktf.IResolvable)

Allows an application to use claims mapping without specifying a custom signing key.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/application.html#mapped_claims_enabled Application#mapped_claims_enabled}

---

##### `oauth2PermissionScope`<sup>Optional</sup> <a name="@cdktf/provider-azuread.ApplicationApi.property.oauth2PermissionScope"></a>

```typescript
public readonly oauth2PermissionScope: ApplicationApiOauth2PermissionScope[];
```

- *Type:* [`@cdktf/provider-azuread.ApplicationApiOauth2PermissionScope`](#@cdktf/provider-azuread.ApplicationApiOauth2PermissionScope)[]

oauth2_permission_scope block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/application.html#oauth2_permission_scope Application#oauth2_permission_scope}

---

##### `requestedAccessTokenVersion`<sup>Optional</sup> <a name="@cdktf/provider-azuread.ApplicationApi.property.requestedAccessTokenVersion"></a>

```typescript
public readonly requestedAccessTokenVersion: number;
```

- *Type:* `number`

The access token version expected by this resource.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/application.html#requested_access_token_version Application#requested_access_token_version}

---

### ApplicationApiOauth2PermissionScope <a name="@cdktf/provider-azuread.ApplicationApiOauth2PermissionScope"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ApplicationApiOauth2PermissionScope } from '@cdktf/provider-azuread'

const applicationApiOauth2PermissionScope: ApplicationApiOauth2PermissionScope = { ... }
```

##### `id`<sup>Required</sup> <a name="@cdktf/provider-azuread.ApplicationApiOauth2PermissionScope.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* `string`

The unique identifier of the delegated permission.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/application.html#id Application#id}

---

##### `adminConsentDescription`<sup>Optional</sup> <a name="@cdktf/provider-azuread.ApplicationApiOauth2PermissionScope.property.adminConsentDescription"></a>

```typescript
public readonly adminConsentDescription: string;
```

- *Type:* `string`

Delegated permission description that appears in all tenant-wide admin consent experiences, intended to be read by an administrator granting the permission on behalf of all users.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/application.html#admin_consent_description Application#admin_consent_description}

---

##### `adminConsentDisplayName`<sup>Optional</sup> <a name="@cdktf/provider-azuread.ApplicationApiOauth2PermissionScope.property.adminConsentDisplayName"></a>

```typescript
public readonly adminConsentDisplayName: string;
```

- *Type:* `string`

Display name for the delegated permission, intended to be read by an administrator granting the permission on behalf of all users.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/application.html#admin_consent_display_name Application#admin_consent_display_name}

---

##### `enabled`<sup>Optional</sup> <a name="@cdktf/provider-azuread.ApplicationApiOauth2PermissionScope.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* `boolean` | [`cdktf.IResolvable`](#cdktf.IResolvable)

Determines if the permission scope is enabled.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/application.html#enabled Application#enabled}

---

##### `type`<sup>Optional</sup> <a name="@cdktf/provider-azuread.ApplicationApiOauth2PermissionScope.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* `string`

Whether this delegated permission should be considered safe for non-admin users to consent to on behalf of themselves, or whether an administrator should be required for consent to the permissions.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/application.html#type Application#type}

---

##### `userConsentDescription`<sup>Optional</sup> <a name="@cdktf/provider-azuread.ApplicationApiOauth2PermissionScope.property.userConsentDescription"></a>

```typescript
public readonly userConsentDescription: string;
```

- *Type:* `string`

Delegated permission description that appears in the end user consent experience, intended to be read by a user consenting on their own behalf.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/application.html#user_consent_description Application#user_consent_description}

---

##### `userConsentDisplayName`<sup>Optional</sup> <a name="@cdktf/provider-azuread.ApplicationApiOauth2PermissionScope.property.userConsentDisplayName"></a>

```typescript
public readonly userConsentDisplayName: string;
```

- *Type:* `string`

Display name for the delegated permission that appears in the end user consent experience.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/application.html#user_consent_display_name Application#user_consent_display_name}

---

##### `value`<sup>Optional</sup> <a name="@cdktf/provider-azuread.ApplicationApiOauth2PermissionScope.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* `string`

The value that is used for the `scp` claim in OAuth 2.0 access tokens.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/application.html#value Application#value}

---

### ApplicationAppRole <a name="@cdktf/provider-azuread.ApplicationAppRole"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ApplicationAppRole } from '@cdktf/provider-azuread'

const applicationAppRole: ApplicationAppRole = { ... }
```

##### `allowedMemberTypes`<sup>Required</sup> <a name="@cdktf/provider-azuread.ApplicationAppRole.property.allowedMemberTypes"></a>

```typescript
public readonly allowedMemberTypes: string[];
```

- *Type:* `string`[]

Specifies whether this app role definition can be assigned to users and groups by setting to `User`, or to other applications (that are accessing this application in a standalone scenario) by setting to `Application`, or to both.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/application.html#allowed_member_types Application#allowed_member_types}

---

##### `description`<sup>Required</sup> <a name="@cdktf/provider-azuread.ApplicationAppRole.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* `string`

Description of the app role that appears when the role is being assigned and, if the role functions as an application permissions, during the consent experiences.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/application.html#description Application#description}

---

##### `displayName`<sup>Required</sup> <a name="@cdktf/provider-azuread.ApplicationAppRole.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* `string`

Display name for the app role that appears during app role assignment and in consent experiences.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/application.html#display_name Application#display_name}

---

##### `id`<sup>Required</sup> <a name="@cdktf/provider-azuread.ApplicationAppRole.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* `string`

The unique identifier of the app role.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/application.html#id Application#id}

---

##### `enabled`<sup>Optional</sup> <a name="@cdktf/provider-azuread.ApplicationAppRole.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* `boolean` | [`cdktf.IResolvable`](#cdktf.IResolvable)

Determines if the app role is enabled.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/application.html#enabled Application#enabled}

---

##### `value`<sup>Optional</sup> <a name="@cdktf/provider-azuread.ApplicationAppRole.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* `string`

The value that is used for the `roles` claim in ID tokens and OAuth 2.0 access tokens that are authenticating an assigned service or user principal.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/application.html#value Application#value}

---

### ApplicationCertificateConfig <a name="@cdktf/provider-azuread.ApplicationCertificateConfig"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ApplicationCertificateConfig } from '@cdktf/provider-azuread'

const applicationCertificateConfig: ApplicationCertificateConfig = { ... }
```

##### `count`<sup>Optional</sup> <a name="@cdktf/provider-azuread.ApplicationCertificateConfig.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* `number`

---

##### `dependsOn`<sup>Optional</sup> <a name="@cdktf/provider-azuread.ApplicationCertificateConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* [`cdktf.ITerraformDependable`](#cdktf.ITerraformDependable)[]

---

##### `lifecycle`<sup>Optional</sup> <a name="@cdktf/provider-azuread.ApplicationCertificateConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* [`cdktf.TerraformResourceLifecycle`](#cdktf.TerraformResourceLifecycle)

---

##### `provider`<sup>Optional</sup> <a name="@cdktf/provider-azuread.ApplicationCertificateConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* [`cdktf.TerraformProvider`](#cdktf.TerraformProvider)

---

##### `applicationObjectId`<sup>Required</sup> <a name="@cdktf/provider-azuread.ApplicationCertificateConfig.property.applicationObjectId"></a>

```typescript
public readonly applicationObjectId: string;
```

- *Type:* `string`

The object ID of the application for which this certificate should be created.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/application_certificate.html#application_object_id ApplicationCertificate#application_object_id}

---

##### `value`<sup>Required</sup> <a name="@cdktf/provider-azuread.ApplicationCertificateConfig.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* `string`

The certificate data, which can be PEM encoded, base64 encoded DER or hexadecimal encoded DER.

See also the `encoding` argumen

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/application_certificate.html#value ApplicationCertificate#value}

---

##### `encoding`<sup>Optional</sup> <a name="@cdktf/provider-azuread.ApplicationCertificateConfig.property.encoding"></a>

```typescript
public readonly encoding: string;
```

- *Type:* `string`

Specifies the encoding used for the supplied certificate data.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/application_certificate.html#encoding ApplicationCertificate#encoding}

---

##### `endDate`<sup>Optional</sup> <a name="@cdktf/provider-azuread.ApplicationCertificateConfig.property.endDate"></a>

```typescript
public readonly endDate: string;
```

- *Type:* `string`

The end date until which the certificate is valid, formatted as an RFC3339 date string (e.g. `2018-01-01T01:02:03Z`). If omitted, the API will decide a suitable expiry date, which is typically around 2 years from the start date.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/application_certificate.html#end_date ApplicationCertificate#end_date}

---

##### `endDateRelative`<sup>Optional</sup> <a name="@cdktf/provider-azuread.ApplicationCertificateConfig.property.endDateRelative"></a>

```typescript
public readonly endDateRelative: string;
```

- *Type:* `string`

A relative duration for which the certificate is valid until, for example `240h` (10 days) or `2400h30m`.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/application_certificate.html#end_date_relative ApplicationCertificate#end_date_relative}

---

##### `keyId`<sup>Optional</sup> <a name="@cdktf/provider-azuread.ApplicationCertificateConfig.property.keyId"></a>

```typescript
public readonly keyId: string;
```

- *Type:* `string`

A UUID used to uniquely identify this certificate. If omitted, a random UUID will be automatically generated.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/application_certificate.html#key_id ApplicationCertificate#key_id}

---

##### `startDate`<sup>Optional</sup> <a name="@cdktf/provider-azuread.ApplicationCertificateConfig.property.startDate"></a>

```typescript
public readonly startDate: string;
```

- *Type:* `string`

The start date from which the certificate is valid, formatted as an RFC3339 date string (e.g. `2018-01-01T01:02:03Z`). If this isn't specified, the current date and time are use.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/application_certificate.html#start_date ApplicationCertificate#start_date}

---

##### `timeouts`<sup>Optional</sup> <a name="@cdktf/provider-azuread.ApplicationCertificateConfig.property.timeouts"></a>

```typescript
public readonly timeouts: ApplicationCertificateTimeouts;
```

- *Type:* [`@cdktf/provider-azuread.ApplicationCertificateTimeouts`](#@cdktf/provider-azuread.ApplicationCertificateTimeouts)

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/application_certificate.html#timeouts ApplicationCertificate#timeouts}

---

##### `type`<sup>Optional</sup> <a name="@cdktf/provider-azuread.ApplicationCertificateConfig.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* `string`

The type of key/certificate.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/application_certificate.html#type ApplicationCertificate#type}

---

### ApplicationCertificateTimeouts <a name="@cdktf/provider-azuread.ApplicationCertificateTimeouts"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ApplicationCertificateTimeouts } from '@cdktf/provider-azuread'

const applicationCertificateTimeouts: ApplicationCertificateTimeouts = { ... }
```

##### `create`<sup>Optional</sup> <a name="@cdktf/provider-azuread.ApplicationCertificateTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* `string`

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/application_certificate.html#create ApplicationCertificate#create}.

---

##### `delete`<sup>Optional</sup> <a name="@cdktf/provider-azuread.ApplicationCertificateTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* `string`

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/application_certificate.html#delete ApplicationCertificate#delete}.

---

##### `read`<sup>Optional</sup> <a name="@cdktf/provider-azuread.ApplicationCertificateTimeouts.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* `string`

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/application_certificate.html#read ApplicationCertificate#read}.

---

##### `update`<sup>Optional</sup> <a name="@cdktf/provider-azuread.ApplicationCertificateTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* `string`

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/application_certificate.html#update ApplicationCertificate#update}.

---

### ApplicationConfig <a name="@cdktf/provider-azuread.ApplicationConfig"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ApplicationConfig } from '@cdktf/provider-azuread'

const applicationConfig: ApplicationConfig = { ... }
```

##### `count`<sup>Optional</sup> <a name="@cdktf/provider-azuread.ApplicationConfig.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* `number`

---

##### `dependsOn`<sup>Optional</sup> <a name="@cdktf/provider-azuread.ApplicationConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* [`cdktf.ITerraformDependable`](#cdktf.ITerraformDependable)[]

---

##### `lifecycle`<sup>Optional</sup> <a name="@cdktf/provider-azuread.ApplicationConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* [`cdktf.TerraformResourceLifecycle`](#cdktf.TerraformResourceLifecycle)

---

##### `provider`<sup>Optional</sup> <a name="@cdktf/provider-azuread.ApplicationConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* [`cdktf.TerraformProvider`](#cdktf.TerraformProvider)

---

##### `displayName`<sup>Required</sup> <a name="@cdktf/provider-azuread.ApplicationConfig.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* `string`

The display name for the application.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/application.html#display_name Application#display_name}

---

##### `api`<sup>Optional</sup> <a name="@cdktf/provider-azuread.ApplicationConfig.property.api"></a>

```typescript
public readonly api: ApplicationApi[];
```

- *Type:* [`@cdktf/provider-azuread.ApplicationApi`](#@cdktf/provider-azuread.ApplicationApi)[]

api block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/application.html#api Application#api}

---

##### `appRole`<sup>Optional</sup> <a name="@cdktf/provider-azuread.ApplicationConfig.property.appRole"></a>

```typescript
public readonly appRole: ApplicationAppRole[];
```

- *Type:* [`@cdktf/provider-azuread.ApplicationAppRole`](#@cdktf/provider-azuread.ApplicationAppRole)[]

app_role block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/application.html#app_role Application#app_role}

---

##### `deviceOnlyAuthEnabled`<sup>Optional</sup> <a name="@cdktf/provider-azuread.ApplicationConfig.property.deviceOnlyAuthEnabled"></a>

```typescript
public readonly deviceOnlyAuthEnabled: boolean | IResolvable;
```

- *Type:* `boolean` | [`cdktf.IResolvable`](#cdktf.IResolvable)

Specifies whether this application supports device authentication without a user.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/application.html#device_only_auth_enabled Application#device_only_auth_enabled}

---

##### `fallbackPublicClientEnabled`<sup>Optional</sup> <a name="@cdktf/provider-azuread.ApplicationConfig.property.fallbackPublicClientEnabled"></a>

```typescript
public readonly fallbackPublicClientEnabled: boolean | IResolvable;
```

- *Type:* `boolean` | [`cdktf.IResolvable`](#cdktf.IResolvable)

Specifies whether the application is a public client.

Appropriate for apps using token grant flows that don't use a redirect URI

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/application.html#fallback_public_client_enabled Application#fallback_public_client_enabled}

---

##### `groupMembershipClaims`<sup>Optional</sup> <a name="@cdktf/provider-azuread.ApplicationConfig.property.groupMembershipClaims"></a>

```typescript
public readonly groupMembershipClaims: string[];
```

- *Type:* `string`[]

Configures the `groups` claim issued in a user or OAuth 2.0 access token that the app expects.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/application.html#group_membership_claims Application#group_membership_claims}

---

##### `identifierUris`<sup>Optional</sup> <a name="@cdktf/provider-azuread.ApplicationConfig.property.identifierUris"></a>

```typescript
public readonly identifierUris: string[];
```

- *Type:* `string`[]

The user-defined URI(s) that uniquely identify an application within its Azure AD tenant, or within a verified custom domain if the application is multi-tenant.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/application.html#identifier_uris Application#identifier_uris}

---

##### `logoImage`<sup>Optional</sup> <a name="@cdktf/provider-azuread.ApplicationConfig.property.logoImage"></a>

```typescript
public readonly logoImage: string;
```

- *Type:* `string`

Base64 encoded logo image in gif, png or jpeg format.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/application.html#logo_image Application#logo_image}

---

##### `marketingUrl`<sup>Optional</sup> <a name="@cdktf/provider-azuread.ApplicationConfig.property.marketingUrl"></a>

```typescript
public readonly marketingUrl: string;
```

- *Type:* `string`

URL of the application's marketing page.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/application.html#marketing_url Application#marketing_url}

---

##### `oauth2PostResponseRequired`<sup>Optional</sup> <a name="@cdktf/provider-azuread.ApplicationConfig.property.oauth2PostResponseRequired"></a>

```typescript
public readonly oauth2PostResponseRequired: boolean | IResolvable;
```

- *Type:* `boolean` | [`cdktf.IResolvable`](#cdktf.IResolvable)

Specifies whether, as part of OAuth 2.0 token requests, Azure AD allows POST requests, as opposed to GET requests.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/application.html#oauth2_post_response_required Application#oauth2_post_response_required}

---

##### `optionalClaims`<sup>Optional</sup> <a name="@cdktf/provider-azuread.ApplicationConfig.property.optionalClaims"></a>

```typescript
public readonly optionalClaims: ApplicationOptionalClaims[];
```

- *Type:* [`@cdktf/provider-azuread.ApplicationOptionalClaims`](#@cdktf/provider-azuread.ApplicationOptionalClaims)[]

optional_claims block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/application.html#optional_claims Application#optional_claims}

---

##### `owners`<sup>Optional</sup> <a name="@cdktf/provider-azuread.ApplicationConfig.property.owners"></a>

```typescript
public readonly owners: string[];
```

- *Type:* `string`[]

A list of object IDs of principals that will be granted ownership of the application.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/application.html#owners Application#owners}

---

##### `preventDuplicateNames`<sup>Optional</sup> <a name="@cdktf/provider-azuread.ApplicationConfig.property.preventDuplicateNames"></a>

```typescript
public readonly preventDuplicateNames: boolean | IResolvable;
```

- *Type:* `boolean` | [`cdktf.IResolvable`](#cdktf.IResolvable)

If `true`, will return an error if an existing application is found with the same name.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/application.html#prevent_duplicate_names Application#prevent_duplicate_names}

---

##### `privacyStatementUrl`<sup>Optional</sup> <a name="@cdktf/provider-azuread.ApplicationConfig.property.privacyStatementUrl"></a>

```typescript
public readonly privacyStatementUrl: string;
```

- *Type:* `string`

URL of the application's privacy statement.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/application.html#privacy_statement_url Application#privacy_statement_url}

---

##### `publicClient`<sup>Optional</sup> <a name="@cdktf/provider-azuread.ApplicationConfig.property.publicClient"></a>

```typescript
public readonly publicClient: ApplicationPublicClient[];
```

- *Type:* [`@cdktf/provider-azuread.ApplicationPublicClient`](#@cdktf/provider-azuread.ApplicationPublicClient)[]

public_client block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/application.html#public_client Application#public_client}

---

##### `requiredResourceAccess`<sup>Optional</sup> <a name="@cdktf/provider-azuread.ApplicationConfig.property.requiredResourceAccess"></a>

```typescript
public readonly requiredResourceAccess: ApplicationRequiredResourceAccess[];
```

- *Type:* [`@cdktf/provider-azuread.ApplicationRequiredResourceAccess`](#@cdktf/provider-azuread.ApplicationRequiredResourceAccess)[]

required_resource_access block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/application.html#required_resource_access Application#required_resource_access}

---

##### `signInAudience`<sup>Optional</sup> <a name="@cdktf/provider-azuread.ApplicationConfig.property.signInAudience"></a>

```typescript
public readonly signInAudience: string;
```

- *Type:* `string`

The Microsoft account types that are supported for the current application.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/application.html#sign_in_audience Application#sign_in_audience}

---

##### `singlePageApplication`<sup>Optional</sup> <a name="@cdktf/provider-azuread.ApplicationConfig.property.singlePageApplication"></a>

```typescript
public readonly singlePageApplication: ApplicationSinglePageApplication[];
```

- *Type:* [`@cdktf/provider-azuread.ApplicationSinglePageApplication`](#@cdktf/provider-azuread.ApplicationSinglePageApplication)[]

single_page_application block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/application.html#single_page_application Application#single_page_application}

---

##### `supportUrl`<sup>Optional</sup> <a name="@cdktf/provider-azuread.ApplicationConfig.property.supportUrl"></a>

```typescript
public readonly supportUrl: string;
```

- *Type:* `string`

URL of the application's support page.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/application.html#support_url Application#support_url}

---

##### `templateId`<sup>Optional</sup> <a name="@cdktf/provider-azuread.ApplicationConfig.property.templateId"></a>

```typescript
public readonly templateId: string;
```

- *Type:* `string`

Unique ID of the application template from which this application is created.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/application.html#template_id Application#template_id}

---

##### `termsOfServiceUrl`<sup>Optional</sup> <a name="@cdktf/provider-azuread.ApplicationConfig.property.termsOfServiceUrl"></a>

```typescript
public readonly termsOfServiceUrl: string;
```

- *Type:* `string`

URL of the application's terms of service statement.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/application.html#terms_of_service_url Application#terms_of_service_url}

---

##### `timeouts`<sup>Optional</sup> <a name="@cdktf/provider-azuread.ApplicationConfig.property.timeouts"></a>

```typescript
public readonly timeouts: ApplicationTimeouts;
```

- *Type:* [`@cdktf/provider-azuread.ApplicationTimeouts`](#@cdktf/provider-azuread.ApplicationTimeouts)

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/application.html#timeouts Application#timeouts}

---

##### `web`<sup>Optional</sup> <a name="@cdktf/provider-azuread.ApplicationConfig.property.web"></a>

```typescript
public readonly web: ApplicationWeb[];
```

- *Type:* [`@cdktf/provider-azuread.ApplicationWeb`](#@cdktf/provider-azuread.ApplicationWeb)[]

web block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/application.html#web Application#web}

---

### ApplicationOptionalClaims <a name="@cdktf/provider-azuread.ApplicationOptionalClaims"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ApplicationOptionalClaims } from '@cdktf/provider-azuread'

const applicationOptionalClaims: ApplicationOptionalClaims = { ... }
```

##### `accessToken`<sup>Optional</sup> <a name="@cdktf/provider-azuread.ApplicationOptionalClaims.property.accessToken"></a>

```typescript
public readonly accessToken: ApplicationOptionalClaimsAccessToken[];
```

- *Type:* [`@cdktf/provider-azuread.ApplicationOptionalClaimsAccessToken`](#@cdktf/provider-azuread.ApplicationOptionalClaimsAccessToken)[]

access_token block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/application.html#access_token Application#access_token}

---

##### `idToken`<sup>Optional</sup> <a name="@cdktf/provider-azuread.ApplicationOptionalClaims.property.idToken"></a>

```typescript
public readonly idToken: ApplicationOptionalClaimsIdToken[];
```

- *Type:* [`@cdktf/provider-azuread.ApplicationOptionalClaimsIdToken`](#@cdktf/provider-azuread.ApplicationOptionalClaimsIdToken)[]

id_token block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/application.html#id_token Application#id_token}

---

##### `saml2Token`<sup>Optional</sup> <a name="@cdktf/provider-azuread.ApplicationOptionalClaims.property.saml2Token"></a>

```typescript
public readonly saml2Token: ApplicationOptionalClaimsSaml2Token[];
```

- *Type:* [`@cdktf/provider-azuread.ApplicationOptionalClaimsSaml2Token`](#@cdktf/provider-azuread.ApplicationOptionalClaimsSaml2Token)[]

saml2_token block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/application.html#saml2_token Application#saml2_token}

---

### ApplicationOptionalClaimsAccessToken <a name="@cdktf/provider-azuread.ApplicationOptionalClaimsAccessToken"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ApplicationOptionalClaimsAccessToken } from '@cdktf/provider-azuread'

const applicationOptionalClaimsAccessToken: ApplicationOptionalClaimsAccessToken = { ... }
```

##### `name`<sup>Required</sup> <a name="@cdktf/provider-azuread.ApplicationOptionalClaimsAccessToken.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* `string`

The name of the optional claim.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/application.html#name Application#name}

---

##### `additionalProperties`<sup>Optional</sup> <a name="@cdktf/provider-azuread.ApplicationOptionalClaimsAccessToken.property.additionalProperties"></a>

```typescript
public readonly additionalProperties: string[];
```

- *Type:* `string`[]

List of additional properties of the claim.

If a property exists in this list, it modifies the behaviour of the optional claim

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/application.html#additional_properties Application#additional_properties}

---

##### `essential`<sup>Optional</sup> <a name="@cdktf/provider-azuread.ApplicationOptionalClaimsAccessToken.property.essential"></a>

```typescript
public readonly essential: boolean | IResolvable;
```

- *Type:* `boolean` | [`cdktf.IResolvable`](#cdktf.IResolvable)

Whether the claim specified by the client is necessary to ensure a smooth authorization experience.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/application.html#essential Application#essential}

---

##### `source`<sup>Optional</sup> <a name="@cdktf/provider-azuread.ApplicationOptionalClaimsAccessToken.property.source"></a>

```typescript
public readonly source: string;
```

- *Type:* `string`

The source of the claim.

If `source` is absent, the claim is a predefined optional claim. If `source` is `user`, the value of `name` is the extension property from the user object

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/application.html#source Application#source}

---

### ApplicationOptionalClaimsIdToken <a name="@cdktf/provider-azuread.ApplicationOptionalClaimsIdToken"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ApplicationOptionalClaimsIdToken } from '@cdktf/provider-azuread'

const applicationOptionalClaimsIdToken: ApplicationOptionalClaimsIdToken = { ... }
```

##### `name`<sup>Required</sup> <a name="@cdktf/provider-azuread.ApplicationOptionalClaimsIdToken.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* `string`

The name of the optional claim.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/application.html#name Application#name}

---

##### `additionalProperties`<sup>Optional</sup> <a name="@cdktf/provider-azuread.ApplicationOptionalClaimsIdToken.property.additionalProperties"></a>

```typescript
public readonly additionalProperties: string[];
```

- *Type:* `string`[]

List of additional properties of the claim.

If a property exists in this list, it modifies the behaviour of the optional claim

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/application.html#additional_properties Application#additional_properties}

---

##### `essential`<sup>Optional</sup> <a name="@cdktf/provider-azuread.ApplicationOptionalClaimsIdToken.property.essential"></a>

```typescript
public readonly essential: boolean | IResolvable;
```

- *Type:* `boolean` | [`cdktf.IResolvable`](#cdktf.IResolvable)

Whether the claim specified by the client is necessary to ensure a smooth authorization experience.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/application.html#essential Application#essential}

---

##### `source`<sup>Optional</sup> <a name="@cdktf/provider-azuread.ApplicationOptionalClaimsIdToken.property.source"></a>

```typescript
public readonly source: string;
```

- *Type:* `string`

The source of the claim.

If `source` is absent, the claim is a predefined optional claim. If `source` is `user`, the value of `name` is the extension property from the user object

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/application.html#source Application#source}

---

### ApplicationOptionalClaimsSaml2Token <a name="@cdktf/provider-azuread.ApplicationOptionalClaimsSaml2Token"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ApplicationOptionalClaimsSaml2Token } from '@cdktf/provider-azuread'

const applicationOptionalClaimsSaml2Token: ApplicationOptionalClaimsSaml2Token = { ... }
```

##### `name`<sup>Required</sup> <a name="@cdktf/provider-azuread.ApplicationOptionalClaimsSaml2Token.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* `string`

The name of the optional claim.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/application.html#name Application#name}

---

##### `additionalProperties`<sup>Optional</sup> <a name="@cdktf/provider-azuread.ApplicationOptionalClaimsSaml2Token.property.additionalProperties"></a>

```typescript
public readonly additionalProperties: string[];
```

- *Type:* `string`[]

List of additional properties of the claim.

If a property exists in this list, it modifies the behaviour of the optional claim

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/application.html#additional_properties Application#additional_properties}

---

##### `essential`<sup>Optional</sup> <a name="@cdktf/provider-azuread.ApplicationOptionalClaimsSaml2Token.property.essential"></a>

```typescript
public readonly essential: boolean | IResolvable;
```

- *Type:* `boolean` | [`cdktf.IResolvable`](#cdktf.IResolvable)

Whether the claim specified by the client is necessary to ensure a smooth authorization experience.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/application.html#essential Application#essential}

---

##### `source`<sup>Optional</sup> <a name="@cdktf/provider-azuread.ApplicationOptionalClaimsSaml2Token.property.source"></a>

```typescript
public readonly source: string;
```

- *Type:* `string`

The source of the claim.

If `source` is absent, the claim is a predefined optional claim. If `source` is `user`, the value of `name` is the extension property from the user object

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/application.html#source Application#source}

---

### ApplicationPasswordConfig <a name="@cdktf/provider-azuread.ApplicationPasswordConfig"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ApplicationPasswordConfig } from '@cdktf/provider-azuread'

const applicationPasswordConfig: ApplicationPasswordConfig = { ... }
```

##### `count`<sup>Optional</sup> <a name="@cdktf/provider-azuread.ApplicationPasswordConfig.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* `number`

---

##### `dependsOn`<sup>Optional</sup> <a name="@cdktf/provider-azuread.ApplicationPasswordConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* [`cdktf.ITerraformDependable`](#cdktf.ITerraformDependable)[]

---

##### `lifecycle`<sup>Optional</sup> <a name="@cdktf/provider-azuread.ApplicationPasswordConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* [`cdktf.TerraformResourceLifecycle`](#cdktf.TerraformResourceLifecycle)

---

##### `provider`<sup>Optional</sup> <a name="@cdktf/provider-azuread.ApplicationPasswordConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* [`cdktf.TerraformProvider`](#cdktf.TerraformProvider)

---

##### `applicationObjectId`<sup>Required</sup> <a name="@cdktf/provider-azuread.ApplicationPasswordConfig.property.applicationObjectId"></a>

```typescript
public readonly applicationObjectId: string;
```

- *Type:* `string`

The object ID of the application for which this password should be created.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/application_password.html#application_object_id ApplicationPassword#application_object_id}

---

##### `displayName`<sup>Optional</sup> <a name="@cdktf/provider-azuread.ApplicationPasswordConfig.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* `string`

A display name for the password.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/application_password.html#display_name ApplicationPassword#display_name}

---

##### `endDate`<sup>Optional</sup> <a name="@cdktf/provider-azuread.ApplicationPasswordConfig.property.endDate"></a>

```typescript
public readonly endDate: string;
```

- *Type:* `string`

The end date until which the password is valid, formatted as an RFC3339 date string (e.g. `2018-01-01T01:02:03Z`).

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/application_password.html#end_date ApplicationPassword#end_date}

---

##### `endDateRelative`<sup>Optional</sup> <a name="@cdktf/provider-azuread.ApplicationPasswordConfig.property.endDateRelative"></a>

```typescript
public readonly endDateRelative: string;
```

- *Type:* `string`

A relative duration for which the password is valid until, for example `240h` (10 days) or `2400h30m`.

Changing this field forces a new resource to be created

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/application_password.html#end_date_relative ApplicationPassword#end_date_relative}

---

##### `rotateWhenChanged`<sup>Optional</sup> <a name="@cdktf/provider-azuread.ApplicationPasswordConfig.property.rotateWhenChanged"></a>

```typescript
public readonly rotateWhenChanged: IResolvable | {[ key: string ]: string};
```

- *Type:* [`cdktf.IResolvable`](#cdktf.IResolvable) | {[ key: string ]: `string`}

Arbitrary map of values that, when changed, will trigger rotation of the password.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/application_password.html#rotate_when_changed ApplicationPassword#rotate_when_changed}

---

##### `startDate`<sup>Optional</sup> <a name="@cdktf/provider-azuread.ApplicationPasswordConfig.property.startDate"></a>

```typescript
public readonly startDate: string;
```

- *Type:* `string`

The start date from which the password is valid, formatted as an RFC3339 date string (e.g. `2018-01-01T01:02:03Z`). If this isn't specified, the current date is used.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/application_password.html#start_date ApplicationPassword#start_date}

---

##### `timeouts`<sup>Optional</sup> <a name="@cdktf/provider-azuread.ApplicationPasswordConfig.property.timeouts"></a>

```typescript
public readonly timeouts: ApplicationPasswordTimeouts;
```

- *Type:* [`@cdktf/provider-azuread.ApplicationPasswordTimeouts`](#@cdktf/provider-azuread.ApplicationPasswordTimeouts)

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/application_password.html#timeouts ApplicationPassword#timeouts}

---

### ApplicationPasswordTimeouts <a name="@cdktf/provider-azuread.ApplicationPasswordTimeouts"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ApplicationPasswordTimeouts } from '@cdktf/provider-azuread'

const applicationPasswordTimeouts: ApplicationPasswordTimeouts = { ... }
```

##### `create`<sup>Optional</sup> <a name="@cdktf/provider-azuread.ApplicationPasswordTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* `string`

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/application_password.html#create ApplicationPassword#create}.

---

##### `delete`<sup>Optional</sup> <a name="@cdktf/provider-azuread.ApplicationPasswordTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* `string`

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/application_password.html#delete ApplicationPassword#delete}.

---

##### `read`<sup>Optional</sup> <a name="@cdktf/provider-azuread.ApplicationPasswordTimeouts.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* `string`

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/application_password.html#read ApplicationPassword#read}.

---

##### `update`<sup>Optional</sup> <a name="@cdktf/provider-azuread.ApplicationPasswordTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* `string`

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/application_password.html#update ApplicationPassword#update}.

---

### ApplicationPreAuthorizedConfig <a name="@cdktf/provider-azuread.ApplicationPreAuthorizedConfig"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ApplicationPreAuthorizedConfig } from '@cdktf/provider-azuread'

const applicationPreAuthorizedConfig: ApplicationPreAuthorizedConfig = { ... }
```

##### `count`<sup>Optional</sup> <a name="@cdktf/provider-azuread.ApplicationPreAuthorizedConfig.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* `number`

---

##### `dependsOn`<sup>Optional</sup> <a name="@cdktf/provider-azuread.ApplicationPreAuthorizedConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* [`cdktf.ITerraformDependable`](#cdktf.ITerraformDependable)[]

---

##### `lifecycle`<sup>Optional</sup> <a name="@cdktf/provider-azuread.ApplicationPreAuthorizedConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* [`cdktf.TerraformResourceLifecycle`](#cdktf.TerraformResourceLifecycle)

---

##### `provider`<sup>Optional</sup> <a name="@cdktf/provider-azuread.ApplicationPreAuthorizedConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* [`cdktf.TerraformProvider`](#cdktf.TerraformProvider)

---

##### `applicationObjectId`<sup>Required</sup> <a name="@cdktf/provider-azuread.ApplicationPreAuthorizedConfig.property.applicationObjectId"></a>

```typescript
public readonly applicationObjectId: string;
```

- *Type:* `string`

The object ID of the application to which this pre-authorized application should be added.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/application_pre_authorized.html#application_object_id ApplicationPreAuthorized#application_object_id}

---

##### `authorizedAppId`<sup>Required</sup> <a name="@cdktf/provider-azuread.ApplicationPreAuthorizedConfig.property.authorizedAppId"></a>

```typescript
public readonly authorizedAppId: string;
```

- *Type:* `string`

The application ID of the pre-authorized application.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/application_pre_authorized.html#authorized_app_id ApplicationPreAuthorized#authorized_app_id}

---

##### `permissionIds`<sup>Required</sup> <a name="@cdktf/provider-azuread.ApplicationPreAuthorizedConfig.property.permissionIds"></a>

```typescript
public readonly permissionIds: string[];
```

- *Type:* `string`[]

The IDs of the permission scopes required by the pre-authorized application.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/application_pre_authorized.html#permission_ids ApplicationPreAuthorized#permission_ids}

---

##### `timeouts`<sup>Optional</sup> <a name="@cdktf/provider-azuread.ApplicationPreAuthorizedConfig.property.timeouts"></a>

```typescript
public readonly timeouts: ApplicationPreAuthorizedTimeouts;
```

- *Type:* [`@cdktf/provider-azuread.ApplicationPreAuthorizedTimeouts`](#@cdktf/provider-azuread.ApplicationPreAuthorizedTimeouts)

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/application_pre_authorized.html#timeouts ApplicationPreAuthorized#timeouts}

---

### ApplicationPreAuthorizedTimeouts <a name="@cdktf/provider-azuread.ApplicationPreAuthorizedTimeouts"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ApplicationPreAuthorizedTimeouts } from '@cdktf/provider-azuread'

const applicationPreAuthorizedTimeouts: ApplicationPreAuthorizedTimeouts = { ... }
```

##### `create`<sup>Optional</sup> <a name="@cdktf/provider-azuread.ApplicationPreAuthorizedTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* `string`

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/application_pre_authorized.html#create ApplicationPreAuthorized#create}.

---

##### `delete`<sup>Optional</sup> <a name="@cdktf/provider-azuread.ApplicationPreAuthorizedTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* `string`

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/application_pre_authorized.html#delete ApplicationPreAuthorized#delete}.

---

##### `read`<sup>Optional</sup> <a name="@cdktf/provider-azuread.ApplicationPreAuthorizedTimeouts.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* `string`

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/application_pre_authorized.html#read ApplicationPreAuthorized#read}.

---

##### `update`<sup>Optional</sup> <a name="@cdktf/provider-azuread.ApplicationPreAuthorizedTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* `string`

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/application_pre_authorized.html#update ApplicationPreAuthorized#update}.

---

### ApplicationPublicClient <a name="@cdktf/provider-azuread.ApplicationPublicClient"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ApplicationPublicClient } from '@cdktf/provider-azuread'

const applicationPublicClient: ApplicationPublicClient = { ... }
```

##### `redirectUris`<sup>Optional</sup> <a name="@cdktf/provider-azuread.ApplicationPublicClient.property.redirectUris"></a>

```typescript
public readonly redirectUris: string[];
```

- *Type:* `string`[]

The URLs where user tokens are sent for sign-in, or the redirect URIs where OAuth 2.0 authorization codes and access tokens are sent.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/application.html#redirect_uris Application#redirect_uris}

---

### ApplicationRequiredResourceAccess <a name="@cdktf/provider-azuread.ApplicationRequiredResourceAccess"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ApplicationRequiredResourceAccess } from '@cdktf/provider-azuread'

const applicationRequiredResourceAccess: ApplicationRequiredResourceAccess = { ... }
```

##### `resourceAccess`<sup>Required</sup> <a name="@cdktf/provider-azuread.ApplicationRequiredResourceAccess.property.resourceAccess"></a>

```typescript
public readonly resourceAccess: ApplicationRequiredResourceAccessResourceAccess[];
```

- *Type:* [`@cdktf/provider-azuread.ApplicationRequiredResourceAccessResourceAccess`](#@cdktf/provider-azuread.ApplicationRequiredResourceAccessResourceAccess)[]

resource_access block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/application.html#resource_access Application#resource_access}

---

##### `resourceAppId`<sup>Required</sup> <a name="@cdktf/provider-azuread.ApplicationRequiredResourceAccess.property.resourceAppId"></a>

```typescript
public readonly resourceAppId: string;
```

- *Type:* `string`

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/application.html#resource_app_id Application#resource_app_id}.

---

### ApplicationRequiredResourceAccessResourceAccess <a name="@cdktf/provider-azuread.ApplicationRequiredResourceAccessResourceAccess"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ApplicationRequiredResourceAccessResourceAccess } from '@cdktf/provider-azuread'

const applicationRequiredResourceAccessResourceAccess: ApplicationRequiredResourceAccessResourceAccess = { ... }
```

##### `id`<sup>Required</sup> <a name="@cdktf/provider-azuread.ApplicationRequiredResourceAccessResourceAccess.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* `string`

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/application.html#id Application#id}.

---

##### `type`<sup>Required</sup> <a name="@cdktf/provider-azuread.ApplicationRequiredResourceAccessResourceAccess.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* `string`

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/application.html#type Application#type}.

---

### ApplicationSinglePageApplication <a name="@cdktf/provider-azuread.ApplicationSinglePageApplication"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ApplicationSinglePageApplication } from '@cdktf/provider-azuread'

const applicationSinglePageApplication: ApplicationSinglePageApplication = { ... }
```

##### `redirectUris`<sup>Optional</sup> <a name="@cdktf/provider-azuread.ApplicationSinglePageApplication.property.redirectUris"></a>

```typescript
public readonly redirectUris: string[];
```

- *Type:* `string`[]

The URLs where user tokens are sent for sign-in, or the redirect URIs where OAuth 2.0 authorization codes and access tokens are sent.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/application.html#redirect_uris Application#redirect_uris}

---

### ApplicationTimeouts <a name="@cdktf/provider-azuread.ApplicationTimeouts"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ApplicationTimeouts } from '@cdktf/provider-azuread'

const applicationTimeouts: ApplicationTimeouts = { ... }
```

##### `create`<sup>Optional</sup> <a name="@cdktf/provider-azuread.ApplicationTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* `string`

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/application.html#create Application#create}.

---

##### `delete`<sup>Optional</sup> <a name="@cdktf/provider-azuread.ApplicationTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* `string`

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/application.html#delete Application#delete}.

---

##### `read`<sup>Optional</sup> <a name="@cdktf/provider-azuread.ApplicationTimeouts.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* `string`

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/application.html#read Application#read}.

---

##### `update`<sup>Optional</sup> <a name="@cdktf/provider-azuread.ApplicationTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* `string`

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/application.html#update Application#update}.

---

### ApplicationWeb <a name="@cdktf/provider-azuread.ApplicationWeb"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ApplicationWeb } from '@cdktf/provider-azuread'

const applicationWeb: ApplicationWeb = { ... }
```

##### `homepageUrl`<sup>Optional</sup> <a name="@cdktf/provider-azuread.ApplicationWeb.property.homepageUrl"></a>

```typescript
public readonly homepageUrl: string;
```

- *Type:* `string`

Home page or landing page of the application.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/application.html#homepage_url Application#homepage_url}

---

##### `implicitGrant`<sup>Optional</sup> <a name="@cdktf/provider-azuread.ApplicationWeb.property.implicitGrant"></a>

```typescript
public readonly implicitGrant: ApplicationWebImplicitGrant[];
```

- *Type:* [`@cdktf/provider-azuread.ApplicationWebImplicitGrant`](#@cdktf/provider-azuread.ApplicationWebImplicitGrant)[]

implicit_grant block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/application.html#implicit_grant Application#implicit_grant}

---

##### `logoutUrl`<sup>Optional</sup> <a name="@cdktf/provider-azuread.ApplicationWeb.property.logoutUrl"></a>

```typescript
public readonly logoutUrl: string;
```

- *Type:* `string`

The URL that will be used by Microsoft's authorization service to sign out a user using front-channel, back-channel or SAML logout protocols.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/application.html#logout_url Application#logout_url}

---

##### `redirectUris`<sup>Optional</sup> <a name="@cdktf/provider-azuread.ApplicationWeb.property.redirectUris"></a>

```typescript
public readonly redirectUris: string[];
```

- *Type:* `string`[]

The URLs where user tokens are sent for sign-in, or the redirect URIs where OAuth 2.0 authorization codes and access tokens are sent.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/application.html#redirect_uris Application#redirect_uris}

---

### ApplicationWebImplicitGrant <a name="@cdktf/provider-azuread.ApplicationWebImplicitGrant"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ApplicationWebImplicitGrant } from '@cdktf/provider-azuread'

const applicationWebImplicitGrant: ApplicationWebImplicitGrant = { ... }
```

##### `accessTokenIssuanceEnabled`<sup>Optional</sup> <a name="@cdktf/provider-azuread.ApplicationWebImplicitGrant.property.accessTokenIssuanceEnabled"></a>

```typescript
public readonly accessTokenIssuanceEnabled: boolean | IResolvable;
```

- *Type:* `boolean` | [`cdktf.IResolvable`](#cdktf.IResolvable)

Whether this web application can request an access token using OAuth 2.0 implicit flow.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/application.html#access_token_issuance_enabled Application#access_token_issuance_enabled}

---

##### `idTokenIssuanceEnabled`<sup>Optional</sup> <a name="@cdktf/provider-azuread.ApplicationWebImplicitGrant.property.idTokenIssuanceEnabled"></a>

```typescript
public readonly idTokenIssuanceEnabled: boolean | IResolvable;
```

- *Type:* `boolean` | [`cdktf.IResolvable`](#cdktf.IResolvable)

Whether this web application can request an ID token using OAuth 2.0 implicit flow.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/application.html#id_token_issuance_enabled Application#id_token_issuance_enabled}

---

### AppRoleAssignmentConfig <a name="@cdktf/provider-azuread.AppRoleAssignmentConfig"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { AppRoleAssignmentConfig } from '@cdktf/provider-azuread'

const appRoleAssignmentConfig: AppRoleAssignmentConfig = { ... }
```

##### `count`<sup>Optional</sup> <a name="@cdktf/provider-azuread.AppRoleAssignmentConfig.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* `number`

---

##### `dependsOn`<sup>Optional</sup> <a name="@cdktf/provider-azuread.AppRoleAssignmentConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* [`cdktf.ITerraformDependable`](#cdktf.ITerraformDependable)[]

---

##### `lifecycle`<sup>Optional</sup> <a name="@cdktf/provider-azuread.AppRoleAssignmentConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* [`cdktf.TerraformResourceLifecycle`](#cdktf.TerraformResourceLifecycle)

---

##### `provider`<sup>Optional</sup> <a name="@cdktf/provider-azuread.AppRoleAssignmentConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* [`cdktf.TerraformProvider`](#cdktf.TerraformProvider)

---

##### `appRoleId`<sup>Required</sup> <a name="@cdktf/provider-azuread.AppRoleAssignmentConfig.property.appRoleId"></a>

```typescript
public readonly appRoleId: string;
```

- *Type:* `string`

The ID of the app role to be assigned.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/app_role_assignment.html#app_role_id AppRoleAssignment#app_role_id}

---

##### `principalObjectId`<sup>Required</sup> <a name="@cdktf/provider-azuread.AppRoleAssignmentConfig.property.principalObjectId"></a>

```typescript
public readonly principalObjectId: string;
```

- *Type:* `string`

The object ID of the user, group or service principal to be assigned this app role.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/app_role_assignment.html#principal_object_id AppRoleAssignment#principal_object_id}

---

##### `resourceObjectId`<sup>Required</sup> <a name="@cdktf/provider-azuread.AppRoleAssignmentConfig.property.resourceObjectId"></a>

```typescript
public readonly resourceObjectId: string;
```

- *Type:* `string`

The object ID of the service principal representing the resource.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/app_role_assignment.html#resource_object_id AppRoleAssignment#resource_object_id}

---

##### `timeouts`<sup>Optional</sup> <a name="@cdktf/provider-azuread.AppRoleAssignmentConfig.property.timeouts"></a>

```typescript
public readonly timeouts: AppRoleAssignmentTimeouts;
```

- *Type:* [`@cdktf/provider-azuread.AppRoleAssignmentTimeouts`](#@cdktf/provider-azuread.AppRoleAssignmentTimeouts)

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/app_role_assignment.html#timeouts AppRoleAssignment#timeouts}

---

### AppRoleAssignmentTimeouts <a name="@cdktf/provider-azuread.AppRoleAssignmentTimeouts"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { AppRoleAssignmentTimeouts } from '@cdktf/provider-azuread'

const appRoleAssignmentTimeouts: AppRoleAssignmentTimeouts = { ... }
```

##### `create`<sup>Optional</sup> <a name="@cdktf/provider-azuread.AppRoleAssignmentTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* `string`

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/app_role_assignment.html#create AppRoleAssignment#create}.

---

##### `delete`<sup>Optional</sup> <a name="@cdktf/provider-azuread.AppRoleAssignmentTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* `string`

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/app_role_assignment.html#delete AppRoleAssignment#delete}.

---

##### `read`<sup>Optional</sup> <a name="@cdktf/provider-azuread.AppRoleAssignmentTimeouts.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* `string`

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/app_role_assignment.html#read AppRoleAssignment#read}.

---

### AzureadProviderConfig <a name="@cdktf/provider-azuread.AzureadProviderConfig"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { AzureadProviderConfig } from '@cdktf/provider-azuread'

const azureadProviderConfig: AzureadProviderConfig = { ... }
```

##### `alias`<sup>Optional</sup> <a name="@cdktf/provider-azuread.AzureadProviderConfig.property.alias"></a>

```typescript
public readonly alias: string;
```

- *Type:* `string`

Alias name.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread#alias AzureadProvider#alias}

---

##### `clientCertificate`<sup>Optional</sup> <a name="@cdktf/provider-azuread.AzureadProviderConfig.property.clientCertificate"></a>

```typescript
public readonly clientCertificate: string;
```

- *Type:* `string`

Base64 encoded PKCS#12 certificate bundle to use when authenticating as a Service Principal using a Client Certificate.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread#client_certificate AzureadProvider#client_certificate}

---

##### `clientCertificatePassword`<sup>Optional</sup> <a name="@cdktf/provider-azuread.AzureadProviderConfig.property.clientCertificatePassword"></a>

```typescript
public readonly clientCertificatePassword: string;
```

- *Type:* `string`

The password to decrypt the Client Certificate. For use when authenticating as a Service Principal using a Client Certificate.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread#client_certificate_password AzureadProvider#client_certificate_password}

---

##### `clientCertificatePath`<sup>Optional</sup> <a name="@cdktf/provider-azuread.AzureadProviderConfig.property.clientCertificatePath"></a>

```typescript
public readonly clientCertificatePath: string;
```

- *Type:* `string`

The path to the Client Certificate associated with the Service Principal for use when authenticating as a Service Principal using a Client Certificate.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread#client_certificate_path AzureadProvider#client_certificate_path}

---

##### `clientId`<sup>Optional</sup> <a name="@cdktf/provider-azuread.AzureadProviderConfig.property.clientId"></a>

```typescript
public readonly clientId: string;
```

- *Type:* `string`

The Client ID which should be used for service principal authentication.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread#client_id AzureadProvider#client_id}

---

##### `clientSecret`<sup>Optional</sup> <a name="@cdktf/provider-azuread.AzureadProviderConfig.property.clientSecret"></a>

```typescript
public readonly clientSecret: string;
```

- *Type:* `string`

The application password to use when authenticating as a Service Principal using a Client Secret.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread#client_secret AzureadProvider#client_secret}

---

##### `disableTerraformPartnerId`<sup>Optional</sup> <a name="@cdktf/provider-azuread.AzureadProviderConfig.property.disableTerraformPartnerId"></a>

```typescript
public readonly disableTerraformPartnerId: boolean | IResolvable;
```

- *Type:* `boolean` | [`cdktf.IResolvable`](#cdktf.IResolvable)

Disable the Terraform Partner ID, which is used if a custom `partner_id` isn't specified.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread#disable_terraform_partner_id AzureadProvider#disable_terraform_partner_id}

---

##### `environment`<sup>Optional</sup> <a name="@cdktf/provider-azuread.AzureadProviderConfig.property.environment"></a>

```typescript
public readonly environment: string;
```

- *Type:* `string`

The cloud environment which should be used.

Possible values are: `global` (also `public`), `usgovernmentl4` (also `usgovernment`), `usgovernmentl5` (also `dod`), `germany` (also `german`), and `china`. Defaults to `global`

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread#environment AzureadProvider#environment}

---

##### `msiEndpoint`<sup>Optional</sup> <a name="@cdktf/provider-azuread.AzureadProviderConfig.property.msiEndpoint"></a>

```typescript
public readonly msiEndpoint: string;
```

- *Type:* `string`

The path to a custom endpoint for Managed Identity - in most circumstances this should be detected automatically.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread#msi_endpoint AzureadProvider#msi_endpoint}

---

##### `partnerId`<sup>Optional</sup> <a name="@cdktf/provider-azuread.AzureadProviderConfig.property.partnerId"></a>

```typescript
public readonly partnerId: string;
```

- *Type:* `string`

A GUID/UUID that is registered with Microsoft to facilitate partner resource usage attribution.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread#partner_id AzureadProvider#partner_id}

---

##### `tenantId`<sup>Optional</sup> <a name="@cdktf/provider-azuread.AzureadProviderConfig.property.tenantId"></a>

```typescript
public readonly tenantId: string;
```

- *Type:* `string`

The Tenant ID which should be used. Works with all authentication methods except Managed Identity.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread#tenant_id AzureadProvider#tenant_id}

---

##### `useCli`<sup>Optional</sup> <a name="@cdktf/provider-azuread.AzureadProviderConfig.property.useCli"></a>

```typescript
public readonly useCli: boolean | IResolvable;
```

- *Type:* `boolean` | [`cdktf.IResolvable`](#cdktf.IResolvable)

Allow Azure CLI to be used for Authentication.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread#use_cli AzureadProvider#use_cli}

---

##### `useMsi`<sup>Optional</sup> <a name="@cdktf/provider-azuread.AzureadProviderConfig.property.useMsi"></a>

```typescript
public readonly useMsi: boolean | IResolvable;
```

- *Type:* `boolean` | [`cdktf.IResolvable`](#cdktf.IResolvable)

Allow Managed Identity to be used for Authentication.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread#use_msi AzureadProvider#use_msi}

---

### ConditionalAccessPolicyConditions <a name="@cdktf/provider-azuread.ConditionalAccessPolicyConditions"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ConditionalAccessPolicyConditions } from '@cdktf/provider-azuread'

const conditionalAccessPolicyConditions: ConditionalAccessPolicyConditions = { ... }
```

##### `applications`<sup>Required</sup> <a name="@cdktf/provider-azuread.ConditionalAccessPolicyConditions.property.applications"></a>

```typescript
public readonly applications: ConditionalAccessPolicyConditionsApplications[];
```

- *Type:* [`@cdktf/provider-azuread.ConditionalAccessPolicyConditionsApplications`](#@cdktf/provider-azuread.ConditionalAccessPolicyConditionsApplications)[]

applications block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/conditional_access_policy.html#applications ConditionalAccessPolicy#applications}

---

##### `clientAppTypes`<sup>Required</sup> <a name="@cdktf/provider-azuread.ConditionalAccessPolicyConditions.property.clientAppTypes"></a>

```typescript
public readonly clientAppTypes: string[];
```

- *Type:* `string`[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/conditional_access_policy.html#client_app_types ConditionalAccessPolicy#client_app_types}.

---

##### `locations`<sup>Required</sup> <a name="@cdktf/provider-azuread.ConditionalAccessPolicyConditions.property.locations"></a>

```typescript
public readonly locations: ConditionalAccessPolicyConditionsLocations[];
```

- *Type:* [`@cdktf/provider-azuread.ConditionalAccessPolicyConditionsLocations`](#@cdktf/provider-azuread.ConditionalAccessPolicyConditionsLocations)[]

locations block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/conditional_access_policy.html#locations ConditionalAccessPolicy#locations}

---

##### `platforms`<sup>Required</sup> <a name="@cdktf/provider-azuread.ConditionalAccessPolicyConditions.property.platforms"></a>

```typescript
public readonly platforms: ConditionalAccessPolicyConditionsPlatforms[];
```

- *Type:* [`@cdktf/provider-azuread.ConditionalAccessPolicyConditionsPlatforms`](#@cdktf/provider-azuread.ConditionalAccessPolicyConditionsPlatforms)[]

platforms block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/conditional_access_policy.html#platforms ConditionalAccessPolicy#platforms}

---

##### `users`<sup>Required</sup> <a name="@cdktf/provider-azuread.ConditionalAccessPolicyConditions.property.users"></a>

```typescript
public readonly users: ConditionalAccessPolicyConditionsUsers[];
```

- *Type:* [`@cdktf/provider-azuread.ConditionalAccessPolicyConditionsUsers`](#@cdktf/provider-azuread.ConditionalAccessPolicyConditionsUsers)[]

users block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/conditional_access_policy.html#users ConditionalAccessPolicy#users}

---

##### `signInRiskLevels`<sup>Optional</sup> <a name="@cdktf/provider-azuread.ConditionalAccessPolicyConditions.property.signInRiskLevels"></a>

```typescript
public readonly signInRiskLevels: string[];
```

- *Type:* `string`[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/conditional_access_policy.html#sign_in_risk_levels ConditionalAccessPolicy#sign_in_risk_levels}.

---

##### `userRiskLevels`<sup>Optional</sup> <a name="@cdktf/provider-azuread.ConditionalAccessPolicyConditions.property.userRiskLevels"></a>

```typescript
public readonly userRiskLevels: string[];
```

- *Type:* `string`[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/conditional_access_policy.html#user_risk_levels ConditionalAccessPolicy#user_risk_levels}.

---

### ConditionalAccessPolicyConditionsApplications <a name="@cdktf/provider-azuread.ConditionalAccessPolicyConditionsApplications"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ConditionalAccessPolicyConditionsApplications } from '@cdktf/provider-azuread'

const conditionalAccessPolicyConditionsApplications: ConditionalAccessPolicyConditionsApplications = { ... }
```

##### `includedApplications`<sup>Required</sup> <a name="@cdktf/provider-azuread.ConditionalAccessPolicyConditionsApplications.property.includedApplications"></a>

```typescript
public readonly includedApplications: string[];
```

- *Type:* `string`[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/conditional_access_policy.html#included_applications ConditionalAccessPolicy#included_applications}.

---

##### `excludedApplications`<sup>Optional</sup> <a name="@cdktf/provider-azuread.ConditionalAccessPolicyConditionsApplications.property.excludedApplications"></a>

```typescript
public readonly excludedApplications: string[];
```

- *Type:* `string`[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/conditional_access_policy.html#excluded_applications ConditionalAccessPolicy#excluded_applications}.

---

##### `includedUserActions`<sup>Optional</sup> <a name="@cdktf/provider-azuread.ConditionalAccessPolicyConditionsApplications.property.includedUserActions"></a>

```typescript
public readonly includedUserActions: string[];
```

- *Type:* `string`[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/conditional_access_policy.html#included_user_actions ConditionalAccessPolicy#included_user_actions}.

---

### ConditionalAccessPolicyConditionsLocations <a name="@cdktf/provider-azuread.ConditionalAccessPolicyConditionsLocations"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ConditionalAccessPolicyConditionsLocations } from '@cdktf/provider-azuread'

const conditionalAccessPolicyConditionsLocations: ConditionalAccessPolicyConditionsLocations = { ... }
```

##### `includedLocations`<sup>Required</sup> <a name="@cdktf/provider-azuread.ConditionalAccessPolicyConditionsLocations.property.includedLocations"></a>

```typescript
public readonly includedLocations: string[];
```

- *Type:* `string`[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/conditional_access_policy.html#included_locations ConditionalAccessPolicy#included_locations}.

---

##### `excludedLocations`<sup>Optional</sup> <a name="@cdktf/provider-azuread.ConditionalAccessPolicyConditionsLocations.property.excludedLocations"></a>

```typescript
public readonly excludedLocations: string[];
```

- *Type:* `string`[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/conditional_access_policy.html#excluded_locations ConditionalAccessPolicy#excluded_locations}.

---

### ConditionalAccessPolicyConditionsPlatforms <a name="@cdktf/provider-azuread.ConditionalAccessPolicyConditionsPlatforms"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ConditionalAccessPolicyConditionsPlatforms } from '@cdktf/provider-azuread'

const conditionalAccessPolicyConditionsPlatforms: ConditionalAccessPolicyConditionsPlatforms = { ... }
```

##### `includedPlatforms`<sup>Required</sup> <a name="@cdktf/provider-azuread.ConditionalAccessPolicyConditionsPlatforms.property.includedPlatforms"></a>

```typescript
public readonly includedPlatforms: string[];
```

- *Type:* `string`[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/conditional_access_policy.html#included_platforms ConditionalAccessPolicy#included_platforms}.

---

##### `excludedPlatforms`<sup>Optional</sup> <a name="@cdktf/provider-azuread.ConditionalAccessPolicyConditionsPlatforms.property.excludedPlatforms"></a>

```typescript
public readonly excludedPlatforms: string[];
```

- *Type:* `string`[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/conditional_access_policy.html#excluded_platforms ConditionalAccessPolicy#excluded_platforms}.

---

### ConditionalAccessPolicyConditionsUsers <a name="@cdktf/provider-azuread.ConditionalAccessPolicyConditionsUsers"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ConditionalAccessPolicyConditionsUsers } from '@cdktf/provider-azuread'

const conditionalAccessPolicyConditionsUsers: ConditionalAccessPolicyConditionsUsers = { ... }
```

##### `excludedGroups`<sup>Optional</sup> <a name="@cdktf/provider-azuread.ConditionalAccessPolicyConditionsUsers.property.excludedGroups"></a>

```typescript
public readonly excludedGroups: string[];
```

- *Type:* `string`[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/conditional_access_policy.html#excluded_groups ConditionalAccessPolicy#excluded_groups}.

---

##### `excludedRoles`<sup>Optional</sup> <a name="@cdktf/provider-azuread.ConditionalAccessPolicyConditionsUsers.property.excludedRoles"></a>

```typescript
public readonly excludedRoles: string[];
```

- *Type:* `string`[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/conditional_access_policy.html#excluded_roles ConditionalAccessPolicy#excluded_roles}.

---

##### `excludedUsers`<sup>Optional</sup> <a name="@cdktf/provider-azuread.ConditionalAccessPolicyConditionsUsers.property.excludedUsers"></a>

```typescript
public readonly excludedUsers: string[];
```

- *Type:* `string`[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/conditional_access_policy.html#excluded_users ConditionalAccessPolicy#excluded_users}.

---

##### `includedGroups`<sup>Optional</sup> <a name="@cdktf/provider-azuread.ConditionalAccessPolicyConditionsUsers.property.includedGroups"></a>

```typescript
public readonly includedGroups: string[];
```

- *Type:* `string`[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/conditional_access_policy.html#included_groups ConditionalAccessPolicy#included_groups}.

---

##### `includedRoles`<sup>Optional</sup> <a name="@cdktf/provider-azuread.ConditionalAccessPolicyConditionsUsers.property.includedRoles"></a>

```typescript
public readonly includedRoles: string[];
```

- *Type:* `string`[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/conditional_access_policy.html#included_roles ConditionalAccessPolicy#included_roles}.

---

##### `includedUsers`<sup>Optional</sup> <a name="@cdktf/provider-azuread.ConditionalAccessPolicyConditionsUsers.property.includedUsers"></a>

```typescript
public readonly includedUsers: string[];
```

- *Type:* `string`[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/conditional_access_policy.html#included_users ConditionalAccessPolicy#included_users}.

---

### ConditionalAccessPolicyConfig <a name="@cdktf/provider-azuread.ConditionalAccessPolicyConfig"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ConditionalAccessPolicyConfig } from '@cdktf/provider-azuread'

const conditionalAccessPolicyConfig: ConditionalAccessPolicyConfig = { ... }
```

##### `count`<sup>Optional</sup> <a name="@cdktf/provider-azuread.ConditionalAccessPolicyConfig.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* `number`

---

##### `dependsOn`<sup>Optional</sup> <a name="@cdktf/provider-azuread.ConditionalAccessPolicyConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* [`cdktf.ITerraformDependable`](#cdktf.ITerraformDependable)[]

---

##### `lifecycle`<sup>Optional</sup> <a name="@cdktf/provider-azuread.ConditionalAccessPolicyConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* [`cdktf.TerraformResourceLifecycle`](#cdktf.TerraformResourceLifecycle)

---

##### `provider`<sup>Optional</sup> <a name="@cdktf/provider-azuread.ConditionalAccessPolicyConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* [`cdktf.TerraformProvider`](#cdktf.TerraformProvider)

---

##### `conditions`<sup>Required</sup> <a name="@cdktf/provider-azuread.ConditionalAccessPolicyConfig.property.conditions"></a>

```typescript
public readonly conditions: ConditionalAccessPolicyConditions[];
```

- *Type:* [`@cdktf/provider-azuread.ConditionalAccessPolicyConditions`](#@cdktf/provider-azuread.ConditionalAccessPolicyConditions)[]

conditions block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/conditional_access_policy.html#conditions ConditionalAccessPolicy#conditions}

---

##### `displayName`<sup>Required</sup> <a name="@cdktf/provider-azuread.ConditionalAccessPolicyConfig.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* `string`

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/conditional_access_policy.html#display_name ConditionalAccessPolicy#display_name}.

---

##### `grantControls`<sup>Required</sup> <a name="@cdktf/provider-azuread.ConditionalAccessPolicyConfig.property.grantControls"></a>

```typescript
public readonly grantControls: ConditionalAccessPolicyGrantControls[];
```

- *Type:* [`@cdktf/provider-azuread.ConditionalAccessPolicyGrantControls`](#@cdktf/provider-azuread.ConditionalAccessPolicyGrantControls)[]

grant_controls block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/conditional_access_policy.html#grant_controls ConditionalAccessPolicy#grant_controls}

---

##### `state`<sup>Required</sup> <a name="@cdktf/provider-azuread.ConditionalAccessPolicyConfig.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* `string`

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/conditional_access_policy.html#state ConditionalAccessPolicy#state}.

---

##### `sessionControls`<sup>Optional</sup> <a name="@cdktf/provider-azuread.ConditionalAccessPolicyConfig.property.sessionControls"></a>

```typescript
public readonly sessionControls: ConditionalAccessPolicySessionControls[];
```

- *Type:* [`@cdktf/provider-azuread.ConditionalAccessPolicySessionControls`](#@cdktf/provider-azuread.ConditionalAccessPolicySessionControls)[]

session_controls block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/conditional_access_policy.html#session_controls ConditionalAccessPolicy#session_controls}

---

##### `timeouts`<sup>Optional</sup> <a name="@cdktf/provider-azuread.ConditionalAccessPolicyConfig.property.timeouts"></a>

```typescript
public readonly timeouts: ConditionalAccessPolicyTimeouts;
```

- *Type:* [`@cdktf/provider-azuread.ConditionalAccessPolicyTimeouts`](#@cdktf/provider-azuread.ConditionalAccessPolicyTimeouts)

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/conditional_access_policy.html#timeouts ConditionalAccessPolicy#timeouts}

---

### ConditionalAccessPolicyGrantControls <a name="@cdktf/provider-azuread.ConditionalAccessPolicyGrantControls"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ConditionalAccessPolicyGrantControls } from '@cdktf/provider-azuread'

const conditionalAccessPolicyGrantControls: ConditionalAccessPolicyGrantControls = { ... }
```

##### `builtInControls`<sup>Required</sup> <a name="@cdktf/provider-azuread.ConditionalAccessPolicyGrantControls.property.builtInControls"></a>

```typescript
public readonly builtInControls: string[];
```

- *Type:* `string`[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/conditional_access_policy.html#built_in_controls ConditionalAccessPolicy#built_in_controls}.

---

##### `operator`<sup>Required</sup> <a name="@cdktf/provider-azuread.ConditionalAccessPolicyGrantControls.property.operator"></a>

```typescript
public readonly operator: string;
```

- *Type:* `string`

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/conditional_access_policy.html#operator ConditionalAccessPolicy#operator}.

---

##### `customAuthenticationFactors`<sup>Optional</sup> <a name="@cdktf/provider-azuread.ConditionalAccessPolicyGrantControls.property.customAuthenticationFactors"></a>

```typescript
public readonly customAuthenticationFactors: string[];
```

- *Type:* `string`[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/conditional_access_policy.html#custom_authentication_factors ConditionalAccessPolicy#custom_authentication_factors}.

---

##### `termsOfUse`<sup>Optional</sup> <a name="@cdktf/provider-azuread.ConditionalAccessPolicyGrantControls.property.termsOfUse"></a>

```typescript
public readonly termsOfUse: string[];
```

- *Type:* `string`[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/conditional_access_policy.html#terms_of_use ConditionalAccessPolicy#terms_of_use}.

---

### ConditionalAccessPolicySessionControls <a name="@cdktf/provider-azuread.ConditionalAccessPolicySessionControls"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ConditionalAccessPolicySessionControls } from '@cdktf/provider-azuread'

const conditionalAccessPolicySessionControls: ConditionalAccessPolicySessionControls = { ... }
```

##### `applicationEnforcedRestrictionsEnabled`<sup>Optional</sup> <a name="@cdktf/provider-azuread.ConditionalAccessPolicySessionControls.property.applicationEnforcedRestrictionsEnabled"></a>

```typescript
public readonly applicationEnforcedRestrictionsEnabled: boolean | IResolvable;
```

- *Type:* `boolean` | [`cdktf.IResolvable`](#cdktf.IResolvable)

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/conditional_access_policy.html#application_enforced_restrictions_enabled ConditionalAccessPolicy#application_enforced_restrictions_enabled}.

---

##### `cloudAppSecurityPolicy`<sup>Optional</sup> <a name="@cdktf/provider-azuread.ConditionalAccessPolicySessionControls.property.cloudAppSecurityPolicy"></a>

```typescript
public readonly cloudAppSecurityPolicy: string;
```

- *Type:* `string`

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/conditional_access_policy.html#cloud_app_security_policy ConditionalAccessPolicy#cloud_app_security_policy}.

---

##### `signInFrequency`<sup>Optional</sup> <a name="@cdktf/provider-azuread.ConditionalAccessPolicySessionControls.property.signInFrequency"></a>

```typescript
public readonly signInFrequency: number;
```

- *Type:* `number`

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/conditional_access_policy.html#sign_in_frequency ConditionalAccessPolicy#sign_in_frequency}.

---

##### `signInFrequencyPeriod`<sup>Optional</sup> <a name="@cdktf/provider-azuread.ConditionalAccessPolicySessionControls.property.signInFrequencyPeriod"></a>

```typescript
public readonly signInFrequencyPeriod: string;
```

- *Type:* `string`

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/conditional_access_policy.html#sign_in_frequency_period ConditionalAccessPolicy#sign_in_frequency_period}.

---

### ConditionalAccessPolicyTimeouts <a name="@cdktf/provider-azuread.ConditionalAccessPolicyTimeouts"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ConditionalAccessPolicyTimeouts } from '@cdktf/provider-azuread'

const conditionalAccessPolicyTimeouts: ConditionalAccessPolicyTimeouts = { ... }
```

##### `create`<sup>Optional</sup> <a name="@cdktf/provider-azuread.ConditionalAccessPolicyTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* `string`

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/conditional_access_policy.html#create ConditionalAccessPolicy#create}.

---

##### `delete`<sup>Optional</sup> <a name="@cdktf/provider-azuread.ConditionalAccessPolicyTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* `string`

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/conditional_access_policy.html#delete ConditionalAccessPolicy#delete}.

---

##### `read`<sup>Optional</sup> <a name="@cdktf/provider-azuread.ConditionalAccessPolicyTimeouts.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* `string`

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/conditional_access_policy.html#read ConditionalAccessPolicy#read}.

---

##### `update`<sup>Optional</sup> <a name="@cdktf/provider-azuread.ConditionalAccessPolicyTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* `string`

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/conditional_access_policy.html#update ConditionalAccessPolicy#update}.

---

### DataAzureadApplicationConfig <a name="@cdktf/provider-azuread.DataAzureadApplicationConfig"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { DataAzureadApplicationConfig } from '@cdktf/provider-azuread'

const dataAzureadApplicationConfig: DataAzureadApplicationConfig = { ... }
```

##### `count`<sup>Optional</sup> <a name="@cdktf/provider-azuread.DataAzureadApplicationConfig.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* `number`

---

##### `dependsOn`<sup>Optional</sup> <a name="@cdktf/provider-azuread.DataAzureadApplicationConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* [`cdktf.ITerraformDependable`](#cdktf.ITerraformDependable)[]

---

##### `lifecycle`<sup>Optional</sup> <a name="@cdktf/provider-azuread.DataAzureadApplicationConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* [`cdktf.TerraformResourceLifecycle`](#cdktf.TerraformResourceLifecycle)

---

##### `provider`<sup>Optional</sup> <a name="@cdktf/provider-azuread.DataAzureadApplicationConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* [`cdktf.TerraformProvider`](#cdktf.TerraformProvider)

---

##### `applicationId`<sup>Optional</sup> <a name="@cdktf/provider-azuread.DataAzureadApplicationConfig.property.applicationId"></a>

```typescript
public readonly applicationId: string;
```

- *Type:* `string`

The Application ID (also called Client ID).

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/d/application.html#application_id DataAzureadApplication#application_id}

---

##### `displayName`<sup>Optional</sup> <a name="@cdktf/provider-azuread.DataAzureadApplicationConfig.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* `string`

The display name for the application.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/d/application.html#display_name DataAzureadApplication#display_name}

---

##### `objectId`<sup>Optional</sup> <a name="@cdktf/provider-azuread.DataAzureadApplicationConfig.property.objectId"></a>

```typescript
public readonly objectId: string;
```

- *Type:* `string`

The application's object ID.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/d/application.html#object_id DataAzureadApplication#object_id}

---

##### `timeouts`<sup>Optional</sup> <a name="@cdktf/provider-azuread.DataAzureadApplicationConfig.property.timeouts"></a>

```typescript
public readonly timeouts: DataAzureadApplicationTimeouts;
```

- *Type:* [`@cdktf/provider-azuread.DataAzureadApplicationTimeouts`](#@cdktf/provider-azuread.DataAzureadApplicationTimeouts)

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/d/application.html#timeouts DataAzureadApplication#timeouts}

---

### DataAzureadApplicationPublishedAppIdsConfig <a name="@cdktf/provider-azuread.DataAzureadApplicationPublishedAppIdsConfig"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { DataAzureadApplicationPublishedAppIdsConfig } from '@cdktf/provider-azuread'

const dataAzureadApplicationPublishedAppIdsConfig: DataAzureadApplicationPublishedAppIdsConfig = { ... }
```

##### `count`<sup>Optional</sup> <a name="@cdktf/provider-azuread.DataAzureadApplicationPublishedAppIdsConfig.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* `number`

---

##### `dependsOn`<sup>Optional</sup> <a name="@cdktf/provider-azuread.DataAzureadApplicationPublishedAppIdsConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* [`cdktf.ITerraformDependable`](#cdktf.ITerraformDependable)[]

---

##### `lifecycle`<sup>Optional</sup> <a name="@cdktf/provider-azuread.DataAzureadApplicationPublishedAppIdsConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* [`cdktf.TerraformResourceLifecycle`](#cdktf.TerraformResourceLifecycle)

---

##### `provider`<sup>Optional</sup> <a name="@cdktf/provider-azuread.DataAzureadApplicationPublishedAppIdsConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* [`cdktf.TerraformProvider`](#cdktf.TerraformProvider)

---

##### `timeouts`<sup>Optional</sup> <a name="@cdktf/provider-azuread.DataAzureadApplicationPublishedAppIdsConfig.property.timeouts"></a>

```typescript
public readonly timeouts: DataAzureadApplicationPublishedAppIdsTimeouts;
```

- *Type:* [`@cdktf/provider-azuread.DataAzureadApplicationPublishedAppIdsTimeouts`](#@cdktf/provider-azuread.DataAzureadApplicationPublishedAppIdsTimeouts)

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/d/application_published_app_ids.html#timeouts DataAzureadApplicationPublishedAppIds#timeouts}

---

### DataAzureadApplicationPublishedAppIdsTimeouts <a name="@cdktf/provider-azuread.DataAzureadApplicationPublishedAppIdsTimeouts"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { DataAzureadApplicationPublishedAppIdsTimeouts } from '@cdktf/provider-azuread'

const dataAzureadApplicationPublishedAppIdsTimeouts: DataAzureadApplicationPublishedAppIdsTimeouts = { ... }
```

##### `read`<sup>Optional</sup> <a name="@cdktf/provider-azuread.DataAzureadApplicationPublishedAppIdsTimeouts.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* `string`

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/d/application_published_app_ids.html#read DataAzureadApplicationPublishedAppIds#read}.

---

### DataAzureadApplicationTemplateConfig <a name="@cdktf/provider-azuread.DataAzureadApplicationTemplateConfig"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { DataAzureadApplicationTemplateConfig } from '@cdktf/provider-azuread'

const dataAzureadApplicationTemplateConfig: DataAzureadApplicationTemplateConfig = { ... }
```

##### `count`<sup>Optional</sup> <a name="@cdktf/provider-azuread.DataAzureadApplicationTemplateConfig.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* `number`

---

##### `dependsOn`<sup>Optional</sup> <a name="@cdktf/provider-azuread.DataAzureadApplicationTemplateConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* [`cdktf.ITerraformDependable`](#cdktf.ITerraformDependable)[]

---

##### `lifecycle`<sup>Optional</sup> <a name="@cdktf/provider-azuread.DataAzureadApplicationTemplateConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* [`cdktf.TerraformResourceLifecycle`](#cdktf.TerraformResourceLifecycle)

---

##### `provider`<sup>Optional</sup> <a name="@cdktf/provider-azuread.DataAzureadApplicationTemplateConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* [`cdktf.TerraformProvider`](#cdktf.TerraformProvider)

---

##### `displayName`<sup>Optional</sup> <a name="@cdktf/provider-azuread.DataAzureadApplicationTemplateConfig.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* `string`

The display name for the application template.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/d/application_template.html#display_name DataAzureadApplicationTemplate#display_name}

---

##### `templateId`<sup>Optional</sup> <a name="@cdktf/provider-azuread.DataAzureadApplicationTemplateConfig.property.templateId"></a>

```typescript
public readonly templateId: string;
```

- *Type:* `string`

The application template's ID.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/d/application_template.html#template_id DataAzureadApplicationTemplate#template_id}

---

##### `timeouts`<sup>Optional</sup> <a name="@cdktf/provider-azuread.DataAzureadApplicationTemplateConfig.property.timeouts"></a>

```typescript
public readonly timeouts: DataAzureadApplicationTemplateTimeouts;
```

- *Type:* [`@cdktf/provider-azuread.DataAzureadApplicationTemplateTimeouts`](#@cdktf/provider-azuread.DataAzureadApplicationTemplateTimeouts)

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/d/application_template.html#timeouts DataAzureadApplicationTemplate#timeouts}

---

### DataAzureadApplicationTemplateTimeouts <a name="@cdktf/provider-azuread.DataAzureadApplicationTemplateTimeouts"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { DataAzureadApplicationTemplateTimeouts } from '@cdktf/provider-azuread'

const dataAzureadApplicationTemplateTimeouts: DataAzureadApplicationTemplateTimeouts = { ... }
```

##### `read`<sup>Optional</sup> <a name="@cdktf/provider-azuread.DataAzureadApplicationTemplateTimeouts.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* `string`

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/d/application_template.html#read DataAzureadApplicationTemplate#read}.

---

### DataAzureadApplicationTimeouts <a name="@cdktf/provider-azuread.DataAzureadApplicationTimeouts"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { DataAzureadApplicationTimeouts } from '@cdktf/provider-azuread'

const dataAzureadApplicationTimeouts: DataAzureadApplicationTimeouts = { ... }
```

##### `read`<sup>Optional</sup> <a name="@cdktf/provider-azuread.DataAzureadApplicationTimeouts.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* `string`

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/d/application.html#read DataAzureadApplication#read}.

---

### DataAzureadClientConfigConfig <a name="@cdktf/provider-azuread.DataAzureadClientConfigConfig"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { DataAzureadClientConfigConfig } from '@cdktf/provider-azuread'

const dataAzureadClientConfigConfig: DataAzureadClientConfigConfig = { ... }
```

##### `count`<sup>Optional</sup> <a name="@cdktf/provider-azuread.DataAzureadClientConfigConfig.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* `number`

---

##### `dependsOn`<sup>Optional</sup> <a name="@cdktf/provider-azuread.DataAzureadClientConfigConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* [`cdktf.ITerraformDependable`](#cdktf.ITerraformDependable)[]

---

##### `lifecycle`<sup>Optional</sup> <a name="@cdktf/provider-azuread.DataAzureadClientConfigConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* [`cdktf.TerraformResourceLifecycle`](#cdktf.TerraformResourceLifecycle)

---

##### `provider`<sup>Optional</sup> <a name="@cdktf/provider-azuread.DataAzureadClientConfigConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* [`cdktf.TerraformProvider`](#cdktf.TerraformProvider)

---

##### `timeouts`<sup>Optional</sup> <a name="@cdktf/provider-azuread.DataAzureadClientConfigConfig.property.timeouts"></a>

```typescript
public readonly timeouts: DataAzureadClientConfigTimeouts;
```

- *Type:* [`@cdktf/provider-azuread.DataAzureadClientConfigTimeouts`](#@cdktf/provider-azuread.DataAzureadClientConfigTimeouts)

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/d/client_config.html#timeouts DataAzureadClientConfig#timeouts}

---

### DataAzureadClientConfigTimeouts <a name="@cdktf/provider-azuread.DataAzureadClientConfigTimeouts"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { DataAzureadClientConfigTimeouts } from '@cdktf/provider-azuread'

const dataAzureadClientConfigTimeouts: DataAzureadClientConfigTimeouts = { ... }
```

##### `read`<sup>Optional</sup> <a name="@cdktf/provider-azuread.DataAzureadClientConfigTimeouts.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* `string`

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/d/client_config.html#read DataAzureadClientConfig#read}.

---

### DataAzureadDomainsConfig <a name="@cdktf/provider-azuread.DataAzureadDomainsConfig"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { DataAzureadDomainsConfig } from '@cdktf/provider-azuread'

const dataAzureadDomainsConfig: DataAzureadDomainsConfig = { ... }
```

##### `count`<sup>Optional</sup> <a name="@cdktf/provider-azuread.DataAzureadDomainsConfig.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* `number`

---

##### `dependsOn`<sup>Optional</sup> <a name="@cdktf/provider-azuread.DataAzureadDomainsConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* [`cdktf.ITerraformDependable`](#cdktf.ITerraformDependable)[]

---

##### `lifecycle`<sup>Optional</sup> <a name="@cdktf/provider-azuread.DataAzureadDomainsConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* [`cdktf.TerraformResourceLifecycle`](#cdktf.TerraformResourceLifecycle)

---

##### `provider`<sup>Optional</sup> <a name="@cdktf/provider-azuread.DataAzureadDomainsConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* [`cdktf.TerraformProvider`](#cdktf.TerraformProvider)

---

##### `adminManaged`<sup>Optional</sup> <a name="@cdktf/provider-azuread.DataAzureadDomainsConfig.property.adminManaged"></a>

```typescript
public readonly adminManaged: boolean | IResolvable;
```

- *Type:* `boolean` | [`cdktf.IResolvable`](#cdktf.IResolvable)

Set to `true` to only return domains whose DNS is managed by Microsoft 365.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/d/domains.html#admin_managed DataAzureadDomains#admin_managed}

---

##### `includeUnverified`<sup>Optional</sup> <a name="@cdktf/provider-azuread.DataAzureadDomainsConfig.property.includeUnverified"></a>

```typescript
public readonly includeUnverified: boolean | IResolvable;
```

- *Type:* `boolean` | [`cdktf.IResolvable`](#cdktf.IResolvable)

Set to `true` if unverified Azure AD domains should be included.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/d/domains.html#include_unverified DataAzureadDomains#include_unverified}

---

##### `onlyDefault`<sup>Optional</sup> <a name="@cdktf/provider-azuread.DataAzureadDomainsConfig.property.onlyDefault"></a>

```typescript
public readonly onlyDefault: boolean | IResolvable;
```

- *Type:* `boolean` | [`cdktf.IResolvable`](#cdktf.IResolvable)

Set to `true` to only return the default domain.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/d/domains.html#only_default DataAzureadDomains#only_default}

---

##### `onlyInitial`<sup>Optional</sup> <a name="@cdktf/provider-azuread.DataAzureadDomainsConfig.property.onlyInitial"></a>

```typescript
public readonly onlyInitial: boolean | IResolvable;
```

- *Type:* `boolean` | [`cdktf.IResolvable`](#cdktf.IResolvable)

Set to `true` to only return the initial domain, which is your primary Azure Active Directory tenant domain.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/d/domains.html#only_initial DataAzureadDomains#only_initial}

---

##### `onlyRoot`<sup>Optional</sup> <a name="@cdktf/provider-azuread.DataAzureadDomainsConfig.property.onlyRoot"></a>

```typescript
public readonly onlyRoot: boolean | IResolvable;
```

- *Type:* `boolean` | [`cdktf.IResolvable`](#cdktf.IResolvable)

Set to `true` to only return verified root domains. Excludes subdomains and unverified domains.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/d/domains.html#only_root DataAzureadDomains#only_root}

---

##### `supportsServices`<sup>Optional</sup> <a name="@cdktf/provider-azuread.DataAzureadDomainsConfig.property.supportsServices"></a>

```typescript
public readonly supportsServices: string[];
```

- *Type:* `string`[]

A list of supported services that must be supported by a domain.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/d/domains.html#supports_services DataAzureadDomains#supports_services}

---

##### `timeouts`<sup>Optional</sup> <a name="@cdktf/provider-azuread.DataAzureadDomainsConfig.property.timeouts"></a>

```typescript
public readonly timeouts: DataAzureadDomainsTimeouts;
```

- *Type:* [`@cdktf/provider-azuread.DataAzureadDomainsTimeouts`](#@cdktf/provider-azuread.DataAzureadDomainsTimeouts)

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/d/domains.html#timeouts DataAzureadDomains#timeouts}

---

### DataAzureadDomainsTimeouts <a name="@cdktf/provider-azuread.DataAzureadDomainsTimeouts"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { DataAzureadDomainsTimeouts } from '@cdktf/provider-azuread'

const dataAzureadDomainsTimeouts: DataAzureadDomainsTimeouts = { ... }
```

##### `read`<sup>Optional</sup> <a name="@cdktf/provider-azuread.DataAzureadDomainsTimeouts.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* `string`

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/d/domains.html#read DataAzureadDomains#read}.

---

### DataAzureadGroupConfig <a name="@cdktf/provider-azuread.DataAzureadGroupConfig"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { DataAzureadGroupConfig } from '@cdktf/provider-azuread'

const dataAzureadGroupConfig: DataAzureadGroupConfig = { ... }
```

##### `count`<sup>Optional</sup> <a name="@cdktf/provider-azuread.DataAzureadGroupConfig.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* `number`

---

##### `dependsOn`<sup>Optional</sup> <a name="@cdktf/provider-azuread.DataAzureadGroupConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* [`cdktf.ITerraformDependable`](#cdktf.ITerraformDependable)[]

---

##### `lifecycle`<sup>Optional</sup> <a name="@cdktf/provider-azuread.DataAzureadGroupConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* [`cdktf.TerraformResourceLifecycle`](#cdktf.TerraformResourceLifecycle)

---

##### `provider`<sup>Optional</sup> <a name="@cdktf/provider-azuread.DataAzureadGroupConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* [`cdktf.TerraformProvider`](#cdktf.TerraformProvider)

---

##### `displayName`<sup>Optional</sup> <a name="@cdktf/provider-azuread.DataAzureadGroupConfig.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* `string`

The display name for the group.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/d/group.html#display_name DataAzureadGroup#display_name}

---

##### `mailEnabled`<sup>Optional</sup> <a name="@cdktf/provider-azuread.DataAzureadGroupConfig.property.mailEnabled"></a>

```typescript
public readonly mailEnabled: boolean | IResolvable;
```

- *Type:* `boolean` | [`cdktf.IResolvable`](#cdktf.IResolvable)

Whether the group is mail-enabled.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/d/group.html#mail_enabled DataAzureadGroup#mail_enabled}

---

##### `objectId`<sup>Optional</sup> <a name="@cdktf/provider-azuread.DataAzureadGroupConfig.property.objectId"></a>

```typescript
public readonly objectId: string;
```

- *Type:* `string`

The object ID of the group.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/d/group.html#object_id DataAzureadGroup#object_id}

---

##### `securityEnabled`<sup>Optional</sup> <a name="@cdktf/provider-azuread.DataAzureadGroupConfig.property.securityEnabled"></a>

```typescript
public readonly securityEnabled: boolean | IResolvable;
```

- *Type:* `boolean` | [`cdktf.IResolvable`](#cdktf.IResolvable)

Whether the group is a security group.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/d/group.html#security_enabled DataAzureadGroup#security_enabled}

---

##### `timeouts`<sup>Optional</sup> <a name="@cdktf/provider-azuread.DataAzureadGroupConfig.property.timeouts"></a>

```typescript
public readonly timeouts: DataAzureadGroupTimeouts;
```

- *Type:* [`@cdktf/provider-azuread.DataAzureadGroupTimeouts`](#@cdktf/provider-azuread.DataAzureadGroupTimeouts)

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/d/group.html#timeouts DataAzureadGroup#timeouts}

---

### DataAzureadGroupsConfig <a name="@cdktf/provider-azuread.DataAzureadGroupsConfig"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { DataAzureadGroupsConfig } from '@cdktf/provider-azuread'

const dataAzureadGroupsConfig: DataAzureadGroupsConfig = { ... }
```

##### `count`<sup>Optional</sup> <a name="@cdktf/provider-azuread.DataAzureadGroupsConfig.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* `number`

---

##### `dependsOn`<sup>Optional</sup> <a name="@cdktf/provider-azuread.DataAzureadGroupsConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* [`cdktf.ITerraformDependable`](#cdktf.ITerraformDependable)[]

---

##### `lifecycle`<sup>Optional</sup> <a name="@cdktf/provider-azuread.DataAzureadGroupsConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* [`cdktf.TerraformResourceLifecycle`](#cdktf.TerraformResourceLifecycle)

---

##### `provider`<sup>Optional</sup> <a name="@cdktf/provider-azuread.DataAzureadGroupsConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* [`cdktf.TerraformProvider`](#cdktf.TerraformProvider)

---

##### `displayNames`<sup>Optional</sup> <a name="@cdktf/provider-azuread.DataAzureadGroupsConfig.property.displayNames"></a>

```typescript
public readonly displayNames: string[];
```

- *Type:* `string`[]

The display names of the groups.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/d/groups.html#display_names DataAzureadGroups#display_names}

---

##### `objectIds`<sup>Optional</sup> <a name="@cdktf/provider-azuread.DataAzureadGroupsConfig.property.objectIds"></a>

```typescript
public readonly objectIds: string[];
```

- *Type:* `string`[]

The object IDs of the groups.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/d/groups.html#object_ids DataAzureadGroups#object_ids}

---

##### `returnAll`<sup>Optional</sup> <a name="@cdktf/provider-azuread.DataAzureadGroupsConfig.property.returnAll"></a>

```typescript
public readonly returnAll: boolean | IResolvable;
```

- *Type:* `boolean` | [`cdktf.IResolvable`](#cdktf.IResolvable)

Retrieve all groups with no filter.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/d/groups.html#return_all DataAzureadGroups#return_all}

---

##### `timeouts`<sup>Optional</sup> <a name="@cdktf/provider-azuread.DataAzureadGroupsConfig.property.timeouts"></a>

```typescript
public readonly timeouts: DataAzureadGroupsTimeouts;
```

- *Type:* [`@cdktf/provider-azuread.DataAzureadGroupsTimeouts`](#@cdktf/provider-azuread.DataAzureadGroupsTimeouts)

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/d/groups.html#timeouts DataAzureadGroups#timeouts}

---

### DataAzureadGroupsTimeouts <a name="@cdktf/provider-azuread.DataAzureadGroupsTimeouts"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { DataAzureadGroupsTimeouts } from '@cdktf/provider-azuread'

const dataAzureadGroupsTimeouts: DataAzureadGroupsTimeouts = { ... }
```

##### `read`<sup>Optional</sup> <a name="@cdktf/provider-azuread.DataAzureadGroupsTimeouts.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* `string`

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/d/groups.html#read DataAzureadGroups#read}.

---

### DataAzureadGroupTimeouts <a name="@cdktf/provider-azuread.DataAzureadGroupTimeouts"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { DataAzureadGroupTimeouts } from '@cdktf/provider-azuread'

const dataAzureadGroupTimeouts: DataAzureadGroupTimeouts = { ... }
```

##### `read`<sup>Optional</sup> <a name="@cdktf/provider-azuread.DataAzureadGroupTimeouts.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* `string`

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/d/group.html#read DataAzureadGroup#read}.

---

### DataAzureadServicePrincipalConfig <a name="@cdktf/provider-azuread.DataAzureadServicePrincipalConfig"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { DataAzureadServicePrincipalConfig } from '@cdktf/provider-azuread'

const dataAzureadServicePrincipalConfig: DataAzureadServicePrincipalConfig = { ... }
```

##### `count`<sup>Optional</sup> <a name="@cdktf/provider-azuread.DataAzureadServicePrincipalConfig.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* `number`

---

##### `dependsOn`<sup>Optional</sup> <a name="@cdktf/provider-azuread.DataAzureadServicePrincipalConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* [`cdktf.ITerraformDependable`](#cdktf.ITerraformDependable)[]

---

##### `lifecycle`<sup>Optional</sup> <a name="@cdktf/provider-azuread.DataAzureadServicePrincipalConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* [`cdktf.TerraformResourceLifecycle`](#cdktf.TerraformResourceLifecycle)

---

##### `provider`<sup>Optional</sup> <a name="@cdktf/provider-azuread.DataAzureadServicePrincipalConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* [`cdktf.TerraformProvider`](#cdktf.TerraformProvider)

---

##### `applicationId`<sup>Optional</sup> <a name="@cdktf/provider-azuread.DataAzureadServicePrincipalConfig.property.applicationId"></a>

```typescript
public readonly applicationId: string;
```

- *Type:* `string`

The application ID (client ID) of the application associated with this service principal.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/d/service_principal.html#application_id DataAzureadServicePrincipal#application_id}

---

##### `displayName`<sup>Optional</sup> <a name="@cdktf/provider-azuread.DataAzureadServicePrincipalConfig.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* `string`

The display name of the application associated with this service principal.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/d/service_principal.html#display_name DataAzureadServicePrincipal#display_name}

---

##### `objectId`<sup>Optional</sup> <a name="@cdktf/provider-azuread.DataAzureadServicePrincipalConfig.property.objectId"></a>

```typescript
public readonly objectId: string;
```

- *Type:* `string`

The object ID of the service principal.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/d/service_principal.html#object_id DataAzureadServicePrincipal#object_id}

---

##### `timeouts`<sup>Optional</sup> <a name="@cdktf/provider-azuread.DataAzureadServicePrincipalConfig.property.timeouts"></a>

```typescript
public readonly timeouts: DataAzureadServicePrincipalTimeouts;
```

- *Type:* [`@cdktf/provider-azuread.DataAzureadServicePrincipalTimeouts`](#@cdktf/provider-azuread.DataAzureadServicePrincipalTimeouts)

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/d/service_principal.html#timeouts DataAzureadServicePrincipal#timeouts}

---

### DataAzureadServicePrincipalsConfig <a name="@cdktf/provider-azuread.DataAzureadServicePrincipalsConfig"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { DataAzureadServicePrincipalsConfig } from '@cdktf/provider-azuread'

const dataAzureadServicePrincipalsConfig: DataAzureadServicePrincipalsConfig = { ... }
```

##### `count`<sup>Optional</sup> <a name="@cdktf/provider-azuread.DataAzureadServicePrincipalsConfig.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* `number`

---

##### `dependsOn`<sup>Optional</sup> <a name="@cdktf/provider-azuread.DataAzureadServicePrincipalsConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* [`cdktf.ITerraformDependable`](#cdktf.ITerraformDependable)[]

---

##### `lifecycle`<sup>Optional</sup> <a name="@cdktf/provider-azuread.DataAzureadServicePrincipalsConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* [`cdktf.TerraformResourceLifecycle`](#cdktf.TerraformResourceLifecycle)

---

##### `provider`<sup>Optional</sup> <a name="@cdktf/provider-azuread.DataAzureadServicePrincipalsConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* [`cdktf.TerraformProvider`](#cdktf.TerraformProvider)

---

##### `applicationIds`<sup>Optional</sup> <a name="@cdktf/provider-azuread.DataAzureadServicePrincipalsConfig.property.applicationIds"></a>

```typescript
public readonly applicationIds: string[];
```

- *Type:* `string`[]

The application IDs (client IDs) of the applications associated with the service principals.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/d/service_principals.html#application_ids DataAzureadServicePrincipals#application_ids}

---

##### `displayNames`<sup>Optional</sup> <a name="@cdktf/provider-azuread.DataAzureadServicePrincipalsConfig.property.displayNames"></a>

```typescript
public readonly displayNames: string[];
```

- *Type:* `string`[]

The display names of the applications associated with the service principals.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/d/service_principals.html#display_names DataAzureadServicePrincipals#display_names}

---

##### `ignoreMissing`<sup>Optional</sup> <a name="@cdktf/provider-azuread.DataAzureadServicePrincipalsConfig.property.ignoreMissing"></a>

```typescript
public readonly ignoreMissing: boolean | IResolvable;
```

- *Type:* `boolean` | [`cdktf.IResolvable`](#cdktf.IResolvable)

Ignore missing service principals and return the service principals that were found.

The data source will still fail if no service principals are found

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/d/service_principals.html#ignore_missing DataAzureadServicePrincipals#ignore_missing}

---

##### `objectIds`<sup>Optional</sup> <a name="@cdktf/provider-azuread.DataAzureadServicePrincipalsConfig.property.objectIds"></a>

```typescript
public readonly objectIds: string[];
```

- *Type:* `string`[]

The object IDs of the service principals.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/d/service_principals.html#object_ids DataAzureadServicePrincipals#object_ids}

---

##### `returnAll`<sup>Optional</sup> <a name="@cdktf/provider-azuread.DataAzureadServicePrincipalsConfig.property.returnAll"></a>

```typescript
public readonly returnAll: boolean | IResolvable;
```

- *Type:* `boolean` | [`cdktf.IResolvable`](#cdktf.IResolvable)

Fetch all service principals with no filter and return all that were found.

The data source will still fail if no service principals are found.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/d/service_principals.html#return_all DataAzureadServicePrincipals#return_all}

---

##### `timeouts`<sup>Optional</sup> <a name="@cdktf/provider-azuread.DataAzureadServicePrincipalsConfig.property.timeouts"></a>

```typescript
public readonly timeouts: DataAzureadServicePrincipalsTimeouts;
```

- *Type:* [`@cdktf/provider-azuread.DataAzureadServicePrincipalsTimeouts`](#@cdktf/provider-azuread.DataAzureadServicePrincipalsTimeouts)

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/d/service_principals.html#timeouts DataAzureadServicePrincipals#timeouts}

---

### DataAzureadServicePrincipalsTimeouts <a name="@cdktf/provider-azuread.DataAzureadServicePrincipalsTimeouts"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { DataAzureadServicePrincipalsTimeouts } from '@cdktf/provider-azuread'

const dataAzureadServicePrincipalsTimeouts: DataAzureadServicePrincipalsTimeouts = { ... }
```

##### `read`<sup>Optional</sup> <a name="@cdktf/provider-azuread.DataAzureadServicePrincipalsTimeouts.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* `string`

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/d/service_principals.html#read DataAzureadServicePrincipals#read}.

---

### DataAzureadServicePrincipalTimeouts <a name="@cdktf/provider-azuread.DataAzureadServicePrincipalTimeouts"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { DataAzureadServicePrincipalTimeouts } from '@cdktf/provider-azuread'

const dataAzureadServicePrincipalTimeouts: DataAzureadServicePrincipalTimeouts = { ... }
```

##### `read`<sup>Optional</sup> <a name="@cdktf/provider-azuread.DataAzureadServicePrincipalTimeouts.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* `string`

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/d/service_principal.html#read DataAzureadServicePrincipal#read}.

---

### DataAzureadUserConfig <a name="@cdktf/provider-azuread.DataAzureadUserConfig"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { DataAzureadUserConfig } from '@cdktf/provider-azuread'

const dataAzureadUserConfig: DataAzureadUserConfig = { ... }
```

##### `count`<sup>Optional</sup> <a name="@cdktf/provider-azuread.DataAzureadUserConfig.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* `number`

---

##### `dependsOn`<sup>Optional</sup> <a name="@cdktf/provider-azuread.DataAzureadUserConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* [`cdktf.ITerraformDependable`](#cdktf.ITerraformDependable)[]

---

##### `lifecycle`<sup>Optional</sup> <a name="@cdktf/provider-azuread.DataAzureadUserConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* [`cdktf.TerraformResourceLifecycle`](#cdktf.TerraformResourceLifecycle)

---

##### `provider`<sup>Optional</sup> <a name="@cdktf/provider-azuread.DataAzureadUserConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* [`cdktf.TerraformProvider`](#cdktf.TerraformProvider)

---

##### `mailNickname`<sup>Optional</sup> <a name="@cdktf/provider-azuread.DataAzureadUserConfig.property.mailNickname"></a>

```typescript
public readonly mailNickname: string;
```

- *Type:* `string`

The email alias of the user.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/d/user.html#mail_nickname DataAzureadUser#mail_nickname}

---

##### `objectId`<sup>Optional</sup> <a name="@cdktf/provider-azuread.DataAzureadUserConfig.property.objectId"></a>

```typescript
public readonly objectId: string;
```

- *Type:* `string`

The object ID of the user.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/d/user.html#object_id DataAzureadUser#object_id}

---

##### `timeouts`<sup>Optional</sup> <a name="@cdktf/provider-azuread.DataAzureadUserConfig.property.timeouts"></a>

```typescript
public readonly timeouts: DataAzureadUserTimeouts;
```

- *Type:* [`@cdktf/provider-azuread.DataAzureadUserTimeouts`](#@cdktf/provider-azuread.DataAzureadUserTimeouts)

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/d/user.html#timeouts DataAzureadUser#timeouts}

---

##### `userPrincipalName`<sup>Optional</sup> <a name="@cdktf/provider-azuread.DataAzureadUserConfig.property.userPrincipalName"></a>

```typescript
public readonly userPrincipalName: string;
```

- *Type:* `string`

The user principal name (UPN) of the user.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/d/user.html#user_principal_name DataAzureadUser#user_principal_name}

---

### DataAzureadUsersConfig <a name="@cdktf/provider-azuread.DataAzureadUsersConfig"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { DataAzureadUsersConfig } from '@cdktf/provider-azuread'

const dataAzureadUsersConfig: DataAzureadUsersConfig = { ... }
```

##### `count`<sup>Optional</sup> <a name="@cdktf/provider-azuread.DataAzureadUsersConfig.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* `number`

---

##### `dependsOn`<sup>Optional</sup> <a name="@cdktf/provider-azuread.DataAzureadUsersConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* [`cdktf.ITerraformDependable`](#cdktf.ITerraformDependable)[]

---

##### `lifecycle`<sup>Optional</sup> <a name="@cdktf/provider-azuread.DataAzureadUsersConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* [`cdktf.TerraformResourceLifecycle`](#cdktf.TerraformResourceLifecycle)

---

##### `provider`<sup>Optional</sup> <a name="@cdktf/provider-azuread.DataAzureadUsersConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* [`cdktf.TerraformProvider`](#cdktf.TerraformProvider)

---

##### `ignoreMissing`<sup>Optional</sup> <a name="@cdktf/provider-azuread.DataAzureadUsersConfig.property.ignoreMissing"></a>

```typescript
public readonly ignoreMissing: boolean | IResolvable;
```

- *Type:* `boolean` | [`cdktf.IResolvable`](#cdktf.IResolvable)

Ignore missing users and return users that were found.

The data source will still fail if no users are found

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/d/users.html#ignore_missing DataAzureadUsers#ignore_missing}

---

##### `mailNicknames`<sup>Optional</sup> <a name="@cdktf/provider-azuread.DataAzureadUsersConfig.property.mailNicknames"></a>

```typescript
public readonly mailNicknames: string[];
```

- *Type:* `string`[]

The email aliases of the users.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/d/users.html#mail_nicknames DataAzureadUsers#mail_nicknames}

---

##### `objectIds`<sup>Optional</sup> <a name="@cdktf/provider-azuread.DataAzureadUsersConfig.property.objectIds"></a>

```typescript
public readonly objectIds: string[];
```

- *Type:* `string`[]

The object IDs of the users.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/d/users.html#object_ids DataAzureadUsers#object_ids}

---

##### `returnAll`<sup>Optional</sup> <a name="@cdktf/provider-azuread.DataAzureadUsersConfig.property.returnAll"></a>

```typescript
public readonly returnAll: boolean | IResolvable;
```

- *Type:* `boolean` | [`cdktf.IResolvable`](#cdktf.IResolvable)

Fetch all users with no filter and return all that were found.

The data source will still fail if no users are found.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/d/users.html#return_all DataAzureadUsers#return_all}

---

##### `timeouts`<sup>Optional</sup> <a name="@cdktf/provider-azuread.DataAzureadUsersConfig.property.timeouts"></a>

```typescript
public readonly timeouts: DataAzureadUsersTimeouts;
```

- *Type:* [`@cdktf/provider-azuread.DataAzureadUsersTimeouts`](#@cdktf/provider-azuread.DataAzureadUsersTimeouts)

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/d/users.html#timeouts DataAzureadUsers#timeouts}

---

##### `userPrincipalNames`<sup>Optional</sup> <a name="@cdktf/provider-azuread.DataAzureadUsersConfig.property.userPrincipalNames"></a>

```typescript
public readonly userPrincipalNames: string[];
```

- *Type:* `string`[]

The user principal names (UPNs) of the users.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/d/users.html#user_principal_names DataAzureadUsers#user_principal_names}

---

### DataAzureadUsersTimeouts <a name="@cdktf/provider-azuread.DataAzureadUsersTimeouts"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { DataAzureadUsersTimeouts } from '@cdktf/provider-azuread'

const dataAzureadUsersTimeouts: DataAzureadUsersTimeouts = { ... }
```

##### `read`<sup>Optional</sup> <a name="@cdktf/provider-azuread.DataAzureadUsersTimeouts.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* `string`

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/d/users.html#read DataAzureadUsers#read}.

---

### DataAzureadUserTimeouts <a name="@cdktf/provider-azuread.DataAzureadUserTimeouts"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { DataAzureadUserTimeouts } from '@cdktf/provider-azuread'

const dataAzureadUserTimeouts: DataAzureadUserTimeouts = { ... }
```

##### `read`<sup>Optional</sup> <a name="@cdktf/provider-azuread.DataAzureadUserTimeouts.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* `string`

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/d/user.html#read DataAzureadUser#read}.

---

### DirectoryRoleConfig <a name="@cdktf/provider-azuread.DirectoryRoleConfig"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { DirectoryRoleConfig } from '@cdktf/provider-azuread'

const directoryRoleConfig: DirectoryRoleConfig = { ... }
```

##### `count`<sup>Optional</sup> <a name="@cdktf/provider-azuread.DirectoryRoleConfig.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* `number`

---

##### `dependsOn`<sup>Optional</sup> <a name="@cdktf/provider-azuread.DirectoryRoleConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* [`cdktf.ITerraformDependable`](#cdktf.ITerraformDependable)[]

---

##### `lifecycle`<sup>Optional</sup> <a name="@cdktf/provider-azuread.DirectoryRoleConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* [`cdktf.TerraformResourceLifecycle`](#cdktf.TerraformResourceLifecycle)

---

##### `provider`<sup>Optional</sup> <a name="@cdktf/provider-azuread.DirectoryRoleConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* [`cdktf.TerraformProvider`](#cdktf.TerraformProvider)

---

##### `displayName`<sup>Optional</sup> <a name="@cdktf/provider-azuread.DirectoryRoleConfig.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* `string`

The display name of the directory role.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/directory_role.html#display_name DirectoryRole#display_name}

---

##### `templateId`<sup>Optional</sup> <a name="@cdktf/provider-azuread.DirectoryRoleConfig.property.templateId"></a>

```typescript
public readonly templateId: string;
```

- *Type:* `string`

The object ID of the template associated with the directory role.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/directory_role.html#template_id DirectoryRole#template_id}

---

##### `timeouts`<sup>Optional</sup> <a name="@cdktf/provider-azuread.DirectoryRoleConfig.property.timeouts"></a>

```typescript
public readonly timeouts: DirectoryRoleTimeouts;
```

- *Type:* [`@cdktf/provider-azuread.DirectoryRoleTimeouts`](#@cdktf/provider-azuread.DirectoryRoleTimeouts)

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/directory_role.html#timeouts DirectoryRole#timeouts}

---

### DirectoryRoleMemberConfig <a name="@cdktf/provider-azuread.DirectoryRoleMemberConfig"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { DirectoryRoleMemberConfig } from '@cdktf/provider-azuread'

const directoryRoleMemberConfig: DirectoryRoleMemberConfig = { ... }
```

##### `count`<sup>Optional</sup> <a name="@cdktf/provider-azuread.DirectoryRoleMemberConfig.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* `number`

---

##### `dependsOn`<sup>Optional</sup> <a name="@cdktf/provider-azuread.DirectoryRoleMemberConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* [`cdktf.ITerraformDependable`](#cdktf.ITerraformDependable)[]

---

##### `lifecycle`<sup>Optional</sup> <a name="@cdktf/provider-azuread.DirectoryRoleMemberConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* [`cdktf.TerraformResourceLifecycle`](#cdktf.TerraformResourceLifecycle)

---

##### `provider`<sup>Optional</sup> <a name="@cdktf/provider-azuread.DirectoryRoleMemberConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* [`cdktf.TerraformProvider`](#cdktf.TerraformProvider)

---

##### `memberObjectId`<sup>Optional</sup> <a name="@cdktf/provider-azuread.DirectoryRoleMemberConfig.property.memberObjectId"></a>

```typescript
public readonly memberObjectId: string;
```

- *Type:* `string`

The object ID of the member.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/directory_role_member.html#member_object_id DirectoryRoleMember#member_object_id}

---

##### `roleObjectId`<sup>Optional</sup> <a name="@cdktf/provider-azuread.DirectoryRoleMemberConfig.property.roleObjectId"></a>

```typescript
public readonly roleObjectId: string;
```

- *Type:* `string`

The object ID of the directory role.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/directory_role_member.html#role_object_id DirectoryRoleMember#role_object_id}

---

##### `timeouts`<sup>Optional</sup> <a name="@cdktf/provider-azuread.DirectoryRoleMemberConfig.property.timeouts"></a>

```typescript
public readonly timeouts: DirectoryRoleMemberTimeouts;
```

- *Type:* [`@cdktf/provider-azuread.DirectoryRoleMemberTimeouts`](#@cdktf/provider-azuread.DirectoryRoleMemberTimeouts)

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/directory_role_member.html#timeouts DirectoryRoleMember#timeouts}

---

### DirectoryRoleMemberTimeouts <a name="@cdktf/provider-azuread.DirectoryRoleMemberTimeouts"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { DirectoryRoleMemberTimeouts } from '@cdktf/provider-azuread'

const directoryRoleMemberTimeouts: DirectoryRoleMemberTimeouts = { ... }
```

##### `create`<sup>Optional</sup> <a name="@cdktf/provider-azuread.DirectoryRoleMemberTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* `string`

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/directory_role_member.html#create DirectoryRoleMember#create}.

---

##### `delete`<sup>Optional</sup> <a name="@cdktf/provider-azuread.DirectoryRoleMemberTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* `string`

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/directory_role_member.html#delete DirectoryRoleMember#delete}.

---

##### `read`<sup>Optional</sup> <a name="@cdktf/provider-azuread.DirectoryRoleMemberTimeouts.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* `string`

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/directory_role_member.html#read DirectoryRoleMember#read}.

---

##### `update`<sup>Optional</sup> <a name="@cdktf/provider-azuread.DirectoryRoleMemberTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* `string`

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/directory_role_member.html#update DirectoryRoleMember#update}.

---

### DirectoryRoleTimeouts <a name="@cdktf/provider-azuread.DirectoryRoleTimeouts"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { DirectoryRoleTimeouts } from '@cdktf/provider-azuread'

const directoryRoleTimeouts: DirectoryRoleTimeouts = { ... }
```

##### `create`<sup>Optional</sup> <a name="@cdktf/provider-azuread.DirectoryRoleTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* `string`

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/directory_role.html#create DirectoryRole#create}.

---

##### `delete`<sup>Optional</sup> <a name="@cdktf/provider-azuread.DirectoryRoleTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* `string`

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/directory_role.html#delete DirectoryRole#delete}.

---

##### `read`<sup>Optional</sup> <a name="@cdktf/provider-azuread.DirectoryRoleTimeouts.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* `string`

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/directory_role.html#read DirectoryRole#read}.

---

##### `update`<sup>Optional</sup> <a name="@cdktf/provider-azuread.DirectoryRoleTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* `string`

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/directory_role.html#update DirectoryRole#update}.

---

### GroupConfig <a name="@cdktf/provider-azuread.GroupConfig"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { GroupConfig } from '@cdktf/provider-azuread'

const groupConfig: GroupConfig = { ... }
```

##### `count`<sup>Optional</sup> <a name="@cdktf/provider-azuread.GroupConfig.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* `number`

---

##### `dependsOn`<sup>Optional</sup> <a name="@cdktf/provider-azuread.GroupConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* [`cdktf.ITerraformDependable`](#cdktf.ITerraformDependable)[]

---

##### `lifecycle`<sup>Optional</sup> <a name="@cdktf/provider-azuread.GroupConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* [`cdktf.TerraformResourceLifecycle`](#cdktf.TerraformResourceLifecycle)

---

##### `provider`<sup>Optional</sup> <a name="@cdktf/provider-azuread.GroupConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* [`cdktf.TerraformProvider`](#cdktf.TerraformProvider)

---

##### `displayName`<sup>Required</sup> <a name="@cdktf/provider-azuread.GroupConfig.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* `string`

The display name for the group.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/group.html#display_name Group#display_name}

---

##### `assignableToRole`<sup>Optional</sup> <a name="@cdktf/provider-azuread.GroupConfig.property.assignableToRole"></a>

```typescript
public readonly assignableToRole: boolean | IResolvable;
```

- *Type:* `boolean` | [`cdktf.IResolvable`](#cdktf.IResolvable)

Indicates whether this group can be assigned to an Azure Active Directory role.

This property can only be `true` for security-enabled groups.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/group.html#assignable_to_role Group#assignable_to_role}

---

##### `behaviors`<sup>Optional</sup> <a name="@cdktf/provider-azuread.GroupConfig.property.behaviors"></a>

```typescript
public readonly behaviors: string[];
```

- *Type:* `string`[]

The group behaviours for a Microsoft 365 group.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/group.html#behaviors Group#behaviors}

---

##### `description`<sup>Optional</sup> <a name="@cdktf/provider-azuread.GroupConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* `string`

The description for the group.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/group.html#description Group#description}

---

##### `mailEnabled`<sup>Optional</sup> <a name="@cdktf/provider-azuread.GroupConfig.property.mailEnabled"></a>

```typescript
public readonly mailEnabled: boolean | IResolvable;
```

- *Type:* `boolean` | [`cdktf.IResolvable`](#cdktf.IResolvable)

Whether the group is a mail enabled, with a shared group mailbox.

At least one of `mail_enabled` or `security_enabled` must be specified. A group can be mail enabled _and_ security enabled

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/group.html#mail_enabled Group#mail_enabled}

---

##### `mailNickname`<sup>Optional</sup> <a name="@cdktf/provider-azuread.GroupConfig.property.mailNickname"></a>

```typescript
public readonly mailNickname: string;
```

- *Type:* `string`

The mail alias for the group, unique in the organisation.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/group.html#mail_nickname Group#mail_nickname}

---

##### `members`<sup>Optional</sup> <a name="@cdktf/provider-azuread.GroupConfig.property.members"></a>

```typescript
public readonly members: string[];
```

- *Type:* `string`[]

A set of members who should be present in this group.

Supported object types are Users, Groups or Service Principals

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/group.html#members Group#members}

---

##### `owners`<sup>Optional</sup> <a name="@cdktf/provider-azuread.GroupConfig.property.owners"></a>

```typescript
public readonly owners: string[];
```

- *Type:* `string`[]

A set of owners who own this group. Supported object types are Users or Service Principals.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/group.html#owners Group#owners}

---

##### `preventDuplicateNames`<sup>Optional</sup> <a name="@cdktf/provider-azuread.GroupConfig.property.preventDuplicateNames"></a>

```typescript
public readonly preventDuplicateNames: boolean | IResolvable;
```

- *Type:* `boolean` | [`cdktf.IResolvable`](#cdktf.IResolvable)

If `true`, will return an error if an existing group is found with the same name.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/group.html#prevent_duplicate_names Group#prevent_duplicate_names}

---

##### `provisioningOptions`<sup>Optional</sup> <a name="@cdktf/provider-azuread.GroupConfig.property.provisioningOptions"></a>

```typescript
public readonly provisioningOptions: string[];
```

- *Type:* `string`[]

The group provisioning options for a Microsoft 365 group.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/group.html#provisioning_options Group#provisioning_options}

---

##### `securityEnabled`<sup>Optional</sup> <a name="@cdktf/provider-azuread.GroupConfig.property.securityEnabled"></a>

```typescript
public readonly securityEnabled: boolean | IResolvable;
```

- *Type:* `boolean` | [`cdktf.IResolvable`](#cdktf.IResolvable)

Whether the group is a security group for controlling access to in-app resources.

At least one of `security_enabled` or `mail_enabled` must be specified. A group can be security enabled _and_ mail enabled

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/group.html#security_enabled Group#security_enabled}

---

##### `theme`<sup>Optional</sup> <a name="@cdktf/provider-azuread.GroupConfig.property.theme"></a>

```typescript
public readonly theme: string;
```

- *Type:* `string`

The colour theme for a Microsoft 365 group.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/group.html#theme Group#theme}

---

##### `timeouts`<sup>Optional</sup> <a name="@cdktf/provider-azuread.GroupConfig.property.timeouts"></a>

```typescript
public readonly timeouts: GroupTimeouts;
```

- *Type:* [`@cdktf/provider-azuread.GroupTimeouts`](#@cdktf/provider-azuread.GroupTimeouts)

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/group.html#timeouts Group#timeouts}

---

##### `types`<sup>Optional</sup> <a name="@cdktf/provider-azuread.GroupConfig.property.types"></a>

```typescript
public readonly types: string[];
```

- *Type:* `string`[]

A set of group types to configure for the group.

The only supported type is `Unified`, which specifies a Microsoft 365 group. Required when `mail_enabled` is true

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/group.html#types Group#types}

---

##### `visibility`<sup>Optional</sup> <a name="@cdktf/provider-azuread.GroupConfig.property.visibility"></a>

```typescript
public readonly visibility: string;
```

- *Type:* `string`

Specifies the group join policy and group content visibility.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/group.html#visibility Group#visibility}

---

### GroupMemberConfig <a name="@cdktf/provider-azuread.GroupMemberConfig"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { GroupMemberConfig } from '@cdktf/provider-azuread'

const groupMemberConfig: GroupMemberConfig = { ... }
```

##### `count`<sup>Optional</sup> <a name="@cdktf/provider-azuread.GroupMemberConfig.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* `number`

---

##### `dependsOn`<sup>Optional</sup> <a name="@cdktf/provider-azuread.GroupMemberConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* [`cdktf.ITerraformDependable`](#cdktf.ITerraformDependable)[]

---

##### `lifecycle`<sup>Optional</sup> <a name="@cdktf/provider-azuread.GroupMemberConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* [`cdktf.TerraformResourceLifecycle`](#cdktf.TerraformResourceLifecycle)

---

##### `provider`<sup>Optional</sup> <a name="@cdktf/provider-azuread.GroupMemberConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* [`cdktf.TerraformProvider`](#cdktf.TerraformProvider)

---

##### `groupObjectId`<sup>Required</sup> <a name="@cdktf/provider-azuread.GroupMemberConfig.property.groupObjectId"></a>

```typescript
public readonly groupObjectId: string;
```

- *Type:* `string`

The object ID of the group you want to add the member to.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/group_member.html#group_object_id GroupMember#group_object_id}

---

##### `memberObjectId`<sup>Required</sup> <a name="@cdktf/provider-azuread.GroupMemberConfig.property.memberObjectId"></a>

```typescript
public readonly memberObjectId: string;
```

- *Type:* `string`

The object ID of the principal you want to add as a member to the group.

Supported object types are Users, Groups or Service Principals

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/group_member.html#member_object_id GroupMember#member_object_id}

---

##### `timeouts`<sup>Optional</sup> <a name="@cdktf/provider-azuread.GroupMemberConfig.property.timeouts"></a>

```typescript
public readonly timeouts: GroupMemberTimeouts;
```

- *Type:* [`@cdktf/provider-azuread.GroupMemberTimeouts`](#@cdktf/provider-azuread.GroupMemberTimeouts)

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/group_member.html#timeouts GroupMember#timeouts}

---

### GroupMemberTimeouts <a name="@cdktf/provider-azuread.GroupMemberTimeouts"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { GroupMemberTimeouts } from '@cdktf/provider-azuread'

const groupMemberTimeouts: GroupMemberTimeouts = { ... }
```

##### `create`<sup>Optional</sup> <a name="@cdktf/provider-azuread.GroupMemberTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* `string`

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/group_member.html#create GroupMember#create}.

---

##### `delete`<sup>Optional</sup> <a name="@cdktf/provider-azuread.GroupMemberTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* `string`

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/group_member.html#delete GroupMember#delete}.

---

##### `read`<sup>Optional</sup> <a name="@cdktf/provider-azuread.GroupMemberTimeouts.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* `string`

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/group_member.html#read GroupMember#read}.

---

##### `update`<sup>Optional</sup> <a name="@cdktf/provider-azuread.GroupMemberTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* `string`

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/group_member.html#update GroupMember#update}.

---

### GroupTimeouts <a name="@cdktf/provider-azuread.GroupTimeouts"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { GroupTimeouts } from '@cdktf/provider-azuread'

const groupTimeouts: GroupTimeouts = { ... }
```

##### `create`<sup>Optional</sup> <a name="@cdktf/provider-azuread.GroupTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* `string`

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/group.html#create Group#create}.

---

##### `delete`<sup>Optional</sup> <a name="@cdktf/provider-azuread.GroupTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* `string`

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/group.html#delete Group#delete}.

---

##### `read`<sup>Optional</sup> <a name="@cdktf/provider-azuread.GroupTimeouts.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* `string`

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/group.html#read Group#read}.

---

##### `update`<sup>Optional</sup> <a name="@cdktf/provider-azuread.GroupTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* `string`

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/group.html#update Group#update}.

---

### InvitationConfig <a name="@cdktf/provider-azuread.InvitationConfig"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { InvitationConfig } from '@cdktf/provider-azuread'

const invitationConfig: InvitationConfig = { ... }
```

##### `count`<sup>Optional</sup> <a name="@cdktf/provider-azuread.InvitationConfig.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* `number`

---

##### `dependsOn`<sup>Optional</sup> <a name="@cdktf/provider-azuread.InvitationConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* [`cdktf.ITerraformDependable`](#cdktf.ITerraformDependable)[]

---

##### `lifecycle`<sup>Optional</sup> <a name="@cdktf/provider-azuread.InvitationConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* [`cdktf.TerraformResourceLifecycle`](#cdktf.TerraformResourceLifecycle)

---

##### `provider`<sup>Optional</sup> <a name="@cdktf/provider-azuread.InvitationConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* [`cdktf.TerraformProvider`](#cdktf.TerraformProvider)

---

##### `redirectUrl`<sup>Required</sup> <a name="@cdktf/provider-azuread.InvitationConfig.property.redirectUrl"></a>

```typescript
public readonly redirectUrl: string;
```

- *Type:* `string`

The URL that the user should be redirected to once the invitation is redeemed.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/invitation.html#redirect_url Invitation#redirect_url}

---

##### `userEmailAddress`<sup>Required</sup> <a name="@cdktf/provider-azuread.InvitationConfig.property.userEmailAddress"></a>

```typescript
public readonly userEmailAddress: string;
```

- *Type:* `string`

The email address of the user being invited.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/invitation.html#user_email_address Invitation#user_email_address}

---

##### `message`<sup>Optional</sup> <a name="@cdktf/provider-azuread.InvitationConfig.property.message"></a>

```typescript
public readonly message: InvitationMessage[];
```

- *Type:* [`@cdktf/provider-azuread.InvitationMessage`](#@cdktf/provider-azuread.InvitationMessage)[]

message block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/invitation.html#message Invitation#message}

---

##### `timeouts`<sup>Optional</sup> <a name="@cdktf/provider-azuread.InvitationConfig.property.timeouts"></a>

```typescript
public readonly timeouts: InvitationTimeouts;
```

- *Type:* [`@cdktf/provider-azuread.InvitationTimeouts`](#@cdktf/provider-azuread.InvitationTimeouts)

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/invitation.html#timeouts Invitation#timeouts}

---

##### `userDisplayName`<sup>Optional</sup> <a name="@cdktf/provider-azuread.InvitationConfig.property.userDisplayName"></a>

```typescript
public readonly userDisplayName: string;
```

- *Type:* `string`

The display name of the user being invited.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/invitation.html#user_display_name Invitation#user_display_name}

---

##### `userType`<sup>Optional</sup> <a name="@cdktf/provider-azuread.InvitationConfig.property.userType"></a>

```typescript
public readonly userType: string;
```

- *Type:* `string`

The user type of the user being invited.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/invitation.html#user_type Invitation#user_type}

---

### InvitationMessage <a name="@cdktf/provider-azuread.InvitationMessage"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { InvitationMessage } from '@cdktf/provider-azuread'

const invitationMessage: InvitationMessage = { ... }
```

##### `additionalRecipients`<sup>Optional</sup> <a name="@cdktf/provider-azuread.InvitationMessage.property.additionalRecipients"></a>

```typescript
public readonly additionalRecipients: string[];
```

- *Type:* `string`[]

Email addresses of additional recipients the invitation message should be sent to.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/invitation.html#additional_recipients Invitation#additional_recipients}

---

##### `body`<sup>Optional</sup> <a name="@cdktf/provider-azuread.InvitationMessage.property.body"></a>

```typescript
public readonly body: string;
```

- *Type:* `string`

Customized message body you want to send if you don't want to send the default message.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/invitation.html#body Invitation#body}

---

##### `language`<sup>Optional</sup> <a name="@cdktf/provider-azuread.InvitationMessage.property.language"></a>

```typescript
public readonly language: string;
```

- *Type:* `string`

The language you want to send the default message in.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/invitation.html#language Invitation#language}

---

### InvitationTimeouts <a name="@cdktf/provider-azuread.InvitationTimeouts"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { InvitationTimeouts } from '@cdktf/provider-azuread'

const invitationTimeouts: InvitationTimeouts = { ... }
```

##### `create`<sup>Optional</sup> <a name="@cdktf/provider-azuread.InvitationTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* `string`

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/invitation.html#create Invitation#create}.

---

##### `delete`<sup>Optional</sup> <a name="@cdktf/provider-azuread.InvitationTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* `string`

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/invitation.html#delete Invitation#delete}.

---

##### `read`<sup>Optional</sup> <a name="@cdktf/provider-azuread.InvitationTimeouts.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* `string`

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/invitation.html#read Invitation#read}.

---

##### `update`<sup>Optional</sup> <a name="@cdktf/provider-azuread.InvitationTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* `string`

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/invitation.html#update Invitation#update}.

---

### NamedLocationConfig <a name="@cdktf/provider-azuread.NamedLocationConfig"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { NamedLocationConfig } from '@cdktf/provider-azuread'

const namedLocationConfig: NamedLocationConfig = { ... }
```

##### `count`<sup>Optional</sup> <a name="@cdktf/provider-azuread.NamedLocationConfig.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* `number`

---

##### `dependsOn`<sup>Optional</sup> <a name="@cdktf/provider-azuread.NamedLocationConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* [`cdktf.ITerraformDependable`](#cdktf.ITerraformDependable)[]

---

##### `lifecycle`<sup>Optional</sup> <a name="@cdktf/provider-azuread.NamedLocationConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* [`cdktf.TerraformResourceLifecycle`](#cdktf.TerraformResourceLifecycle)

---

##### `provider`<sup>Optional</sup> <a name="@cdktf/provider-azuread.NamedLocationConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* [`cdktf.TerraformProvider`](#cdktf.TerraformProvider)

---

##### `displayName`<sup>Required</sup> <a name="@cdktf/provider-azuread.NamedLocationConfig.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* `string`

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/named_location.html#display_name NamedLocation#display_name}.

---

##### `country`<sup>Optional</sup> <a name="@cdktf/provider-azuread.NamedLocationConfig.property.country"></a>

```typescript
public readonly country: NamedLocationCountry[];
```

- *Type:* [`@cdktf/provider-azuread.NamedLocationCountry`](#@cdktf/provider-azuread.NamedLocationCountry)[]

country block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/named_location.html#country NamedLocation#country}

---

##### `ip`<sup>Optional</sup> <a name="@cdktf/provider-azuread.NamedLocationConfig.property.ip"></a>

```typescript
public readonly ip: NamedLocationIp[];
```

- *Type:* [`@cdktf/provider-azuread.NamedLocationIp`](#@cdktf/provider-azuread.NamedLocationIp)[]

ip block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/named_location.html#ip NamedLocation#ip}

---

##### `timeouts`<sup>Optional</sup> <a name="@cdktf/provider-azuread.NamedLocationConfig.property.timeouts"></a>

```typescript
public readonly timeouts: NamedLocationTimeouts;
```

- *Type:* [`@cdktf/provider-azuread.NamedLocationTimeouts`](#@cdktf/provider-azuread.NamedLocationTimeouts)

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/named_location.html#timeouts NamedLocation#timeouts}

---

### NamedLocationCountry <a name="@cdktf/provider-azuread.NamedLocationCountry"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { NamedLocationCountry } from '@cdktf/provider-azuread'

const namedLocationCountry: NamedLocationCountry = { ... }
```

##### `countriesAndRegions`<sup>Required</sup> <a name="@cdktf/provider-azuread.NamedLocationCountry.property.countriesAndRegions"></a>

```typescript
public readonly countriesAndRegions: string[];
```

- *Type:* `string`[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/named_location.html#countries_and_regions NamedLocation#countries_and_regions}.

---

##### `includeUnknownCountriesAndRegions`<sup>Optional</sup> <a name="@cdktf/provider-azuread.NamedLocationCountry.property.includeUnknownCountriesAndRegions"></a>

```typescript
public readonly includeUnknownCountriesAndRegions: boolean | IResolvable;
```

- *Type:* `boolean` | [`cdktf.IResolvable`](#cdktf.IResolvable)

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/named_location.html#include_unknown_countries_and_regions NamedLocation#include_unknown_countries_and_regions}.

---

### NamedLocationIp <a name="@cdktf/provider-azuread.NamedLocationIp"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { NamedLocationIp } from '@cdktf/provider-azuread'

const namedLocationIp: NamedLocationIp = { ... }
```

##### `ipRanges`<sup>Required</sup> <a name="@cdktf/provider-azuread.NamedLocationIp.property.ipRanges"></a>

```typescript
public readonly ipRanges: string[];
```

- *Type:* `string`[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/named_location.html#ip_ranges NamedLocation#ip_ranges}.

---

##### `trusted`<sup>Optional</sup> <a name="@cdktf/provider-azuread.NamedLocationIp.property.trusted"></a>

```typescript
public readonly trusted: boolean | IResolvable;
```

- *Type:* `boolean` | [`cdktf.IResolvable`](#cdktf.IResolvable)

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/named_location.html#trusted NamedLocation#trusted}.

---

### NamedLocationTimeouts <a name="@cdktf/provider-azuread.NamedLocationTimeouts"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { NamedLocationTimeouts } from '@cdktf/provider-azuread'

const namedLocationTimeouts: NamedLocationTimeouts = { ... }
```

##### `create`<sup>Optional</sup> <a name="@cdktf/provider-azuread.NamedLocationTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* `string`

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/named_location.html#create NamedLocation#create}.

---

##### `delete`<sup>Optional</sup> <a name="@cdktf/provider-azuread.NamedLocationTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* `string`

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/named_location.html#delete NamedLocation#delete}.

---

##### `read`<sup>Optional</sup> <a name="@cdktf/provider-azuread.NamedLocationTimeouts.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* `string`

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/named_location.html#read NamedLocation#read}.

---

##### `update`<sup>Optional</sup> <a name="@cdktf/provider-azuread.NamedLocationTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* `string`

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/named_location.html#update NamedLocation#update}.

---

### ServicePrincipalCertificateConfig <a name="@cdktf/provider-azuread.ServicePrincipalCertificateConfig"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ServicePrincipalCertificateConfig } from '@cdktf/provider-azuread'

const servicePrincipalCertificateConfig: ServicePrincipalCertificateConfig = { ... }
```

##### `count`<sup>Optional</sup> <a name="@cdktf/provider-azuread.ServicePrincipalCertificateConfig.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* `number`

---

##### `dependsOn`<sup>Optional</sup> <a name="@cdktf/provider-azuread.ServicePrincipalCertificateConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* [`cdktf.ITerraformDependable`](#cdktf.ITerraformDependable)[]

---

##### `lifecycle`<sup>Optional</sup> <a name="@cdktf/provider-azuread.ServicePrincipalCertificateConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* [`cdktf.TerraformResourceLifecycle`](#cdktf.TerraformResourceLifecycle)

---

##### `provider`<sup>Optional</sup> <a name="@cdktf/provider-azuread.ServicePrincipalCertificateConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* [`cdktf.TerraformProvider`](#cdktf.TerraformProvider)

---

##### `servicePrincipalId`<sup>Required</sup> <a name="@cdktf/provider-azuread.ServicePrincipalCertificateConfig.property.servicePrincipalId"></a>

```typescript
public readonly servicePrincipalId: string;
```

- *Type:* `string`

The object ID of the service principal for which this certificate should be created.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/service_principal_certificate.html#service_principal_id ServicePrincipalCertificate#service_principal_id}

---

##### `value`<sup>Required</sup> <a name="@cdktf/provider-azuread.ServicePrincipalCertificateConfig.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* `string`

The certificate data, which can be PEM encoded, base64 encoded DER or hexadecimal encoded DER.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/service_principal_certificate.html#value ServicePrincipalCertificate#value}

---

##### `encoding`<sup>Optional</sup> <a name="@cdktf/provider-azuread.ServicePrincipalCertificateConfig.property.encoding"></a>

```typescript
public readonly encoding: string;
```

- *Type:* `string`

Specifies the encoding used for the supplied certificate data.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/service_principal_certificate.html#encoding ServicePrincipalCertificate#encoding}

---

##### `endDate`<sup>Optional</sup> <a name="@cdktf/provider-azuread.ServicePrincipalCertificateConfig.property.endDate"></a>

```typescript
public readonly endDate: string;
```

- *Type:* `string`

The end date until which the certificate is valid, formatted as an RFC3339 date string (e.g. `2018-01-01T01:02:03Z`).

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/service_principal_certificate.html#end_date ServicePrincipalCertificate#end_date}

---

##### `endDateRelative`<sup>Optional</sup> <a name="@cdktf/provider-azuread.ServicePrincipalCertificateConfig.property.endDateRelative"></a>

```typescript
public readonly endDateRelative: string;
```

- *Type:* `string`

A relative duration for which the certificate is valid until, for example `240h` (10 days) or `2400h30m`.

Valid time units are "ns", "us" (or "µs"), "ms", "s", "m", "h"

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/service_principal_certificate.html#end_date_relative ServicePrincipalCertificate#end_date_relative}

---

##### `keyId`<sup>Optional</sup> <a name="@cdktf/provider-azuread.ServicePrincipalCertificateConfig.property.keyId"></a>

```typescript
public readonly keyId: string;
```

- *Type:* `string`

A UUID used to uniquely identify this certificate. If not specified a UUID will be automatically generated.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/service_principal_certificate.html#key_id ServicePrincipalCertificate#key_id}

---

##### `startDate`<sup>Optional</sup> <a name="@cdktf/provider-azuread.ServicePrincipalCertificateConfig.property.startDate"></a>

```typescript
public readonly startDate: string;
```

- *Type:* `string`

The start date from which the certificate is valid, formatted as an RFC3339 date string (e.g. `2018-01-01T01:02:03Z`). If this isn't specified, the current date is used.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/service_principal_certificate.html#start_date ServicePrincipalCertificate#start_date}

---

##### `timeouts`<sup>Optional</sup> <a name="@cdktf/provider-azuread.ServicePrincipalCertificateConfig.property.timeouts"></a>

```typescript
public readonly timeouts: ServicePrincipalCertificateTimeouts;
```

- *Type:* [`@cdktf/provider-azuread.ServicePrincipalCertificateTimeouts`](#@cdktf/provider-azuread.ServicePrincipalCertificateTimeouts)

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/service_principal_certificate.html#timeouts ServicePrincipalCertificate#timeouts}

---

##### `type`<sup>Optional</sup> <a name="@cdktf/provider-azuread.ServicePrincipalCertificateConfig.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* `string`

The type of key/certificate.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/service_principal_certificate.html#type ServicePrincipalCertificate#type}

---

### ServicePrincipalCertificateTimeouts <a name="@cdktf/provider-azuread.ServicePrincipalCertificateTimeouts"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ServicePrincipalCertificateTimeouts } from '@cdktf/provider-azuread'

const servicePrincipalCertificateTimeouts: ServicePrincipalCertificateTimeouts = { ... }
```

##### `create`<sup>Optional</sup> <a name="@cdktf/provider-azuread.ServicePrincipalCertificateTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* `string`

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/service_principal_certificate.html#create ServicePrincipalCertificate#create}.

---

##### `delete`<sup>Optional</sup> <a name="@cdktf/provider-azuread.ServicePrincipalCertificateTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* `string`

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/service_principal_certificate.html#delete ServicePrincipalCertificate#delete}.

---

##### `read`<sup>Optional</sup> <a name="@cdktf/provider-azuread.ServicePrincipalCertificateTimeouts.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* `string`

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/service_principal_certificate.html#read ServicePrincipalCertificate#read}.

---

##### `update`<sup>Optional</sup> <a name="@cdktf/provider-azuread.ServicePrincipalCertificateTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* `string`

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/service_principal_certificate.html#update ServicePrincipalCertificate#update}.

---

### ServicePrincipalConfig <a name="@cdktf/provider-azuread.ServicePrincipalConfig"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ServicePrincipalConfig } from '@cdktf/provider-azuread'

const servicePrincipalConfig: ServicePrincipalConfig = { ... }
```

##### `count`<sup>Optional</sup> <a name="@cdktf/provider-azuread.ServicePrincipalConfig.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* `number`

---

##### `dependsOn`<sup>Optional</sup> <a name="@cdktf/provider-azuread.ServicePrincipalConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* [`cdktf.ITerraformDependable`](#cdktf.ITerraformDependable)[]

---

##### `lifecycle`<sup>Optional</sup> <a name="@cdktf/provider-azuread.ServicePrincipalConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* [`cdktf.TerraformResourceLifecycle`](#cdktf.TerraformResourceLifecycle)

---

##### `provider`<sup>Optional</sup> <a name="@cdktf/provider-azuread.ServicePrincipalConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* [`cdktf.TerraformProvider`](#cdktf.TerraformProvider)

---

##### `applicationId`<sup>Required</sup> <a name="@cdktf/provider-azuread.ServicePrincipalConfig.property.applicationId"></a>

```typescript
public readonly applicationId: string;
```

- *Type:* `string`

The application ID (client ID) of the application for which to create a service principal.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/service_principal.html#application_id ServicePrincipal#application_id}

---

##### `accountEnabled`<sup>Optional</sup> <a name="@cdktf/provider-azuread.ServicePrincipalConfig.property.accountEnabled"></a>

```typescript
public readonly accountEnabled: boolean | IResolvable;
```

- *Type:* `boolean` | [`cdktf.IResolvable`](#cdktf.IResolvable)

Whether or not the service principal account is enabled.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/service_principal.html#account_enabled ServicePrincipal#account_enabled}

---

##### `alternativeNames`<sup>Optional</sup> <a name="@cdktf/provider-azuread.ServicePrincipalConfig.property.alternativeNames"></a>

```typescript
public readonly alternativeNames: string[];
```

- *Type:* `string`[]

A list of alternative names, used to retrieve service principals by subscription, identify resource group and full resource ids for managed identities.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/service_principal.html#alternative_names ServicePrincipal#alternative_names}

---

##### `appRoleAssignmentRequired`<sup>Optional</sup> <a name="@cdktf/provider-azuread.ServicePrincipalConfig.property.appRoleAssignmentRequired"></a>

```typescript
public readonly appRoleAssignmentRequired: boolean | IResolvable;
```

- *Type:* `boolean` | [`cdktf.IResolvable`](#cdktf.IResolvable)

Whether this service principal requires an app role assignment to a user or group before Azure AD will issue a user or access token to the application.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/service_principal.html#app_role_assignment_required ServicePrincipal#app_role_assignment_required}

---

##### `description`<sup>Optional</sup> <a name="@cdktf/provider-azuread.ServicePrincipalConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* `string`

Description of the service principal provided for internal end-users.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/service_principal.html#description ServicePrincipal#description}

---

##### `features`<sup>Optional</sup> <a name="@cdktf/provider-azuread.ServicePrincipalConfig.property.features"></a>

```typescript
public readonly features: ServicePrincipalFeatures[];
```

- *Type:* [`@cdktf/provider-azuread.ServicePrincipalFeatures`](#@cdktf/provider-azuread.ServicePrincipalFeatures)[]

features block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/service_principal.html#features ServicePrincipal#features}

---

##### `loginUrl`<sup>Optional</sup> <a name="@cdktf/provider-azuread.ServicePrincipalConfig.property.loginUrl"></a>

```typescript
public readonly loginUrl: string;
```

- *Type:* `string`

The URL where the service provider redirects the user to Azure AD to authenticate.

Azure AD uses the URL to launch the application from Microsoft 365 or the Azure AD My Apps. When blank, Azure AD performs IdP-initiated sign-on for applications configured with SAML-based single sign-on

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/service_principal.html#login_url ServicePrincipal#login_url}

---

##### `notes`<sup>Optional</sup> <a name="@cdktf/provider-azuread.ServicePrincipalConfig.property.notes"></a>

```typescript
public readonly notes: string;
```

- *Type:* `string`

Free text field to capture information about the service principal, typically used for operational purposes.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/service_principal.html#notes ServicePrincipal#notes}

---

##### `notificationEmailAddresses`<sup>Optional</sup> <a name="@cdktf/provider-azuread.ServicePrincipalConfig.property.notificationEmailAddresses"></a>

```typescript
public readonly notificationEmailAddresses: string[];
```

- *Type:* `string`[]

List of email addresses where Azure AD sends a notification when the active certificate is near the expiration date.

This is only for the certificates used to sign the SAML token issued for Azure AD Gallery applications

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/service_principal.html#notification_email_addresses ServicePrincipal#notification_email_addresses}

---

##### `owners`<sup>Optional</sup> <a name="@cdktf/provider-azuread.ServicePrincipalConfig.property.owners"></a>

```typescript
public readonly owners: string[];
```

- *Type:* `string`[]

A list of object IDs of principals that will be granted ownership of the service principal.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/service_principal.html#owners ServicePrincipal#owners}

---

##### `preferredSingleSignOnMode`<sup>Optional</sup> <a name="@cdktf/provider-azuread.ServicePrincipalConfig.property.preferredSingleSignOnMode"></a>

```typescript
public readonly preferredSingleSignOnMode: string;
```

- *Type:* `string`

The single sign-on mode configured for this application.

Azure AD uses the preferred single sign-on mode to launch the application from Microsoft 365 or the Azure AD My Apps

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/service_principal.html#preferred_single_sign_on_mode ServicePrincipal#preferred_single_sign_on_mode}

---

##### `samlSingleSignOn`<sup>Optional</sup> <a name="@cdktf/provider-azuread.ServicePrincipalConfig.property.samlSingleSignOn"></a>

```typescript
public readonly samlSingleSignOn: ServicePrincipalSamlSingleSignOn[];
```

- *Type:* [`@cdktf/provider-azuread.ServicePrincipalSamlSingleSignOn`](#@cdktf/provider-azuread.ServicePrincipalSamlSingleSignOn)[]

saml_single_sign_on block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/service_principal.html#saml_single_sign_on ServicePrincipal#saml_single_sign_on}

---

##### `tags`<sup>Optional</sup> <a name="@cdktf/provider-azuread.ServicePrincipalConfig.property.tags"></a>

```typescript
public readonly tags: string[];
```

- *Type:* `string`[]

A set of tags to apply to the service principal.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/service_principal.html#tags ServicePrincipal#tags}

---

##### `timeouts`<sup>Optional</sup> <a name="@cdktf/provider-azuread.ServicePrincipalConfig.property.timeouts"></a>

```typescript
public readonly timeouts: ServicePrincipalTimeouts;
```

- *Type:* [`@cdktf/provider-azuread.ServicePrincipalTimeouts`](#@cdktf/provider-azuread.ServicePrincipalTimeouts)

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/service_principal.html#timeouts ServicePrincipal#timeouts}

---

##### `useExisting`<sup>Optional</sup> <a name="@cdktf/provider-azuread.ServicePrincipalConfig.property.useExisting"></a>

```typescript
public readonly useExisting: boolean | IResolvable;
```

- *Type:* `boolean` | [`cdktf.IResolvable`](#cdktf.IResolvable)

When true, the resource will return an existing service principal instead of failing with an error.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/service_principal.html#use_existing ServicePrincipal#use_existing}

---

### ServicePrincipalFeatures <a name="@cdktf/provider-azuread.ServicePrincipalFeatures"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ServicePrincipalFeatures } from '@cdktf/provider-azuread'

const servicePrincipalFeatures: ServicePrincipalFeatures = { ... }
```

##### `customSingleSignOnApp`<sup>Optional</sup> <a name="@cdktf/provider-azuread.ServicePrincipalFeatures.property.customSingleSignOnApp"></a>

```typescript
public readonly customSingleSignOnApp: boolean | IResolvable;
```

- *Type:* `boolean` | [`cdktf.IResolvable`](#cdktf.IResolvable)

Whether this service principal represents a custom SAML application.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/service_principal.html#custom_single_sign_on_app ServicePrincipal#custom_single_sign_on_app}

---

##### `enterpriseApplication`<sup>Optional</sup> <a name="@cdktf/provider-azuread.ServicePrincipalFeatures.property.enterpriseApplication"></a>

```typescript
public readonly enterpriseApplication: boolean | IResolvable;
```

- *Type:* `boolean` | [`cdktf.IResolvable`](#cdktf.IResolvable)

Whether this service principal represents an Enterprise Application.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/service_principal.html#enterprise_application ServicePrincipal#enterprise_application}

---

##### `galleryApplication`<sup>Optional</sup> <a name="@cdktf/provider-azuread.ServicePrincipalFeatures.property.galleryApplication"></a>

```typescript
public readonly galleryApplication: boolean | IResolvable;
```

- *Type:* `boolean` | [`cdktf.IResolvable`](#cdktf.IResolvable)

Whether this service principal represents a gallery application.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/service_principal.html#gallery_application ServicePrincipal#gallery_application}

---

##### `visibleToUsers`<sup>Optional</sup> <a name="@cdktf/provider-azuread.ServicePrincipalFeatures.property.visibleToUsers"></a>

```typescript
public readonly visibleToUsers: boolean | IResolvable;
```

- *Type:* `boolean` | [`cdktf.IResolvable`](#cdktf.IResolvable)

Whether this app is visible to users in My Apps and Office 365 Launcher.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/service_principal.html#visible_to_users ServicePrincipal#visible_to_users}

---

### ServicePrincipalPasswordConfig <a name="@cdktf/provider-azuread.ServicePrincipalPasswordConfig"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ServicePrincipalPasswordConfig } from '@cdktf/provider-azuread'

const servicePrincipalPasswordConfig: ServicePrincipalPasswordConfig = { ... }
```

##### `count`<sup>Optional</sup> <a name="@cdktf/provider-azuread.ServicePrincipalPasswordConfig.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* `number`

---

##### `dependsOn`<sup>Optional</sup> <a name="@cdktf/provider-azuread.ServicePrincipalPasswordConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* [`cdktf.ITerraformDependable`](#cdktf.ITerraformDependable)[]

---

##### `lifecycle`<sup>Optional</sup> <a name="@cdktf/provider-azuread.ServicePrincipalPasswordConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* [`cdktf.TerraformResourceLifecycle`](#cdktf.TerraformResourceLifecycle)

---

##### `provider`<sup>Optional</sup> <a name="@cdktf/provider-azuread.ServicePrincipalPasswordConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* [`cdktf.TerraformProvider`](#cdktf.TerraformProvider)

---

##### `servicePrincipalId`<sup>Required</sup> <a name="@cdktf/provider-azuread.ServicePrincipalPasswordConfig.property.servicePrincipalId"></a>

```typescript
public readonly servicePrincipalId: string;
```

- *Type:* `string`

The object ID of the service principal for which this password should be created.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/service_principal_password.html#service_principal_id ServicePrincipalPassword#service_principal_id}

---

##### `rotateWhenChanged`<sup>Optional</sup> <a name="@cdktf/provider-azuread.ServicePrincipalPasswordConfig.property.rotateWhenChanged"></a>

```typescript
public readonly rotateWhenChanged: IResolvable | {[ key: string ]: string};
```

- *Type:* [`cdktf.IResolvable`](#cdktf.IResolvable) | {[ key: string ]: `string`}

Arbitrary map of values that, when changed, will trigger rotation of the password.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/service_principal_password.html#rotate_when_changed ServicePrincipalPassword#rotate_when_changed}

---

##### `timeouts`<sup>Optional</sup> <a name="@cdktf/provider-azuread.ServicePrincipalPasswordConfig.property.timeouts"></a>

```typescript
public readonly timeouts: ServicePrincipalPasswordTimeouts;
```

- *Type:* [`@cdktf/provider-azuread.ServicePrincipalPasswordTimeouts`](#@cdktf/provider-azuread.ServicePrincipalPasswordTimeouts)

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/service_principal_password.html#timeouts ServicePrincipalPassword#timeouts}

---

### ServicePrincipalPasswordTimeouts <a name="@cdktf/provider-azuread.ServicePrincipalPasswordTimeouts"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ServicePrincipalPasswordTimeouts } from '@cdktf/provider-azuread'

const servicePrincipalPasswordTimeouts: ServicePrincipalPasswordTimeouts = { ... }
```

##### `create`<sup>Optional</sup> <a name="@cdktf/provider-azuread.ServicePrincipalPasswordTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* `string`

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/service_principal_password.html#create ServicePrincipalPassword#create}.

---

##### `delete`<sup>Optional</sup> <a name="@cdktf/provider-azuread.ServicePrincipalPasswordTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* `string`

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/service_principal_password.html#delete ServicePrincipalPassword#delete}.

---

##### `read`<sup>Optional</sup> <a name="@cdktf/provider-azuread.ServicePrincipalPasswordTimeouts.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* `string`

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/service_principal_password.html#read ServicePrincipalPassword#read}.

---

##### `update`<sup>Optional</sup> <a name="@cdktf/provider-azuread.ServicePrincipalPasswordTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* `string`

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/service_principal_password.html#update ServicePrincipalPassword#update}.

---

### ServicePrincipalSamlSingleSignOn <a name="@cdktf/provider-azuread.ServicePrincipalSamlSingleSignOn"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ServicePrincipalSamlSingleSignOn } from '@cdktf/provider-azuread'

const servicePrincipalSamlSingleSignOn: ServicePrincipalSamlSingleSignOn = { ... }
```

##### `relayState`<sup>Optional</sup> <a name="@cdktf/provider-azuread.ServicePrincipalSamlSingleSignOn.property.relayState"></a>

```typescript
public readonly relayState: string;
```

- *Type:* `string`

The relative URI the service provider would redirect to after completion of the single sign-on flow.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/service_principal.html#relay_state ServicePrincipal#relay_state}

---

### ServicePrincipalTimeouts <a name="@cdktf/provider-azuread.ServicePrincipalTimeouts"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ServicePrincipalTimeouts } from '@cdktf/provider-azuread'

const servicePrincipalTimeouts: ServicePrincipalTimeouts = { ... }
```

##### `create`<sup>Optional</sup> <a name="@cdktf/provider-azuread.ServicePrincipalTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* `string`

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/service_principal.html#create ServicePrincipal#create}.

---

##### `delete`<sup>Optional</sup> <a name="@cdktf/provider-azuread.ServicePrincipalTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* `string`

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/service_principal.html#delete ServicePrincipal#delete}.

---

##### `read`<sup>Optional</sup> <a name="@cdktf/provider-azuread.ServicePrincipalTimeouts.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* `string`

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/service_principal.html#read ServicePrincipal#read}.

---

##### `update`<sup>Optional</sup> <a name="@cdktf/provider-azuread.ServicePrincipalTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* `string`

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/service_principal.html#update ServicePrincipal#update}.

---

### UserConfig <a name="@cdktf/provider-azuread.UserConfig"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { UserConfig } from '@cdktf/provider-azuread'

const userConfig: UserConfig = { ... }
```

##### `count`<sup>Optional</sup> <a name="@cdktf/provider-azuread.UserConfig.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* `number`

---

##### `dependsOn`<sup>Optional</sup> <a name="@cdktf/provider-azuread.UserConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* [`cdktf.ITerraformDependable`](#cdktf.ITerraformDependable)[]

---

##### `lifecycle`<sup>Optional</sup> <a name="@cdktf/provider-azuread.UserConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* [`cdktf.TerraformResourceLifecycle`](#cdktf.TerraformResourceLifecycle)

---

##### `provider`<sup>Optional</sup> <a name="@cdktf/provider-azuread.UserConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* [`cdktf.TerraformProvider`](#cdktf.TerraformProvider)

---

##### `displayName`<sup>Required</sup> <a name="@cdktf/provider-azuread.UserConfig.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* `string`

The name to display in the address book for the user.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/user.html#display_name User#display_name}

---

##### `userPrincipalName`<sup>Required</sup> <a name="@cdktf/provider-azuread.UserConfig.property.userPrincipalName"></a>

```typescript
public readonly userPrincipalName: string;
```

- *Type:* `string`

The user principal name (UPN) of the user.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/user.html#user_principal_name User#user_principal_name}

---

##### `accountEnabled`<sup>Optional</sup> <a name="@cdktf/provider-azuread.UserConfig.property.accountEnabled"></a>

```typescript
public readonly accountEnabled: boolean | IResolvable;
```

- *Type:* `boolean` | [`cdktf.IResolvable`](#cdktf.IResolvable)

Whether or not the account should be enabled.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/user.html#account_enabled User#account_enabled}

---

##### `ageGroup`<sup>Optional</sup> <a name="@cdktf/provider-azuread.UserConfig.property.ageGroup"></a>

```typescript
public readonly ageGroup: string;
```

- *Type:* `string`

The age group of the user.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/user.html#age_group User#age_group}

---

##### `businessPhones`<sup>Optional</sup> <a name="@cdktf/provider-azuread.UserConfig.property.businessPhones"></a>

```typescript
public readonly businessPhones: string[];
```

- *Type:* `string`[]

The telephone numbers for the user.

Only one number can be set for this property. Read-only for users synced with Azure AD Connect

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/user.html#business_phones User#business_phones}

---

##### `city`<sup>Optional</sup> <a name="@cdktf/provider-azuread.UserConfig.property.city"></a>

```typescript
public readonly city: string;
```

- *Type:* `string`

The city in which the user is located.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/user.html#city User#city}

---

##### `companyName`<sup>Optional</sup> <a name="@cdktf/provider-azuread.UserConfig.property.companyName"></a>

```typescript
public readonly companyName: string;
```

- *Type:* `string`

The company name which the user is associated.

This property can be useful for describing the company that an external user comes from

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/user.html#company_name User#company_name}

---

##### `consentProvidedForMinor`<sup>Optional</sup> <a name="@cdktf/provider-azuread.UserConfig.property.consentProvidedForMinor"></a>

```typescript
public readonly consentProvidedForMinor: string;
```

- *Type:* `string`

Whether consent has been obtained for minors.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/user.html#consent_provided_for_minor User#consent_provided_for_minor}

---

##### `country`<sup>Optional</sup> <a name="@cdktf/provider-azuread.UserConfig.property.country"></a>

```typescript
public readonly country: string;
```

- *Type:* `string`

The country/region in which the user is located, e.g. `US` or `UK`.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/user.html#country User#country}

---

##### `department`<sup>Optional</sup> <a name="@cdktf/provider-azuread.UserConfig.property.department"></a>

```typescript
public readonly department: string;
```

- *Type:* `string`

The name for the department in which the user works.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/user.html#department User#department}

---

##### `disablePasswordExpiration`<sup>Optional</sup> <a name="@cdktf/provider-azuread.UserConfig.property.disablePasswordExpiration"></a>

```typescript
public readonly disablePasswordExpiration: boolean | IResolvable;
```

- *Type:* `boolean` | [`cdktf.IResolvable`](#cdktf.IResolvable)

Whether the users password is exempt from expiring.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/user.html#disable_password_expiration User#disable_password_expiration}

---

##### `disableStrongPassword`<sup>Optional</sup> <a name="@cdktf/provider-azuread.UserConfig.property.disableStrongPassword"></a>

```typescript
public readonly disableStrongPassword: boolean | IResolvable;
```

- *Type:* `boolean` | [`cdktf.IResolvable`](#cdktf.IResolvable)

Whether the user is allowed weaker passwords than the default policy to be specified.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/user.html#disable_strong_password User#disable_strong_password}

---

##### `employeeId`<sup>Optional</sup> <a name="@cdktf/provider-azuread.UserConfig.property.employeeId"></a>

```typescript
public readonly employeeId: string;
```

- *Type:* `string`

The employee identifier assigned to the user by the organisation.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/user.html#employee_id User#employee_id}

---

##### `faxNumber`<sup>Optional</sup> <a name="@cdktf/provider-azuread.UserConfig.property.faxNumber"></a>

```typescript
public readonly faxNumber: string;
```

- *Type:* `string`

The fax number of the user.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/user.html#fax_number User#fax_number}

---

##### `forcePasswordChange`<sup>Optional</sup> <a name="@cdktf/provider-azuread.UserConfig.property.forcePasswordChange"></a>

```typescript
public readonly forcePasswordChange: boolean | IResolvable;
```

- *Type:* `boolean` | [`cdktf.IResolvable`](#cdktf.IResolvable)

Whether the user is forced to change the password during the next sign-in.

Only takes effect when also changing the password

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/user.html#force_password_change User#force_password_change}

---

##### `givenName`<sup>Optional</sup> <a name="@cdktf/provider-azuread.UserConfig.property.givenName"></a>

```typescript
public readonly givenName: string;
```

- *Type:* `string`

The given name (first name) of the user.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/user.html#given_name User#given_name}

---

##### `jobTitle`<sup>Optional</sup> <a name="@cdktf/provider-azuread.UserConfig.property.jobTitle"></a>

```typescript
public readonly jobTitle: string;
```

- *Type:* `string`

The user’s job title.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/user.html#job_title User#job_title}

---

##### `mail`<sup>Optional</sup> <a name="@cdktf/provider-azuread.UserConfig.property.mail"></a>

```typescript
public readonly mail: string;
```

- *Type:* `string`

The SMTP address for the user. Cannot be unset.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/user.html#mail User#mail}

---

##### `mailNickname`<sup>Optional</sup> <a name="@cdktf/provider-azuread.UserConfig.property.mailNickname"></a>

```typescript
public readonly mailNickname: string;
```

- *Type:* `string`

The mail alias for the user. Defaults to the user name part of the user principal name (UPN).

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/user.html#mail_nickname User#mail_nickname}

---

##### `mobilePhone`<sup>Optional</sup> <a name="@cdktf/provider-azuread.UserConfig.property.mobilePhone"></a>

```typescript
public readonly mobilePhone: string;
```

- *Type:* `string`

The primary cellular telephone number for the user.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/user.html#mobile_phone User#mobile_phone}

---

##### `officeLocation`<sup>Optional</sup> <a name="@cdktf/provider-azuread.UserConfig.property.officeLocation"></a>

```typescript
public readonly officeLocation: string;
```

- *Type:* `string`

The office location in the user's place of business.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/user.html#office_location User#office_location}

---

##### `onpremisesImmutableId`<sup>Optional</sup> <a name="@cdktf/provider-azuread.UserConfig.property.onpremisesImmutableId"></a>

```typescript
public readonly onpremisesImmutableId: string;
```

- *Type:* `string`

The value used to associate an on-premise Active Directory user account with their Azure AD user object.

This must be specified if you are using a federated domain for the user's `user_principal_name` property when creating a new user account

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/user.html#onpremises_immutable_id User#onpremises_immutable_id}

---

##### `otherMails`<sup>Optional</sup> <a name="@cdktf/provider-azuread.UserConfig.property.otherMails"></a>

```typescript
public readonly otherMails: string[];
```

- *Type:* `string`[]

Additional email addresses for the user.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/user.html#other_mails User#other_mails}

---

##### `password`<sup>Optional</sup> <a name="@cdktf/provider-azuread.UserConfig.property.password"></a>

```typescript
public readonly password: string;
```

- *Type:* `string`

The password for the user.

The password must satisfy minimum requirements as specified by the password policy. The maximum length is 256 characters. This property is required when creating a new user

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/user.html#password User#password}

---

##### `postalCode`<sup>Optional</sup> <a name="@cdktf/provider-azuread.UserConfig.property.postalCode"></a>

```typescript
public readonly postalCode: string;
```

- *Type:* `string`

The postal code for the user's postal address.

The postal code is specific to the user's country/region. In the United States of America, this attribute contains the ZIP code

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/user.html#postal_code User#postal_code}

---

##### `preferredLanguage`<sup>Optional</sup> <a name="@cdktf/provider-azuread.UserConfig.property.preferredLanguage"></a>

```typescript
public readonly preferredLanguage: string;
```

- *Type:* `string`

The user's preferred language, in ISO 639-1 notation.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/user.html#preferred_language User#preferred_language}

---

##### `showInAddressList`<sup>Optional</sup> <a name="@cdktf/provider-azuread.UserConfig.property.showInAddressList"></a>

```typescript
public readonly showInAddressList: boolean | IResolvable;
```

- *Type:* `boolean` | [`cdktf.IResolvable`](#cdktf.IResolvable)

Whether or not the Outlook global address list should include this user.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/user.html#show_in_address_list User#show_in_address_list}

---

##### `state`<sup>Optional</sup> <a name="@cdktf/provider-azuread.UserConfig.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* `string`

The state or province in the user's address.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/user.html#state User#state}

---

##### `streetAddress`<sup>Optional</sup> <a name="@cdktf/provider-azuread.UserConfig.property.streetAddress"></a>

```typescript
public readonly streetAddress: string;
```

- *Type:* `string`

The street address of the user's place of business.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/user.html#street_address User#street_address}

---

##### `surname`<sup>Optional</sup> <a name="@cdktf/provider-azuread.UserConfig.property.surname"></a>

```typescript
public readonly surname: string;
```

- *Type:* `string`

The user's surname (family name or last name).

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/user.html#surname User#surname}

---

##### `timeouts`<sup>Optional</sup> <a name="@cdktf/provider-azuread.UserConfig.property.timeouts"></a>

```typescript
public readonly timeouts: UserTimeouts;
```

- *Type:* [`@cdktf/provider-azuread.UserTimeouts`](#@cdktf/provider-azuread.UserTimeouts)

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/user.html#timeouts User#timeouts}

---

##### `usageLocation`<sup>Optional</sup> <a name="@cdktf/provider-azuread.UserConfig.property.usageLocation"></a>

```typescript
public readonly usageLocation: string;
```

- *Type:* `string`

The usage location of the user.

Required for users that will be assigned licenses due to legal requirement to check for availability of services in countries. The usage location is a two letter country code (ISO standard 3166). Examples include: `NO`, `JP`, and `GB`. Cannot be reset to null once set

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/user.html#usage_location User#usage_location}

---

### UserTimeouts <a name="@cdktf/provider-azuread.UserTimeouts"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { UserTimeouts } from '@cdktf/provider-azuread'

const userTimeouts: UserTimeouts = { ... }
```

##### `create`<sup>Optional</sup> <a name="@cdktf/provider-azuread.UserTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* `string`

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/user.html#create User#create}.

---

##### `delete`<sup>Optional</sup> <a name="@cdktf/provider-azuread.UserTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* `string`

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/user.html#delete User#delete}.

---

##### `read`<sup>Optional</sup> <a name="@cdktf/provider-azuread.UserTimeouts.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* `string`

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/user.html#read User#read}.

---

##### `update`<sup>Optional</sup> <a name="@cdktf/provider-azuread.UserTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* `string`

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/user.html#update User#update}.

---

## Classes <a name="Classes"></a>

### DataAzureadApplicationApi <a name="@cdktf/provider-azuread.DataAzureadApplicationApi"></a>

#### Initializers <a name="@cdktf/provider-azuread.DataAzureadApplicationApi.Initializer"></a>

```typescript
import { DataAzureadApplicationApi } from '@cdktf/provider-azuread'

new DataAzureadApplicationApi(terraformResource: ITerraformResource, terraformAttribute: string, complexComputedListIndex: string)
```

##### `terraformResource`<sup>Required</sup> <a name="@cdktf/provider-azuread.DataAzureadApplicationApi.parameter.terraformResource"></a>

- *Type:* [`cdktf.ITerraformResource`](#cdktf.ITerraformResource)

---

##### `terraformAttribute`<sup>Required</sup> <a name="@cdktf/provider-azuread.DataAzureadApplicationApi.parameter.terraformAttribute"></a>

- *Type:* `string`

---

##### `complexComputedListIndex`<sup>Required</sup> <a name="@cdktf/provider-azuread.DataAzureadApplicationApi.parameter.complexComputedListIndex"></a>

- *Type:* `string`

---



#### Properties <a name="Properties"></a>

##### `knownClientApplications`<sup>Required</sup> <a name="@cdktf/provider-azuread.DataAzureadApplicationApi.property.knownClientApplications"></a>

```typescript
public readonly knownClientApplications: string[];
```

- *Type:* `string`[]

---

##### `mappedClaimsEnabled`<sup>Required</sup> <a name="@cdktf/provider-azuread.DataAzureadApplicationApi.property.mappedClaimsEnabled"></a>

```typescript
public readonly mappedClaimsEnabled: any;
```

- *Type:* `any`

---

##### `oauth2PermissionScopes`<sup>Required</sup> <a name="@cdktf/provider-azuread.DataAzureadApplicationApi.property.oauth2PermissionScopes"></a>

```typescript
public readonly oauth2PermissionScopes: any;
```

- *Type:* `any`

---

##### `requestedAccessTokenVersion`<sup>Required</sup> <a name="@cdktf/provider-azuread.DataAzureadApplicationApi.property.requestedAccessTokenVersion"></a>

```typescript
public readonly requestedAccessTokenVersion: number;
```

- *Type:* `number`

---


### DataAzureadApplicationApiOauth2PermissionScopes <a name="@cdktf/provider-azuread.DataAzureadApplicationApiOauth2PermissionScopes"></a>

#### Initializers <a name="@cdktf/provider-azuread.DataAzureadApplicationApiOauth2PermissionScopes.Initializer"></a>

```typescript
import { DataAzureadApplicationApiOauth2PermissionScopes } from '@cdktf/provider-azuread'

new DataAzureadApplicationApiOauth2PermissionScopes(terraformResource: ITerraformResource, terraformAttribute: string, complexComputedListIndex: string)
```

##### `terraformResource`<sup>Required</sup> <a name="@cdktf/provider-azuread.DataAzureadApplicationApiOauth2PermissionScopes.parameter.terraformResource"></a>

- *Type:* [`cdktf.ITerraformResource`](#cdktf.ITerraformResource)

---

##### `terraformAttribute`<sup>Required</sup> <a name="@cdktf/provider-azuread.DataAzureadApplicationApiOauth2PermissionScopes.parameter.terraformAttribute"></a>

- *Type:* `string`

---

##### `complexComputedListIndex`<sup>Required</sup> <a name="@cdktf/provider-azuread.DataAzureadApplicationApiOauth2PermissionScopes.parameter.complexComputedListIndex"></a>

- *Type:* `string`

---



#### Properties <a name="Properties"></a>

##### `adminConsentDescription`<sup>Required</sup> <a name="@cdktf/provider-azuread.DataAzureadApplicationApiOauth2PermissionScopes.property.adminConsentDescription"></a>

```typescript
public readonly adminConsentDescription: string;
```

- *Type:* `string`

---

##### `adminConsentDisplayName`<sup>Required</sup> <a name="@cdktf/provider-azuread.DataAzureadApplicationApiOauth2PermissionScopes.property.adminConsentDisplayName"></a>

```typescript
public readonly adminConsentDisplayName: string;
```

- *Type:* `string`

---

##### `enabled`<sup>Required</sup> <a name="@cdktf/provider-azuread.DataAzureadApplicationApiOauth2PermissionScopes.property.enabled"></a>

```typescript
public readonly enabled: any;
```

- *Type:* `any`

---

##### `id`<sup>Required</sup> <a name="@cdktf/provider-azuread.DataAzureadApplicationApiOauth2PermissionScopes.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* `string`

---

##### `type`<sup>Required</sup> <a name="@cdktf/provider-azuread.DataAzureadApplicationApiOauth2PermissionScopes.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* `string`

---

##### `userConsentDescription`<sup>Required</sup> <a name="@cdktf/provider-azuread.DataAzureadApplicationApiOauth2PermissionScopes.property.userConsentDescription"></a>

```typescript
public readonly userConsentDescription: string;
```

- *Type:* `string`

---

##### `userConsentDisplayName`<sup>Required</sup> <a name="@cdktf/provider-azuread.DataAzureadApplicationApiOauth2PermissionScopes.property.userConsentDisplayName"></a>

```typescript
public readonly userConsentDisplayName: string;
```

- *Type:* `string`

---

##### `value`<sup>Required</sup> <a name="@cdktf/provider-azuread.DataAzureadApplicationApiOauth2PermissionScopes.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* `string`

---


### DataAzureadApplicationAppRoles <a name="@cdktf/provider-azuread.DataAzureadApplicationAppRoles"></a>

#### Initializers <a name="@cdktf/provider-azuread.DataAzureadApplicationAppRoles.Initializer"></a>

```typescript
import { DataAzureadApplicationAppRoles } from '@cdktf/provider-azuread'

new DataAzureadApplicationAppRoles(terraformResource: ITerraformResource, terraformAttribute: string, complexComputedListIndex: string)
```

##### `terraformResource`<sup>Required</sup> <a name="@cdktf/provider-azuread.DataAzureadApplicationAppRoles.parameter.terraformResource"></a>

- *Type:* [`cdktf.ITerraformResource`](#cdktf.ITerraformResource)

---

##### `terraformAttribute`<sup>Required</sup> <a name="@cdktf/provider-azuread.DataAzureadApplicationAppRoles.parameter.terraformAttribute"></a>

- *Type:* `string`

---

##### `complexComputedListIndex`<sup>Required</sup> <a name="@cdktf/provider-azuread.DataAzureadApplicationAppRoles.parameter.complexComputedListIndex"></a>

- *Type:* `string`

---



#### Properties <a name="Properties"></a>

##### `allowedMemberTypes`<sup>Required</sup> <a name="@cdktf/provider-azuread.DataAzureadApplicationAppRoles.property.allowedMemberTypes"></a>

```typescript
public readonly allowedMemberTypes: string[];
```

- *Type:* `string`[]

---

##### `description`<sup>Required</sup> <a name="@cdktf/provider-azuread.DataAzureadApplicationAppRoles.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* `string`

---

##### `displayName`<sup>Required</sup> <a name="@cdktf/provider-azuread.DataAzureadApplicationAppRoles.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* `string`

---

##### `enabled`<sup>Required</sup> <a name="@cdktf/provider-azuread.DataAzureadApplicationAppRoles.property.enabled"></a>

```typescript
public readonly enabled: any;
```

- *Type:* `any`

---

##### `id`<sup>Required</sup> <a name="@cdktf/provider-azuread.DataAzureadApplicationAppRoles.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* `string`

---

##### `value`<sup>Required</sup> <a name="@cdktf/provider-azuread.DataAzureadApplicationAppRoles.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* `string`

---


### DataAzureadApplicationOptionalClaims <a name="@cdktf/provider-azuread.DataAzureadApplicationOptionalClaims"></a>

#### Initializers <a name="@cdktf/provider-azuread.DataAzureadApplicationOptionalClaims.Initializer"></a>

```typescript
import { DataAzureadApplicationOptionalClaims } from '@cdktf/provider-azuread'

new DataAzureadApplicationOptionalClaims(terraformResource: ITerraformResource, terraformAttribute: string, complexComputedListIndex: string)
```

##### `terraformResource`<sup>Required</sup> <a name="@cdktf/provider-azuread.DataAzureadApplicationOptionalClaims.parameter.terraformResource"></a>

- *Type:* [`cdktf.ITerraformResource`](#cdktf.ITerraformResource)

---

##### `terraformAttribute`<sup>Required</sup> <a name="@cdktf/provider-azuread.DataAzureadApplicationOptionalClaims.parameter.terraformAttribute"></a>

- *Type:* `string`

---

##### `complexComputedListIndex`<sup>Required</sup> <a name="@cdktf/provider-azuread.DataAzureadApplicationOptionalClaims.parameter.complexComputedListIndex"></a>

- *Type:* `string`

---



#### Properties <a name="Properties"></a>

##### `accessToken`<sup>Required</sup> <a name="@cdktf/provider-azuread.DataAzureadApplicationOptionalClaims.property.accessToken"></a>

```typescript
public readonly accessToken: any;
```

- *Type:* `any`

---

##### `idToken`<sup>Required</sup> <a name="@cdktf/provider-azuread.DataAzureadApplicationOptionalClaims.property.idToken"></a>

```typescript
public readonly idToken: any;
```

- *Type:* `any`

---

##### `saml2Token`<sup>Required</sup> <a name="@cdktf/provider-azuread.DataAzureadApplicationOptionalClaims.property.saml2Token"></a>

```typescript
public readonly saml2Token: any;
```

- *Type:* `any`

---


### DataAzureadApplicationOptionalClaimsAccessToken <a name="@cdktf/provider-azuread.DataAzureadApplicationOptionalClaimsAccessToken"></a>

#### Initializers <a name="@cdktf/provider-azuread.DataAzureadApplicationOptionalClaimsAccessToken.Initializer"></a>

```typescript
import { DataAzureadApplicationOptionalClaimsAccessToken } from '@cdktf/provider-azuread'

new DataAzureadApplicationOptionalClaimsAccessToken(terraformResource: ITerraformResource, terraformAttribute: string, complexComputedListIndex: string)
```

##### `terraformResource`<sup>Required</sup> <a name="@cdktf/provider-azuread.DataAzureadApplicationOptionalClaimsAccessToken.parameter.terraformResource"></a>

- *Type:* [`cdktf.ITerraformResource`](#cdktf.ITerraformResource)

---

##### `terraformAttribute`<sup>Required</sup> <a name="@cdktf/provider-azuread.DataAzureadApplicationOptionalClaimsAccessToken.parameter.terraformAttribute"></a>

- *Type:* `string`

---

##### `complexComputedListIndex`<sup>Required</sup> <a name="@cdktf/provider-azuread.DataAzureadApplicationOptionalClaimsAccessToken.parameter.complexComputedListIndex"></a>

- *Type:* `string`

---



#### Properties <a name="Properties"></a>

##### `additionalProperties`<sup>Required</sup> <a name="@cdktf/provider-azuread.DataAzureadApplicationOptionalClaimsAccessToken.property.additionalProperties"></a>

```typescript
public readonly additionalProperties: string[];
```

- *Type:* `string`[]

---

##### `essential`<sup>Required</sup> <a name="@cdktf/provider-azuread.DataAzureadApplicationOptionalClaimsAccessToken.property.essential"></a>

```typescript
public readonly essential: any;
```

- *Type:* `any`

---

##### `name`<sup>Required</sup> <a name="@cdktf/provider-azuread.DataAzureadApplicationOptionalClaimsAccessToken.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* `string`

---

##### `source`<sup>Required</sup> <a name="@cdktf/provider-azuread.DataAzureadApplicationOptionalClaimsAccessToken.property.source"></a>

```typescript
public readonly source: string;
```

- *Type:* `string`

---


### DataAzureadApplicationOptionalClaimsIdToken <a name="@cdktf/provider-azuread.DataAzureadApplicationOptionalClaimsIdToken"></a>

#### Initializers <a name="@cdktf/provider-azuread.DataAzureadApplicationOptionalClaimsIdToken.Initializer"></a>

```typescript
import { DataAzureadApplicationOptionalClaimsIdToken } from '@cdktf/provider-azuread'

new DataAzureadApplicationOptionalClaimsIdToken(terraformResource: ITerraformResource, terraformAttribute: string, complexComputedListIndex: string)
```

##### `terraformResource`<sup>Required</sup> <a name="@cdktf/provider-azuread.DataAzureadApplicationOptionalClaimsIdToken.parameter.terraformResource"></a>

- *Type:* [`cdktf.ITerraformResource`](#cdktf.ITerraformResource)

---

##### `terraformAttribute`<sup>Required</sup> <a name="@cdktf/provider-azuread.DataAzureadApplicationOptionalClaimsIdToken.parameter.terraformAttribute"></a>

- *Type:* `string`

---

##### `complexComputedListIndex`<sup>Required</sup> <a name="@cdktf/provider-azuread.DataAzureadApplicationOptionalClaimsIdToken.parameter.complexComputedListIndex"></a>

- *Type:* `string`

---



#### Properties <a name="Properties"></a>

##### `additionalProperties`<sup>Required</sup> <a name="@cdktf/provider-azuread.DataAzureadApplicationOptionalClaimsIdToken.property.additionalProperties"></a>

```typescript
public readonly additionalProperties: string[];
```

- *Type:* `string`[]

---

##### `essential`<sup>Required</sup> <a name="@cdktf/provider-azuread.DataAzureadApplicationOptionalClaimsIdToken.property.essential"></a>

```typescript
public readonly essential: any;
```

- *Type:* `any`

---

##### `name`<sup>Required</sup> <a name="@cdktf/provider-azuread.DataAzureadApplicationOptionalClaimsIdToken.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* `string`

---

##### `source`<sup>Required</sup> <a name="@cdktf/provider-azuread.DataAzureadApplicationOptionalClaimsIdToken.property.source"></a>

```typescript
public readonly source: string;
```

- *Type:* `string`

---


### DataAzureadApplicationOptionalClaimsSaml2Token <a name="@cdktf/provider-azuread.DataAzureadApplicationOptionalClaimsSaml2Token"></a>

#### Initializers <a name="@cdktf/provider-azuread.DataAzureadApplicationOptionalClaimsSaml2Token.Initializer"></a>

```typescript
import { DataAzureadApplicationOptionalClaimsSaml2Token } from '@cdktf/provider-azuread'

new DataAzureadApplicationOptionalClaimsSaml2Token(terraformResource: ITerraformResource, terraformAttribute: string, complexComputedListIndex: string)
```

##### `terraformResource`<sup>Required</sup> <a name="@cdktf/provider-azuread.DataAzureadApplicationOptionalClaimsSaml2Token.parameter.terraformResource"></a>

- *Type:* [`cdktf.ITerraformResource`](#cdktf.ITerraformResource)

---

##### `terraformAttribute`<sup>Required</sup> <a name="@cdktf/provider-azuread.DataAzureadApplicationOptionalClaimsSaml2Token.parameter.terraformAttribute"></a>

- *Type:* `string`

---

##### `complexComputedListIndex`<sup>Required</sup> <a name="@cdktf/provider-azuread.DataAzureadApplicationOptionalClaimsSaml2Token.parameter.complexComputedListIndex"></a>

- *Type:* `string`

---



#### Properties <a name="Properties"></a>

##### `additionalProperties`<sup>Required</sup> <a name="@cdktf/provider-azuread.DataAzureadApplicationOptionalClaimsSaml2Token.property.additionalProperties"></a>

```typescript
public readonly additionalProperties: string[];
```

- *Type:* `string`[]

---

##### `essential`<sup>Required</sup> <a name="@cdktf/provider-azuread.DataAzureadApplicationOptionalClaimsSaml2Token.property.essential"></a>

```typescript
public readonly essential: any;
```

- *Type:* `any`

---

##### `name`<sup>Required</sup> <a name="@cdktf/provider-azuread.DataAzureadApplicationOptionalClaimsSaml2Token.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* `string`

---

##### `source`<sup>Required</sup> <a name="@cdktf/provider-azuread.DataAzureadApplicationOptionalClaimsSaml2Token.property.source"></a>

```typescript
public readonly source: string;
```

- *Type:* `string`

---


### DataAzureadApplicationPublicClient <a name="@cdktf/provider-azuread.DataAzureadApplicationPublicClient"></a>

#### Initializers <a name="@cdktf/provider-azuread.DataAzureadApplicationPublicClient.Initializer"></a>

```typescript
import { DataAzureadApplicationPublicClient } from '@cdktf/provider-azuread'

new DataAzureadApplicationPublicClient(terraformResource: ITerraformResource, terraformAttribute: string, complexComputedListIndex: string)
```

##### `terraformResource`<sup>Required</sup> <a name="@cdktf/provider-azuread.DataAzureadApplicationPublicClient.parameter.terraformResource"></a>

- *Type:* [`cdktf.ITerraformResource`](#cdktf.ITerraformResource)

---

##### `terraformAttribute`<sup>Required</sup> <a name="@cdktf/provider-azuread.DataAzureadApplicationPublicClient.parameter.terraformAttribute"></a>

- *Type:* `string`

---

##### `complexComputedListIndex`<sup>Required</sup> <a name="@cdktf/provider-azuread.DataAzureadApplicationPublicClient.parameter.complexComputedListIndex"></a>

- *Type:* `string`

---



#### Properties <a name="Properties"></a>

##### `redirectUris`<sup>Required</sup> <a name="@cdktf/provider-azuread.DataAzureadApplicationPublicClient.property.redirectUris"></a>

```typescript
public readonly redirectUris: string[];
```

- *Type:* `string`[]

---


### DataAzureadApplicationRequiredResourceAccess <a name="@cdktf/provider-azuread.DataAzureadApplicationRequiredResourceAccess"></a>

#### Initializers <a name="@cdktf/provider-azuread.DataAzureadApplicationRequiredResourceAccess.Initializer"></a>

```typescript
import { DataAzureadApplicationRequiredResourceAccess } from '@cdktf/provider-azuread'

new DataAzureadApplicationRequiredResourceAccess(terraformResource: ITerraformResource, terraformAttribute: string, complexComputedListIndex: string)
```

##### `terraformResource`<sup>Required</sup> <a name="@cdktf/provider-azuread.DataAzureadApplicationRequiredResourceAccess.parameter.terraformResource"></a>

- *Type:* [`cdktf.ITerraformResource`](#cdktf.ITerraformResource)

---

##### `terraformAttribute`<sup>Required</sup> <a name="@cdktf/provider-azuread.DataAzureadApplicationRequiredResourceAccess.parameter.terraformAttribute"></a>

- *Type:* `string`

---

##### `complexComputedListIndex`<sup>Required</sup> <a name="@cdktf/provider-azuread.DataAzureadApplicationRequiredResourceAccess.parameter.complexComputedListIndex"></a>

- *Type:* `string`

---



#### Properties <a name="Properties"></a>

##### `resourceAccess`<sup>Required</sup> <a name="@cdktf/provider-azuread.DataAzureadApplicationRequiredResourceAccess.property.resourceAccess"></a>

```typescript
public readonly resourceAccess: any;
```

- *Type:* `any`

---

##### `resourceAppId`<sup>Required</sup> <a name="@cdktf/provider-azuread.DataAzureadApplicationRequiredResourceAccess.property.resourceAppId"></a>

```typescript
public readonly resourceAppId: string;
```

- *Type:* `string`

---


### DataAzureadApplicationRequiredResourceAccessResourceAccess <a name="@cdktf/provider-azuread.DataAzureadApplicationRequiredResourceAccessResourceAccess"></a>

#### Initializers <a name="@cdktf/provider-azuread.DataAzureadApplicationRequiredResourceAccessResourceAccess.Initializer"></a>

```typescript
import { DataAzureadApplicationRequiredResourceAccessResourceAccess } from '@cdktf/provider-azuread'

new DataAzureadApplicationRequiredResourceAccessResourceAccess(terraformResource: ITerraformResource, terraformAttribute: string, complexComputedListIndex: string)
```

##### `terraformResource`<sup>Required</sup> <a name="@cdktf/provider-azuread.DataAzureadApplicationRequiredResourceAccessResourceAccess.parameter.terraformResource"></a>

- *Type:* [`cdktf.ITerraformResource`](#cdktf.ITerraformResource)

---

##### `terraformAttribute`<sup>Required</sup> <a name="@cdktf/provider-azuread.DataAzureadApplicationRequiredResourceAccessResourceAccess.parameter.terraformAttribute"></a>

- *Type:* `string`

---

##### `complexComputedListIndex`<sup>Required</sup> <a name="@cdktf/provider-azuread.DataAzureadApplicationRequiredResourceAccessResourceAccess.parameter.complexComputedListIndex"></a>

- *Type:* `string`

---



#### Properties <a name="Properties"></a>

##### `id`<sup>Required</sup> <a name="@cdktf/provider-azuread.DataAzureadApplicationRequiredResourceAccessResourceAccess.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* `string`

---

##### `type`<sup>Required</sup> <a name="@cdktf/provider-azuread.DataAzureadApplicationRequiredResourceAccessResourceAccess.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* `string`

---


### DataAzureadApplicationSinglePageApplication <a name="@cdktf/provider-azuread.DataAzureadApplicationSinglePageApplication"></a>

#### Initializers <a name="@cdktf/provider-azuread.DataAzureadApplicationSinglePageApplication.Initializer"></a>

```typescript
import { DataAzureadApplicationSinglePageApplication } from '@cdktf/provider-azuread'

new DataAzureadApplicationSinglePageApplication(terraformResource: ITerraformResource, terraformAttribute: string, complexComputedListIndex: string)
```

##### `terraformResource`<sup>Required</sup> <a name="@cdktf/provider-azuread.DataAzureadApplicationSinglePageApplication.parameter.terraformResource"></a>

- *Type:* [`cdktf.ITerraformResource`](#cdktf.ITerraformResource)

---

##### `terraformAttribute`<sup>Required</sup> <a name="@cdktf/provider-azuread.DataAzureadApplicationSinglePageApplication.parameter.terraformAttribute"></a>

- *Type:* `string`

---

##### `complexComputedListIndex`<sup>Required</sup> <a name="@cdktf/provider-azuread.DataAzureadApplicationSinglePageApplication.parameter.complexComputedListIndex"></a>

- *Type:* `string`

---



#### Properties <a name="Properties"></a>

##### `redirectUris`<sup>Required</sup> <a name="@cdktf/provider-azuread.DataAzureadApplicationSinglePageApplication.property.redirectUris"></a>

```typescript
public readonly redirectUris: string[];
```

- *Type:* `string`[]

---


### DataAzureadApplicationWeb <a name="@cdktf/provider-azuread.DataAzureadApplicationWeb"></a>

#### Initializers <a name="@cdktf/provider-azuread.DataAzureadApplicationWeb.Initializer"></a>

```typescript
import { DataAzureadApplicationWeb } from '@cdktf/provider-azuread'

new DataAzureadApplicationWeb(terraformResource: ITerraformResource, terraformAttribute: string, complexComputedListIndex: string)
```

##### `terraformResource`<sup>Required</sup> <a name="@cdktf/provider-azuread.DataAzureadApplicationWeb.parameter.terraformResource"></a>

- *Type:* [`cdktf.ITerraformResource`](#cdktf.ITerraformResource)

---

##### `terraformAttribute`<sup>Required</sup> <a name="@cdktf/provider-azuread.DataAzureadApplicationWeb.parameter.terraformAttribute"></a>

- *Type:* `string`

---

##### `complexComputedListIndex`<sup>Required</sup> <a name="@cdktf/provider-azuread.DataAzureadApplicationWeb.parameter.complexComputedListIndex"></a>

- *Type:* `string`

---



#### Properties <a name="Properties"></a>

##### `homepageUrl`<sup>Required</sup> <a name="@cdktf/provider-azuread.DataAzureadApplicationWeb.property.homepageUrl"></a>

```typescript
public readonly homepageUrl: string;
```

- *Type:* `string`

---

##### `implicitGrant`<sup>Required</sup> <a name="@cdktf/provider-azuread.DataAzureadApplicationWeb.property.implicitGrant"></a>

```typescript
public readonly implicitGrant: any;
```

- *Type:* `any`

---

##### `logoutUrl`<sup>Required</sup> <a name="@cdktf/provider-azuread.DataAzureadApplicationWeb.property.logoutUrl"></a>

```typescript
public readonly logoutUrl: string;
```

- *Type:* `string`

---

##### `redirectUris`<sup>Required</sup> <a name="@cdktf/provider-azuread.DataAzureadApplicationWeb.property.redirectUris"></a>

```typescript
public readonly redirectUris: string[];
```

- *Type:* `string`[]

---


### DataAzureadApplicationWebImplicitGrant <a name="@cdktf/provider-azuread.DataAzureadApplicationWebImplicitGrant"></a>

#### Initializers <a name="@cdktf/provider-azuread.DataAzureadApplicationWebImplicitGrant.Initializer"></a>

```typescript
import { DataAzureadApplicationWebImplicitGrant } from '@cdktf/provider-azuread'

new DataAzureadApplicationWebImplicitGrant(terraformResource: ITerraformResource, terraformAttribute: string, complexComputedListIndex: string)
```

##### `terraformResource`<sup>Required</sup> <a name="@cdktf/provider-azuread.DataAzureadApplicationWebImplicitGrant.parameter.terraformResource"></a>

- *Type:* [`cdktf.ITerraformResource`](#cdktf.ITerraformResource)

---

##### `terraformAttribute`<sup>Required</sup> <a name="@cdktf/provider-azuread.DataAzureadApplicationWebImplicitGrant.parameter.terraformAttribute"></a>

- *Type:* `string`

---

##### `complexComputedListIndex`<sup>Required</sup> <a name="@cdktf/provider-azuread.DataAzureadApplicationWebImplicitGrant.parameter.complexComputedListIndex"></a>

- *Type:* `string`

---



#### Properties <a name="Properties"></a>

##### `accessTokenIssuanceEnabled`<sup>Required</sup> <a name="@cdktf/provider-azuread.DataAzureadApplicationWebImplicitGrant.property.accessTokenIssuanceEnabled"></a>

```typescript
public readonly accessTokenIssuanceEnabled: any;
```

- *Type:* `any`

---

##### `idTokenIssuanceEnabled`<sup>Required</sup> <a name="@cdktf/provider-azuread.DataAzureadApplicationWebImplicitGrant.property.idTokenIssuanceEnabled"></a>

```typescript
public readonly idTokenIssuanceEnabled: any;
```

- *Type:* `any`

---


### DataAzureadDomainsDomains <a name="@cdktf/provider-azuread.DataAzureadDomainsDomains"></a>

#### Initializers <a name="@cdktf/provider-azuread.DataAzureadDomainsDomains.Initializer"></a>

```typescript
import { DataAzureadDomainsDomains } from '@cdktf/provider-azuread'

new DataAzureadDomainsDomains(terraformResource: ITerraformResource, terraformAttribute: string, complexComputedListIndex: string)
```

##### `terraformResource`<sup>Required</sup> <a name="@cdktf/provider-azuread.DataAzureadDomainsDomains.parameter.terraformResource"></a>

- *Type:* [`cdktf.ITerraformResource`](#cdktf.ITerraformResource)

---

##### `terraformAttribute`<sup>Required</sup> <a name="@cdktf/provider-azuread.DataAzureadDomainsDomains.parameter.terraformAttribute"></a>

- *Type:* `string`

---

##### `complexComputedListIndex`<sup>Required</sup> <a name="@cdktf/provider-azuread.DataAzureadDomainsDomains.parameter.complexComputedListIndex"></a>

- *Type:* `string`

---



#### Properties <a name="Properties"></a>

##### `adminManaged`<sup>Required</sup> <a name="@cdktf/provider-azuread.DataAzureadDomainsDomains.property.adminManaged"></a>

```typescript
public readonly adminManaged: any;
```

- *Type:* `any`

---

##### `authenticationType`<sup>Required</sup> <a name="@cdktf/provider-azuread.DataAzureadDomainsDomains.property.authenticationType"></a>

```typescript
public readonly authenticationType: string;
```

- *Type:* `string`

---

##### `default`<sup>Required</sup> <a name="@cdktf/provider-azuread.DataAzureadDomainsDomains.property.default"></a>

```typescript
public readonly default: any;
```

- *Type:* `any`

---

##### `domainName`<sup>Required</sup> <a name="@cdktf/provider-azuread.DataAzureadDomainsDomains.property.domainName"></a>

```typescript
public readonly domainName: string;
```

- *Type:* `string`

---

##### `initial`<sup>Required</sup> <a name="@cdktf/provider-azuread.DataAzureadDomainsDomains.property.initial"></a>

```typescript
public readonly initial: any;
```

- *Type:* `any`

---

##### `root`<sup>Required</sup> <a name="@cdktf/provider-azuread.DataAzureadDomainsDomains.property.root"></a>

```typescript
public readonly root: any;
```

- *Type:* `any`

---

##### `supportedServices`<sup>Required</sup> <a name="@cdktf/provider-azuread.DataAzureadDomainsDomains.property.supportedServices"></a>

```typescript
public readonly supportedServices: string[];
```

- *Type:* `string`[]

---

##### `verified`<sup>Required</sup> <a name="@cdktf/provider-azuread.DataAzureadDomainsDomains.property.verified"></a>

```typescript
public readonly verified: any;
```

- *Type:* `any`

---


### DataAzureadServicePrincipalAppRoles <a name="@cdktf/provider-azuread.DataAzureadServicePrincipalAppRoles"></a>

#### Initializers <a name="@cdktf/provider-azuread.DataAzureadServicePrincipalAppRoles.Initializer"></a>

```typescript
import { DataAzureadServicePrincipalAppRoles } from '@cdktf/provider-azuread'

new DataAzureadServicePrincipalAppRoles(terraformResource: ITerraformResource, terraformAttribute: string, complexComputedListIndex: string)
```

##### `terraformResource`<sup>Required</sup> <a name="@cdktf/provider-azuread.DataAzureadServicePrincipalAppRoles.parameter.terraformResource"></a>

- *Type:* [`cdktf.ITerraformResource`](#cdktf.ITerraformResource)

---

##### `terraformAttribute`<sup>Required</sup> <a name="@cdktf/provider-azuread.DataAzureadServicePrincipalAppRoles.parameter.terraformAttribute"></a>

- *Type:* `string`

---

##### `complexComputedListIndex`<sup>Required</sup> <a name="@cdktf/provider-azuread.DataAzureadServicePrincipalAppRoles.parameter.complexComputedListIndex"></a>

- *Type:* `string`

---



#### Properties <a name="Properties"></a>

##### `allowedMemberTypes`<sup>Required</sup> <a name="@cdktf/provider-azuread.DataAzureadServicePrincipalAppRoles.property.allowedMemberTypes"></a>

```typescript
public readonly allowedMemberTypes: string[];
```

- *Type:* `string`[]

---

##### `description`<sup>Required</sup> <a name="@cdktf/provider-azuread.DataAzureadServicePrincipalAppRoles.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* `string`

---

##### `displayName`<sup>Required</sup> <a name="@cdktf/provider-azuread.DataAzureadServicePrincipalAppRoles.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* `string`

---

##### `enabled`<sup>Required</sup> <a name="@cdktf/provider-azuread.DataAzureadServicePrincipalAppRoles.property.enabled"></a>

```typescript
public readonly enabled: any;
```

- *Type:* `any`

---

##### `id`<sup>Required</sup> <a name="@cdktf/provider-azuread.DataAzureadServicePrincipalAppRoles.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* `string`

---

##### `value`<sup>Required</sup> <a name="@cdktf/provider-azuread.DataAzureadServicePrincipalAppRoles.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* `string`

---


### DataAzureadServicePrincipalFeatures <a name="@cdktf/provider-azuread.DataAzureadServicePrincipalFeatures"></a>

#### Initializers <a name="@cdktf/provider-azuread.DataAzureadServicePrincipalFeatures.Initializer"></a>

```typescript
import { DataAzureadServicePrincipalFeatures } from '@cdktf/provider-azuread'

new DataAzureadServicePrincipalFeatures(terraformResource: ITerraformResource, terraformAttribute: string, complexComputedListIndex: string)
```

##### `terraformResource`<sup>Required</sup> <a name="@cdktf/provider-azuread.DataAzureadServicePrincipalFeatures.parameter.terraformResource"></a>

- *Type:* [`cdktf.ITerraformResource`](#cdktf.ITerraformResource)

---

##### `terraformAttribute`<sup>Required</sup> <a name="@cdktf/provider-azuread.DataAzureadServicePrincipalFeatures.parameter.terraformAttribute"></a>

- *Type:* `string`

---

##### `complexComputedListIndex`<sup>Required</sup> <a name="@cdktf/provider-azuread.DataAzureadServicePrincipalFeatures.parameter.complexComputedListIndex"></a>

- *Type:* `string`

---



#### Properties <a name="Properties"></a>

##### `customSingleSignOnApp`<sup>Required</sup> <a name="@cdktf/provider-azuread.DataAzureadServicePrincipalFeatures.property.customSingleSignOnApp"></a>

```typescript
public readonly customSingleSignOnApp: any;
```

- *Type:* `any`

---

##### `enterpriseApplication`<sup>Required</sup> <a name="@cdktf/provider-azuread.DataAzureadServicePrincipalFeatures.property.enterpriseApplication"></a>

```typescript
public readonly enterpriseApplication: any;
```

- *Type:* `any`

---

##### `galleryApplication`<sup>Required</sup> <a name="@cdktf/provider-azuread.DataAzureadServicePrincipalFeatures.property.galleryApplication"></a>

```typescript
public readonly galleryApplication: any;
```

- *Type:* `any`

---

##### `visibleToUsers`<sup>Required</sup> <a name="@cdktf/provider-azuread.DataAzureadServicePrincipalFeatures.property.visibleToUsers"></a>

```typescript
public readonly visibleToUsers: any;
```

- *Type:* `any`

---


### DataAzureadServicePrincipalOauth2PermissionScopes <a name="@cdktf/provider-azuread.DataAzureadServicePrincipalOauth2PermissionScopes"></a>

#### Initializers <a name="@cdktf/provider-azuread.DataAzureadServicePrincipalOauth2PermissionScopes.Initializer"></a>

```typescript
import { DataAzureadServicePrincipalOauth2PermissionScopes } from '@cdktf/provider-azuread'

new DataAzureadServicePrincipalOauth2PermissionScopes(terraformResource: ITerraformResource, terraformAttribute: string, complexComputedListIndex: string)
```

##### `terraformResource`<sup>Required</sup> <a name="@cdktf/provider-azuread.DataAzureadServicePrincipalOauth2PermissionScopes.parameter.terraformResource"></a>

- *Type:* [`cdktf.ITerraformResource`](#cdktf.ITerraformResource)

---

##### `terraformAttribute`<sup>Required</sup> <a name="@cdktf/provider-azuread.DataAzureadServicePrincipalOauth2PermissionScopes.parameter.terraformAttribute"></a>

- *Type:* `string`

---

##### `complexComputedListIndex`<sup>Required</sup> <a name="@cdktf/provider-azuread.DataAzureadServicePrincipalOauth2PermissionScopes.parameter.complexComputedListIndex"></a>

- *Type:* `string`

---



#### Properties <a name="Properties"></a>

##### `adminConsentDescription`<sup>Required</sup> <a name="@cdktf/provider-azuread.DataAzureadServicePrincipalOauth2PermissionScopes.property.adminConsentDescription"></a>

```typescript
public readonly adminConsentDescription: string;
```

- *Type:* `string`

---

##### `adminConsentDisplayName`<sup>Required</sup> <a name="@cdktf/provider-azuread.DataAzureadServicePrincipalOauth2PermissionScopes.property.adminConsentDisplayName"></a>

```typescript
public readonly adminConsentDisplayName: string;
```

- *Type:* `string`

---

##### `enabled`<sup>Required</sup> <a name="@cdktf/provider-azuread.DataAzureadServicePrincipalOauth2PermissionScopes.property.enabled"></a>

```typescript
public readonly enabled: any;
```

- *Type:* `any`

---

##### `id`<sup>Required</sup> <a name="@cdktf/provider-azuread.DataAzureadServicePrincipalOauth2PermissionScopes.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* `string`

---

##### `type`<sup>Required</sup> <a name="@cdktf/provider-azuread.DataAzureadServicePrincipalOauth2PermissionScopes.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* `string`

---

##### `userConsentDescription`<sup>Required</sup> <a name="@cdktf/provider-azuread.DataAzureadServicePrincipalOauth2PermissionScopes.property.userConsentDescription"></a>

```typescript
public readonly userConsentDescription: string;
```

- *Type:* `string`

---

##### `userConsentDisplayName`<sup>Required</sup> <a name="@cdktf/provider-azuread.DataAzureadServicePrincipalOauth2PermissionScopes.property.userConsentDisplayName"></a>

```typescript
public readonly userConsentDisplayName: string;
```

- *Type:* `string`

---

##### `value`<sup>Required</sup> <a name="@cdktf/provider-azuread.DataAzureadServicePrincipalOauth2PermissionScopes.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* `string`

---


### DataAzureadServicePrincipalSamlSingleSignOn <a name="@cdktf/provider-azuread.DataAzureadServicePrincipalSamlSingleSignOn"></a>

#### Initializers <a name="@cdktf/provider-azuread.DataAzureadServicePrincipalSamlSingleSignOn.Initializer"></a>

```typescript
import { DataAzureadServicePrincipalSamlSingleSignOn } from '@cdktf/provider-azuread'

new DataAzureadServicePrincipalSamlSingleSignOn(terraformResource: ITerraformResource, terraformAttribute: string, complexComputedListIndex: string)
```

##### `terraformResource`<sup>Required</sup> <a name="@cdktf/provider-azuread.DataAzureadServicePrincipalSamlSingleSignOn.parameter.terraformResource"></a>

- *Type:* [`cdktf.ITerraformResource`](#cdktf.ITerraformResource)

---

##### `terraformAttribute`<sup>Required</sup> <a name="@cdktf/provider-azuread.DataAzureadServicePrincipalSamlSingleSignOn.parameter.terraformAttribute"></a>

- *Type:* `string`

---

##### `complexComputedListIndex`<sup>Required</sup> <a name="@cdktf/provider-azuread.DataAzureadServicePrincipalSamlSingleSignOn.parameter.complexComputedListIndex"></a>

- *Type:* `string`

---



#### Properties <a name="Properties"></a>

##### `relayState`<sup>Required</sup> <a name="@cdktf/provider-azuread.DataAzureadServicePrincipalSamlSingleSignOn.property.relayState"></a>

```typescript
public readonly relayState: string;
```

- *Type:* `string`

---


### DataAzureadServicePrincipalsServicePrincipals <a name="@cdktf/provider-azuread.DataAzureadServicePrincipalsServicePrincipals"></a>

#### Initializers <a name="@cdktf/provider-azuread.DataAzureadServicePrincipalsServicePrincipals.Initializer"></a>

```typescript
import { DataAzureadServicePrincipalsServicePrincipals } from '@cdktf/provider-azuread'

new DataAzureadServicePrincipalsServicePrincipals(terraformResource: ITerraformResource, terraformAttribute: string, complexComputedListIndex: string)
```

##### `terraformResource`<sup>Required</sup> <a name="@cdktf/provider-azuread.DataAzureadServicePrincipalsServicePrincipals.parameter.terraformResource"></a>

- *Type:* [`cdktf.ITerraformResource`](#cdktf.ITerraformResource)

---

##### `terraformAttribute`<sup>Required</sup> <a name="@cdktf/provider-azuread.DataAzureadServicePrincipalsServicePrincipals.parameter.terraformAttribute"></a>

- *Type:* `string`

---

##### `complexComputedListIndex`<sup>Required</sup> <a name="@cdktf/provider-azuread.DataAzureadServicePrincipalsServicePrincipals.parameter.complexComputedListIndex"></a>

- *Type:* `string`

---



#### Properties <a name="Properties"></a>

##### `accountEnabled`<sup>Required</sup> <a name="@cdktf/provider-azuread.DataAzureadServicePrincipalsServicePrincipals.property.accountEnabled"></a>

```typescript
public readonly accountEnabled: any;
```

- *Type:* `any`

---

##### `applicationId`<sup>Required</sup> <a name="@cdktf/provider-azuread.DataAzureadServicePrincipalsServicePrincipals.property.applicationId"></a>

```typescript
public readonly applicationId: string;
```

- *Type:* `string`

---

##### `applicationTenantId`<sup>Required</sup> <a name="@cdktf/provider-azuread.DataAzureadServicePrincipalsServicePrincipals.property.applicationTenantId"></a>

```typescript
public readonly applicationTenantId: string;
```

- *Type:* `string`

---

##### `appRoleAssignmentRequired`<sup>Required</sup> <a name="@cdktf/provider-azuread.DataAzureadServicePrincipalsServicePrincipals.property.appRoleAssignmentRequired"></a>

```typescript
public readonly appRoleAssignmentRequired: any;
```

- *Type:* `any`

---

##### `displayName`<sup>Required</sup> <a name="@cdktf/provider-azuread.DataAzureadServicePrincipalsServicePrincipals.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* `string`

---

##### `preferredSingleSignOnMode`<sup>Required</sup> <a name="@cdktf/provider-azuread.DataAzureadServicePrincipalsServicePrincipals.property.preferredSingleSignOnMode"></a>

```typescript
public readonly preferredSingleSignOnMode: string;
```

- *Type:* `string`

---

##### `samlMetadataUrl`<sup>Required</sup> <a name="@cdktf/provider-azuread.DataAzureadServicePrincipalsServicePrincipals.property.samlMetadataUrl"></a>

```typescript
public readonly samlMetadataUrl: string;
```

- *Type:* `string`

---

##### `servicePrincipalNames`<sup>Required</sup> <a name="@cdktf/provider-azuread.DataAzureadServicePrincipalsServicePrincipals.property.servicePrincipalNames"></a>

```typescript
public readonly servicePrincipalNames: string[];
```

- *Type:* `string`[]

---

##### `signInAudience`<sup>Required</sup> <a name="@cdktf/provider-azuread.DataAzureadServicePrincipalsServicePrincipals.property.signInAudience"></a>

```typescript
public readonly signInAudience: string;
```

- *Type:* `string`

---

##### `tags`<sup>Required</sup> <a name="@cdktf/provider-azuread.DataAzureadServicePrincipalsServicePrincipals.property.tags"></a>

```typescript
public readonly tags: string[];
```

- *Type:* `string`[]

---

##### `type`<sup>Required</sup> <a name="@cdktf/provider-azuread.DataAzureadServicePrincipalsServicePrincipals.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* `string`

---


### DataAzureadUsersUsers <a name="@cdktf/provider-azuread.DataAzureadUsersUsers"></a>

#### Initializers <a name="@cdktf/provider-azuread.DataAzureadUsersUsers.Initializer"></a>

```typescript
import { DataAzureadUsersUsers } from '@cdktf/provider-azuread'

new DataAzureadUsersUsers(terraformResource: ITerraformResource, terraformAttribute: string, complexComputedListIndex: string)
```

##### `terraformResource`<sup>Required</sup> <a name="@cdktf/provider-azuread.DataAzureadUsersUsers.parameter.terraformResource"></a>

- *Type:* [`cdktf.ITerraformResource`](#cdktf.ITerraformResource)

---

##### `terraformAttribute`<sup>Required</sup> <a name="@cdktf/provider-azuread.DataAzureadUsersUsers.parameter.terraformAttribute"></a>

- *Type:* `string`

---

##### `complexComputedListIndex`<sup>Required</sup> <a name="@cdktf/provider-azuread.DataAzureadUsersUsers.parameter.complexComputedListIndex"></a>

- *Type:* `string`

---



#### Properties <a name="Properties"></a>

##### `accountEnabled`<sup>Required</sup> <a name="@cdktf/provider-azuread.DataAzureadUsersUsers.property.accountEnabled"></a>

```typescript
public readonly accountEnabled: any;
```

- *Type:* `any`

---

##### `displayName`<sup>Required</sup> <a name="@cdktf/provider-azuread.DataAzureadUsersUsers.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* `string`

---

##### `mail`<sup>Required</sup> <a name="@cdktf/provider-azuread.DataAzureadUsersUsers.property.mail"></a>

```typescript
public readonly mail: string;
```

- *Type:* `string`

---

##### `mailNickname`<sup>Required</sup> <a name="@cdktf/provider-azuread.DataAzureadUsersUsers.property.mailNickname"></a>

```typescript
public readonly mailNickname: string;
```

- *Type:* `string`

---

##### `objectId`<sup>Required</sup> <a name="@cdktf/provider-azuread.DataAzureadUsersUsers.property.objectId"></a>

```typescript
public readonly objectId: string;
```

- *Type:* `string`

---

##### `onpremisesImmutableId`<sup>Required</sup> <a name="@cdktf/provider-azuread.DataAzureadUsersUsers.property.onpremisesImmutableId"></a>

```typescript
public readonly onpremisesImmutableId: string;
```

- *Type:* `string`

---

##### `onpremisesSamAccountName`<sup>Required</sup> <a name="@cdktf/provider-azuread.DataAzureadUsersUsers.property.onpremisesSamAccountName"></a>

```typescript
public readonly onpremisesSamAccountName: string;
```

- *Type:* `string`

---

##### `onpremisesUserPrincipalName`<sup>Required</sup> <a name="@cdktf/provider-azuread.DataAzureadUsersUsers.property.onpremisesUserPrincipalName"></a>

```typescript
public readonly onpremisesUserPrincipalName: string;
```

- *Type:* `string`

---

##### `usageLocation`<sup>Required</sup> <a name="@cdktf/provider-azuread.DataAzureadUsersUsers.property.usageLocation"></a>

```typescript
public readonly usageLocation: string;
```

- *Type:* `string`

---

##### `userPrincipalName`<sup>Required</sup> <a name="@cdktf/provider-azuread.DataAzureadUsersUsers.property.userPrincipalName"></a>

```typescript
public readonly userPrincipalName: string;
```

- *Type:* `string`

---


### ServicePrincipalAppRoles <a name="@cdktf/provider-azuread.ServicePrincipalAppRoles"></a>

#### Initializers <a name="@cdktf/provider-azuread.ServicePrincipalAppRoles.Initializer"></a>

```typescript
import { ServicePrincipalAppRoles } from '@cdktf/provider-azuread'

new ServicePrincipalAppRoles(terraformResource: ITerraformResource, terraformAttribute: string, complexComputedListIndex: string)
```

##### `terraformResource`<sup>Required</sup> <a name="@cdktf/provider-azuread.ServicePrincipalAppRoles.parameter.terraformResource"></a>

- *Type:* [`cdktf.ITerraformResource`](#cdktf.ITerraformResource)

---

##### `terraformAttribute`<sup>Required</sup> <a name="@cdktf/provider-azuread.ServicePrincipalAppRoles.parameter.terraformAttribute"></a>

- *Type:* `string`

---

##### `complexComputedListIndex`<sup>Required</sup> <a name="@cdktf/provider-azuread.ServicePrincipalAppRoles.parameter.complexComputedListIndex"></a>

- *Type:* `string`

---



#### Properties <a name="Properties"></a>

##### `allowedMemberTypes`<sup>Required</sup> <a name="@cdktf/provider-azuread.ServicePrincipalAppRoles.property.allowedMemberTypes"></a>

```typescript
public readonly allowedMemberTypes: string[];
```

- *Type:* `string`[]

---

##### `description`<sup>Required</sup> <a name="@cdktf/provider-azuread.ServicePrincipalAppRoles.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* `string`

---

##### `displayName`<sup>Required</sup> <a name="@cdktf/provider-azuread.ServicePrincipalAppRoles.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* `string`

---

##### `enabled`<sup>Required</sup> <a name="@cdktf/provider-azuread.ServicePrincipalAppRoles.property.enabled"></a>

```typescript
public readonly enabled: any;
```

- *Type:* `any`

---

##### `id`<sup>Required</sup> <a name="@cdktf/provider-azuread.ServicePrincipalAppRoles.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* `string`

---

##### `value`<sup>Required</sup> <a name="@cdktf/provider-azuread.ServicePrincipalAppRoles.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* `string`

---


### ServicePrincipalOauth2PermissionScopes <a name="@cdktf/provider-azuread.ServicePrincipalOauth2PermissionScopes"></a>

#### Initializers <a name="@cdktf/provider-azuread.ServicePrincipalOauth2PermissionScopes.Initializer"></a>

```typescript
import { ServicePrincipalOauth2PermissionScopes } from '@cdktf/provider-azuread'

new ServicePrincipalOauth2PermissionScopes(terraformResource: ITerraformResource, terraformAttribute: string, complexComputedListIndex: string)
```

##### `terraformResource`<sup>Required</sup> <a name="@cdktf/provider-azuread.ServicePrincipalOauth2PermissionScopes.parameter.terraformResource"></a>

- *Type:* [`cdktf.ITerraformResource`](#cdktf.ITerraformResource)

---

##### `terraformAttribute`<sup>Required</sup> <a name="@cdktf/provider-azuread.ServicePrincipalOauth2PermissionScopes.parameter.terraformAttribute"></a>

- *Type:* `string`

---

##### `complexComputedListIndex`<sup>Required</sup> <a name="@cdktf/provider-azuread.ServicePrincipalOauth2PermissionScopes.parameter.complexComputedListIndex"></a>

- *Type:* `string`

---



#### Properties <a name="Properties"></a>

##### `adminConsentDescription`<sup>Required</sup> <a name="@cdktf/provider-azuread.ServicePrincipalOauth2PermissionScopes.property.adminConsentDescription"></a>

```typescript
public readonly adminConsentDescription: string;
```

- *Type:* `string`

---

##### `adminConsentDisplayName`<sup>Required</sup> <a name="@cdktf/provider-azuread.ServicePrincipalOauth2PermissionScopes.property.adminConsentDisplayName"></a>

```typescript
public readonly adminConsentDisplayName: string;
```

- *Type:* `string`

---

##### `enabled`<sup>Required</sup> <a name="@cdktf/provider-azuread.ServicePrincipalOauth2PermissionScopes.property.enabled"></a>

```typescript
public readonly enabled: any;
```

- *Type:* `any`

---

##### `id`<sup>Required</sup> <a name="@cdktf/provider-azuread.ServicePrincipalOauth2PermissionScopes.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* `string`

---

##### `type`<sup>Required</sup> <a name="@cdktf/provider-azuread.ServicePrincipalOauth2PermissionScopes.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* `string`

---

##### `userConsentDescription`<sup>Required</sup> <a name="@cdktf/provider-azuread.ServicePrincipalOauth2PermissionScopes.property.userConsentDescription"></a>

```typescript
public readonly userConsentDescription: string;
```

- *Type:* `string`

---

##### `userConsentDisplayName`<sup>Required</sup> <a name="@cdktf/provider-azuread.ServicePrincipalOauth2PermissionScopes.property.userConsentDisplayName"></a>

```typescript
public readonly userConsentDisplayName: string;
```

- *Type:* `string`

---

##### `value`<sup>Required</sup> <a name="@cdktf/provider-azuread.ServicePrincipalOauth2PermissionScopes.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* `string`

---



