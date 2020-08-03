import { CommunityCategory } from "App/Pages/CommunityCategory";
import { CommunityCategoryList } from "App/Pages/CommunityCategoryList";
import { CommunityGallery } from "App/Pages/CommunityGallery";
import { CommunityHome } from "App/Pages/CommunityHome";
import { CommunityPost } from "App/Pages/CommunityPost";
import { CommunityProfile } from "App/Pages/CommunityProfile";
import { CommunitySchedule } from "App/Pages/CommunitySchedule";
import { Home } from "App/Pages/Home";
import { NotFound } from "App/Pages/NotFound";
import { PoliciesPrivacyPolicy } from "App/Pages/PoliciesPrivacyPolicy";
import { PoliciesTermsOfService } from "App/Pages/PoliciesTermsOfService";
import {
  COMMUNITY_CATEGORY,
  COMMUNITY_CATEGORY_LIST,
  COMMUNITY_GALLERY,
  COMMUNITY_HOME,
  COMMUNITY_POST,
  COMMUNITY_PROFILE,
  COMMUNITY_SCHEDULE,
  HOME,
  NOT_FOUND,
  POLICIES_PRIVACY_POLICY,
  POLICIES_TERMS_OF_SERVICE
} from "constants/routes";
import React from "react";
import { Redirect, Route, Switch } from "react-router";

export const Routes = () => (
  <Switch>
    <Route path={HOME} component={Home} exact />
    <Route path={COMMUNITY_HOME} component={CommunityHome} exact />
    <Route path={COMMUNITY_CATEGORY_LIST} component={CommunityCategoryList} exact />
    <Route path={COMMUNITY_CATEGORY} component={CommunityCategory} exact />
    <Route path={COMMUNITY_GALLERY} component={CommunityGallery} exact />
    <Route path={COMMUNITY_POST} component={CommunityPost} exact />
    <Route path={COMMUNITY_PROFILE} component={CommunityProfile} exact />
    <Route path={COMMUNITY_SCHEDULE} component={CommunitySchedule} exact />
    <Route path={POLICIES_TERMS_OF_SERVICE} component={PoliciesTermsOfService} exact />
    <Route path={POLICIES_PRIVACY_POLICY} component={PoliciesPrivacyPolicy} exact />
    <Route path={NOT_FOUND} component={NotFound} exact />
    <Redirect to={NOT_FOUND} />
  </Switch>
);
