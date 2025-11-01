import type { Schema, Struct } from '@strapi/strapi';

export interface InfoAbout extends Struct.ComponentSchema {
  collectionName: 'components_info_abouts';
  info: {
    displayName: 'about';
  };
  attributes: {
    content: Schema.Attribute.Blocks;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    title: Schema.Attribute.String;
  };
}

export interface ModelsTestimonials extends Struct.ComponentSchema {
  collectionName: 'components_models_testimonials';
  info: {
    displayName: 'testimonials';
  };
  attributes: {
    testimonials: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    title: Schema.Attribute.String;
  };
}

export interface UnderHeaderHero extends Struct.ComponentSchema {
  collectionName: 'components_under_header_heroes';
  info: {
    displayName: 'hero';
  };
  attributes: {
    backgroundImage: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    subtitle: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'info.about': InfoAbout;
      'models.testimonials': ModelsTestimonials;
      'under-header.hero': UnderHeaderHero;
    }
  }
}
