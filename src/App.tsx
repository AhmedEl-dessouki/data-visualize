/* eslint-disable spaced-comment */
/* eslint-disable @typescript-eslint/ban-ts-comment */
import React from "react";
import CSVReader from "react-csv-reader";
import Cytoscape from "cytoscape";
//@ts-ignore
import COSEBilkent from "cytoscape-cose-bilkent";
import popper from "cytoscape-popper";
import CytoscapeComponent from "react-cytoscapejs";
import "./app.css";

type T = Record<
  "data",
  {
    id?: string;
    label?: string;
    source?: string;
    target?: string;
  }
>[];

Cytoscape.use(COSEBilkent);
Cytoscape.use(popper);
const stylesheet = [
  // {
  //   selector: "node",
  //   style: {
  //     width: 10,
  //     height: 10,
  //     content: "data(points)",
  //     fontSize: "0.5em",
  //     //                    shape: 'vee'
  //   },
  // },
  // {
  //   selector: "edge",
  //   style: {
  //     "curve-style": "bezier",
  //     "target-arrow-shape": "triangle",
  //     width: 2,
  //     "line-color": "#ddd",
  //     "target-arrow-color": "#ddd",
  //   },
  // },
  // {
  //   selector: ":parent",
  //   style: {
  //     "background-opacity": 0.333,
  //   },
  // },
  // {
  //   selector: '[status = "Done"]',
  //   style: {
  //     backgroundColor: "#14892c",
  //   },
  // },
  // {
  //   selector: '[status = "To Do"]',
  //   style: {
  //     backgroundColor: "#4a6785",
  //   },
  // },
  // {
  //   selector: '[status = "In Progress"]',
  //   style: {
  //     backgroundColor: "#ffd351",
  //   },
  // },
  // {
  //   selector: '[type = "Story"]',
  //   style: {
  //     shape: "ellipse",
  //   },
  // },
  // {
  //   selector: '[type = "Epic"]',
  //   style: {
  //     shape: "rectangle",
  //   },
  // },
  // {
  //   selector: '[type = "Initiative"]',
  //   style: {
  //     shape: "diamond",
  //   },
  // },
  // {
  //   selector: "[distance = 0]",
  //   style: {
  //     width: 20,
  //     height: 20,
  //   },
  // },
  // {
  //   selector: "edge.not-path",
  //   style: {
  //     opacity: 0.1,
  //     "z-index": 0,
  //   },
  // },
  // {
  //   selector: "node.not-path",
  //   style: {
  //     opacity: 0.333,
  //     "z-index": 0,
  //   },
  // },
  // {
  //   selector: "edge.path",
  //   style: {
  //     opacity: 0.888,
  //     "z-index": 0,
  //     width: 4,
  //     "line-color": "#2196f3",
  //     "target-arrow-color": "#2196f3",
  //   },
  // },
  {
    selector: "edge",
    style: {
      "curve-style": "bezier",
      "target-arrow-shape": "triangle",
    },
  },
  {
    selector: "node",
    style: {
      content: "data(id)",
    },
  },
];
const ele = [
  {
    data: {
      id: "cleaned/promo_fusion",
      label: "cleaned/promo_fusion",
    },
  },
  {
    data: {
      id: "raw/promo_fusion_incremental",
      label: "raw/promo_fusion_incremental",
    },
  },
  {
    data: {
      id: "ontology/product_slim",
      label: "ontology/product_slim",
    },
  },
  {
    data: {
      source: "cleaned/promo_fusion",
      target: "raw/promo_fusion_incremental",
      id: "8312e0f0-0e72-4d77-8783-444351cdddc7",
    },
  },
  {
    data: {
      source: "cleaned/promo_fusion",
      target: "ontology/product_slim",
      id: "7c53530d-8d61-44f1-bf22-4f3afc9e2027",
    },
  },
  {
    data: {
      id: "scripts/prep_sample_pf",
      label: "scripts/prep_sample_pf",
    },
  },
  {
    data: {
      id: "scripts/prep_sample_fact",
      label: "scripts/prep_sample_fact",
    },
  },
  {
    data: {
      id: "cleaned/promo_fusion",
      label: "cleaned/promo_fusion",
    },
  },
  {
    data: {
      source: "scripts/prep_sample_pf",
      target: "scripts/prep_sample_fact",
      id: "745b2113-d961-418a-bab5-f817a350bae4",
    },
  },
  {
    data: {
      source: "scripts/prep_sample_pf",
      target: "cleaned/promo_fusion",
      id: "b9d38a25-1365-463f-9134-0f9331216ded",
    },
  },
  {
    data: {
      id: "integration/validate_promos",
      label: "integration/validate_promos",
    },
  },
  {
    data: {
      id: "integration/prep_promos",
      label: "integration/prep_promos",
    },
  },
  {
    data: {
      id: "promos/historical_assignments",
      label: "promos/historical_assignments",
    },
  },
  {
    data: {
      source: "integration/validate_promos",
      target: "integration/prep_promos",
      id: "ecd7b1ed-fa1c-4ee7-a068-818321ad742c",
    },
  },
  {
    data: {
      source: "integration/validate_promos",
      target: "promos/historical_assignments",
      id: "dfdb8b1f-ba70-4c42-8358-6cd790f82ea6",
    },
  },
  {
    data: {
      id: "integration/prep_forgotten_items_for_post",
      label: "integration/prep_forgotten_items_for_post",
    },
  },
  {
    data: {
      id: "/ontology/products/",
      label: "/ontology/products/",
    },
  },
  {
    data: {
      id: "/models/forgotten_items_model/",
      label: "/models/forgotten_items_model/",
    },
  },
  {
    data: {
      id: "/cleaned/weekly_state",
      label: "/cleaned/weekly_state",
    },
  },
  {
    data: {
      id: "/models/default_upsell_rec",
      label: "/models/default_upsell_rec",
    },
  },
  {
    data: {
      id: "/ontology/product_info/",
      label: "/ontology/product_info/",
    },
  },
  {
    data: {
      id: "/cleaned/pocs/",
      label: "/cleaned/pocs/",
    },
  },
  {
    data: {
      id: "/ontology/combo_poc_pid",
      label: "/ontology/combo_poc_pid",
    },
  },
  {
    data: {
      id: "/cleaned/out_of_stock_with_replacements",
      label: "/cleaned/out_of_stock_with_replacements",
    },
  },
  {
    data: {
      id: "/transforms/algo_promos",
      label: "/transforms/algo_promos",
    },
  },
  {
    data: {
      id: "/ontology/images",
      label: "/ontology/images",
    },
  },
  {
    data: {
      id: "/transforms/preferred_pid_per_poc/",
      label: "/transforms/preferred_pid_per_poc/",
    },
  },
  {
    data: {
      source: "integration/prep_forgotten_items_for_post",
      target: "/ontology/products/",
      id: "3f41ec01-5903-4a42-b4c3-c7ccf7cc5b22",
    },
  },
  {
    data: {
      source: "integration/prep_forgotten_items_for_post",
      target: "/models/forgotten_items_model/",
      id: "b7158bc0-1364-439a-a0f7-2264796e3209",
    },
  },
  {
    data: {
      source: "integration/prep_forgotten_items_for_post",
      target: "/cleaned/weekly_state",
      id: "b2949c97-4c38-4441-89e3-61f62961abe7",
    },
  },
  {
    data: {
      source: "integration/prep_forgotten_items_for_post",
      target: "/models/default_upsell_rec",
      id: "a8d0b36c-4746-4918-9f5b-aad8999af874",
    },
  },
  {
    data: {
      source: "integration/prep_forgotten_items_for_post",
      target: "/ontology/product_info/",
      id: "34b4a47c-963d-4857-8b48-c26dc54859b8",
    },
  },
  {
    data: {
      source: "integration/prep_forgotten_items_for_post",
      target: "/cleaned/pocs/",
      id: "4cf700a3-1086-4e3f-993f-0fb5206db369",
    },
  },
  {
    data: {
      source: "integration/prep_forgotten_items_for_post",
      target: "/ontology/combo_poc_pid",
      id: "c6f839d6-3fc3-4249-a06c-8d55a2891044",
    },
  },
  {
    data: {
      source: "integration/prep_forgotten_items_for_post",
      target: "/cleaned/out_of_stock_with_replacements",
      id: "f30d91cb-ee1d-461e-b4a4-9af41d73face",
    },
  },
  {
    data: {
      source: "integration/prep_forgotten_items_for_post",
      target: "/transforms/algo_promos",
      id: "cdb455a1-f1e7-40d3-96b6-6d4155d2e70a",
    },
  },
  {
    data: {
      source: "integration/prep_forgotten_items_for_post",
      target: "/ontology/images",
      id: "300a194d-6202-4438-b50c-1305223c42e3",
    },
  },
  {
    data: {
      source: "integration/prep_forgotten_items_for_post",
      target: "/transforms/preferred_pid_per_poc/",
      id: "f41f89e1-fc2e-436a-86cf-1c24b651ac48",
    },
  },
  {
    data: {
      id: "ontology/propensities",
      label: "ontology/propensities",
    },
  },
  {
    data: {
      id: "/cleaned/upsell_billing_input",
      label: "/cleaned/upsell_billing_input",
    },
  },
  {
    data: {
      source: "ontology/propensities",
      target: "/cleaned/upsell_billing_input",
      id: "3eb3bac4-a60e-405e-acbb-dd7913196e51",
    },
  },
  {
    data: {
      id: "models/promos/baseline_redemption_rates",
      label: "models/promos/baseline_redemption_rates",
    },
  },
  {
    data: {
      id: "/models/data_generation/promotions/dataset_poc_v1",
      label: "/models/data_generation/promotions/dataset_poc_v1",
    },
  },
  {
    data: {
      id: "/promos/pocs_enriched/",
      label: "/promos/pocs_enriched/",
    },
  },
  {
    data: {
      source: "models/promos/baseline_redemption_rates",
      target: "/models/data_generation/promotions/dataset_poc_v1",
      id: "59a90902-ae4b-4b20-8de8-6c055b95b310",
    },
  },
  {
    data: {
      source: "models/promos/baseline_redemption_rates",
      target: "/promos/pocs_enriched/",
      id: "edfed969-edce-4a37-bcc0-6dce5d96adff",
    },
  },
  {
    data: {
      id: "models/promos/discounted_investment",
      label: "models/promos/discounted_investment",
    },
  },
  {
    data: {
      id: "/models/data_generation/promotions/dataset_poc_v1",
      label: "/models/data_generation/promotions/dataset_poc_v1",
    },
  },
  {
    data: {
      id: "/models/data_generation/promotions/product_info_filled",
      label: "/models/data_generation/promotions/product_info_filled",
    },
  },
  {
    data: {
      id: "/promos/pocs_enriched/",
      label: "/promos/pocs_enriched/",
    },
  },
  {
    data: {
      source: "models/promos/discounted_investment",
      target: "/models/data_generation/promotions/dataset_poc_v1",
      id: "09eb5f6f-7b49-4eb2-97be-8ca70cbe96e7",
    },
  },
  {
    data: {
      source: "models/promos/discounted_investment",
      target: "/models/data_generation/promotions/product_info_filled",
      id: "cb0f1827-3e6b-439a-b818-a146d8280332",
    },
  },
  {
    data: {
      source: "models/promos/discounted_investment",
      target: "/promos/pocs_enriched/",
      id: "b3096304-6725-4745-9688-b6eb8fbd701f",
    },
  },
  {
    data: {
      id: "integration/prep_recs_for_cxc",
      label: "integration/prep_recs_for_cxc",
    },
  },
  {
    data: {
      id: "/integration/prep_recs_for_post/",
      label: "/integration/prep_recs_for_post/",
    },
  },
  {
    data: {
      id: "/ontology/product_info/",
      label: "/ontology/product_info/",
    },
  },
  {
    data: {
      id: "/ontology/products/",
      label: "/ontology/products/",
    },
  },
  {
    data: {
      source: "integration/prep_recs_for_cxc",
      target: "/integration/prep_recs_for_post/",
      id: "7908cbf6-cbf4-49d0-8c4e-cd4300e36ec7",
    },
  },
  {
    data: {
      source: "integration/prep_recs_for_cxc",
      target: "/ontology/product_info/",
      id: "55021640-6c29-49a9-9ffb-dffd2db605d0",
    },
  },
  {
    data: {
      source: "integration/prep_recs_for_cxc",
      target: "/ontology/products/",
      id: "21274f74-4f2e-425b-b6be-f116bdc72a72",
    },
  },
  {
    data: {
      id: "integration/prep_upsell_for_cxc",
      label: "integration/prep_upsell_for_cxc",
    },
  },
  {
    data: {
      id: "/integration/prep_upsell_for_post/",
      label: "/integration/prep_upsell_for_post/",
    },
  },
  {
    data: {
      source: "integration/prep_upsell_for_cxc",
      target: "/integration/prep_upsell_for_post/",
      id: "03c5c2ea-e0f1-4863-9017-0809d49a5ccf",
    },
  },
  {
    data: {
      id: "integration/prep_recs_for_zone",
      label: "integration/prep_recs_for_zone",
    },
  },
  {
    data: {
      id: "/ontology/products/",
      label: "/ontology/products/",
    },
  },
  {
    data: {
      id: "/cleaned/pocs/",
      label: "/cleaned/pocs/",
    },
  },
  {
    data: {
      source: "integration/prep_recs_for_zone",
      target: "/ontology/products/",
      id: "d8010cbf-33b4-4512-ad32-faf867bad983",
    },
  },
  {
    data: {
      source: "integration/prep_recs_for_zone",
      target: "/cleaned/pocs/",
      id: "14ebcb45-61db-44fa-9175-d63b0b746546",
    },
  },
  {
    data: {
      id: "integration/enriched_qo_recs",
      label: "integration/enriched_qo_recs",
    },
  },
  {
    data: {
      id: "ontology/products",
      label: "ontology/products",
    },
  },
  {
    data: {
      id: "models/recommender_model",
      label: "models/recommender_model",
    },
  },
  {
    data: {
      id: "models/quick_order_ranker",
      label: "models/quick_order_ranker",
    },
  },
  {
    data: {
      id: "models/upsell_model",
      label: "models/upsell_model",
    },
  },
  {
    data: {
      id: "models/default_rec",
      label: "models/default_rec",
    },
  },
  {
    data: {
      id: "ontology/product_info",
      label: "ontology/product_info",
    },
  },
  {
    data: {
      id: "cleaned/pocs",
      label: "cleaned/pocs",
    },
  },
  {
    data: {
      id: "ontology/combo_poc_pid",
      label: "ontology/combo_poc_pid",
    },
  },
  {
    data: {
      id: "cleaned/weekly_state",
      label: "cleaned/weekly_state",
    },
  },
  {
    data: {
      id: "cleaned/in_stock",
      label: "cleaned/in_stock",
    },
  },
  {
    data: {
      id: "cleaned/out_of_stock_with_replacements",
      label: "cleaned/out_of_stock_with_replacements",
    },
  },
  {
    data: {
      id: "transforms/business_rule_data",
      label: "transforms/business_rule_data",
    },
  },
  {
    data: {
      id: "transforms/order_completed_stats",
      label: "transforms/order_completed_stats",
    },
  },
  {
    data: {
      id: "transforms/largest_previous_order",
      label: "transforms/largest_previous_order",
    },
  },
  {
    data: {
      id: "transforms/algo_promos",
      label: "transforms/algo_promos",
    },
  },
  {
    data: {
      id: "transforms/product_category_volumes_per_poc",
      label: "transforms/product_category_volumes_per_poc",
    },
  },
  {
    data: {
      source: "integration/enriched_qo_recs",
      target: "ontology/products",
      id: "55428788-a1da-4c84-a244-c629e250a5b3",
    },
  },
  {
    data: {
      source: "integration/enriched_qo_recs",
      target: "models/recommender_model",
      id: "c45572c5-f6f9-4eeb-8f06-97abc8c40973",
    },
  },
  {
    data: {
      source: "integration/enriched_qo_recs",
      target: "models/quick_order_ranker",
      id: "b2963e70-c6d8-41be-878b-d026491c3442",
    },
  },
  {
    data: {
      source: "integration/enriched_qo_recs",
      target: "models/upsell_model",
      id: "6a488a64-ce2f-415f-8cd0-a8d7c516a364",
    },
  },
  {
    data: {
      source: "integration/enriched_qo_recs",
      target: "models/default_rec",
      id: "061ac75a-c5a7-4bf9-8edd-4ed570c29a14",
    },
  },
  {
    data: {
      source: "integration/enriched_qo_recs",
      target: "ontology/product_info",
      id: "494ce592-c68b-4d92-98fd-1ce56503648a",
    },
  },
  {
    data: {
      source: "integration/enriched_qo_recs",
      target: "cleaned/pocs",
      id: "10bbaa33-9ab4-4abf-a202-6b972e5d4037",
    },
  },
  {
    data: {
      source: "integration/enriched_qo_recs",
      target: "ontology/combo_poc_pid",
      id: "df787f0f-8697-4cda-8d7b-c3aa0d01c03d",
    },
  },
  {
    data: {
      source: "integration/enriched_qo_recs",
      target: "cleaned/weekly_state",
      id: "1c36a0f0-f925-4f79-8bfd-d001790327cb",
    },
  },
  {
    data: {
      source: "integration/enriched_qo_recs",
      target: "cleaned/in_stock",
      id: "5ec97ade-c2e1-46bc-a4e1-d03dd225855d",
    },
  },
  {
    data: {
      source: "integration/enriched_qo_recs",
      target: "cleaned/out_of_stock_with_replacements",
      id: "e4606ae2-1f4a-420f-95c2-95791cccfd64",
    },
  },
  {
    data: {
      source: "integration/enriched_qo_recs",
      target: "transforms/business_rule_data",
      id: "7f58d938-976a-4729-a2af-eb41714b26ce",
    },
  },
  {
    data: {
      source: "integration/enriched_qo_recs",
      target: "transforms/order_completed_stats",
      id: "d43762bc-d541-45ff-bdc1-0805ce11c258",
    },
  },
  {
    data: {
      source: "integration/enriched_qo_recs",
      target: "transforms/largest_previous_order",
      id: "9d6c7165-9723-4067-a38a-5c44808eedb2",
    },
  },
  {
    data: {
      source: "integration/enriched_qo_recs",
      target: "transforms/algo_promos",
      id: "ddc339a2-4c4b-4d70-8455-9706eb645de5",
    },
  },
  {
    data: {
      source: "integration/enriched_qo_recs",
      target: "transforms/product_category_volumes_per_poc",
      id: "c0c77477-88ee-4234-97f3-6845e3761e7d",
    },
  },
  {
    data: {
      id: "promos_v2/logs/final_allocation_counts",
      label: "promos_v2/logs/final_allocation_counts",
    },
  },
  {
    data: {
      id: "promos_v2/elligible_pocs/allocated_pocs",
      label: "promos_v2/elligible_pocs/allocated_pocs",
    },
  },
  {
    data: {
      source: "promos_v2/logs/final_allocation_counts",
      target: "promos_v2/elligible_pocs/allocated_pocs",
      id: "4cd1cfcd-cd8f-49fe-9d89-ed3ed2032bc0",
    },
  },
  {
    data: {
      id: "promos/recent_algo_promo_redemptions",
      label: "promos/recent_algo_promo_redemptions",
    },
  },
  {
    data: {
      id: "ontology/events/order_completed",
      label: "ontology/events/order_completed",
    },
  },
  {
    data: {
      id: "promos/historical_assignments",
      label: "promos/historical_assignments",
    },
  },
  {
    data: {
      source: "promos/recent_algo_promo_redemptions",
      target: "ontology/events/order_completed",
      id: "bd5c559a-7708-49b2-a241-1e9b8c35b21c",
    },
  },
  {
    data: {
      source: "promos/recent_algo_promo_redemptions",
      target: "promos/historical_assignments",
      id: "e987a3fc-f870-43cf-975e-9c018adf3e42",
    },
  },
  {
    data: {
      id: "promos/recent_algo_promo_spec_redemptions",
      label: "promos/recent_algo_promo_spec_redemptions",
    },
  },
  {
    data: {
      id: "ontology/events/order_completed",
      label: "ontology/events/order_completed",
    },
  },
  {
    data: {
      id: "promos/historical_assignments",
      label: "promos/historical_assignments",
    },
  },
  {
    data: {
      source: "promos/recent_algo_promo_spec_redemptions",
      target: "ontology/events/order_completed",
      id: "fc219ce1-cac6-4949-b824-ab093681ca08",
    },
  },
  {
    data: {
      source: "promos/recent_algo_promo_spec_redemptions",
      target: "promos/historical_assignments",
      id: "c78c50b0-b97d-4816-ab09-01617efb3c5d",
    },
  },
  {
    data: {
      id: "promos/posted_promo_specs",
      label: "promos/posted_promo_specs",
    },
  },
  {
    data: {
      id: "promos/historical_assignments",
      label: "promos/historical_assignments",
    },
  },
  {
    data: {
      source: "promos/posted_promo_specs",
      target: "promos/historical_assignments",
      id: "554fa291-3018-4d11-b343-046655944070",
    },
  },
  {
    data: {
      id: "integration/prep_recs_for_post",
      label: "integration/prep_recs_for_post",
    },
  },
  {
    data: {
      id: "/integration/enriched_qo_recs/",
      label: "/integration/enriched_qo_recs/",
    },
  },
  {
    data: {
      id: "/ontology/images",
      label: "/ontology/images",
    },
  },
  {
    data: {
      id: "/transforms/preferred_pid_per_poc/",
      label: "/transforms/preferred_pid_per_poc/",
    },
  },
  {
    data: {
      source: "integration/prep_recs_for_post",
      target: "/integration/enriched_qo_recs/",
      id: "8ca84308-b709-4d37-ad9b-12f829133f16",
    },
  },
  {
    data: {
      source: "integration/prep_recs_for_post",
      target: "/ontology/images",
      id: "1b8f0b41-20d0-47f4-8130-1954e0f0c2ed",
    },
  },
  {
    data: {
      source: "integration/prep_recs_for_post",
      target: "/transforms/preferred_pid_per_poc/",
      id: "2c09038d-f86f-43d6-9686-fefcaa5f812a",
    },
  },
  {
    data: {
      id: "integration/prep_upsell_for_post",
      label: "integration/prep_upsell_for_post",
    },
  },
  {
    data: {
      id: "/ontology/products/",
      label: "/ontology/products/",
    },
  },
  {
    data: {
      id: "/models/upsell_model/",
      label: "/models/upsell_model/",
    },
  },
  {
    data: {
      id: "/cleaned/weekly_state",
      label: "/cleaned/weekly_state",
    },
  },
  {
    data: {
      id: "/models/default_upsell_rec",
      label: "/models/default_upsell_rec",
    },
  },
  {
    data: {
      id: "/ontology/product_info/",
      label: "/ontology/product_info/",
    },
  },
  {
    data: {
      id: "/cleaned/pocs/",
      label: "/cleaned/pocs/",
    },
  },
  {
    data: {
      id: "/ontology/combo_poc_pid",
      label: "/ontology/combo_poc_pid",
    },
  },
  {
    data: {
      id: "/cleaned/out_of_stock_with_replacements",
      label: "/cleaned/out_of_stock_with_replacements",
    },
  },
  {
    data: {
      id: "/transforms/algo_promos",
      label: "/transforms/algo_promos",
    },
  },
  {
    data: {
      id: "/ontology/images",
      label: "/ontology/images",
    },
  },
  {
    data: {
      id: "/transforms/preferred_pid_per_poc/",
      label: "/transforms/preferred_pid_per_poc/",
    },
  },
  {
    data: {
      source: "integration/prep_upsell_for_post",
      target: "/ontology/products/",
      id: "ecb98d7e-45ba-4c9d-8f7d-baea0bf6aba5",
    },
  },
  {
    data: {
      source: "integration/prep_upsell_for_post",
      target: "/models/upsell_model/",
      id: "18c84a07-ba10-45fc-8ede-a73a2ac83d15",
    },
  },
  {
    data: {
      source: "integration/prep_upsell_for_post",
      target: "/cleaned/weekly_state",
      id: "4502c69c-4668-473d-bd05-adcc3d84495e",
    },
  },
  {
    data: {
      source: "integration/prep_upsell_for_post",
      target: "/models/default_upsell_rec",
      id: "8a0fa426-18c6-408e-963d-f010c34b21ce",
    },
  },
  {
    data: {
      source: "integration/prep_upsell_for_post",
      target: "/ontology/product_info/",
      id: "fa957d35-c513-49c6-8740-3f6d221d2e55",
    },
  },
  {
    data: {
      source: "integration/prep_upsell_for_post",
      target: "/cleaned/pocs/",
      id: "e14b721b-d124-4254-a69c-d609abc54d02",
    },
  },
  {
    data: {
      source: "integration/prep_upsell_for_post",
      target: "/ontology/combo_poc_pid",
      id: "1adfa65e-5dfe-4b9a-8b92-d4ed2840c614",
    },
  },
  {
    data: {
      source: "integration/prep_upsell_for_post",
      target: "/cleaned/out_of_stock_with_replacements",
      id: "930c9433-7fff-46a5-baa7-88368e0e4cb1",
    },
  },
  {
    data: {
      source: "integration/prep_upsell_for_post",
      target: "/transforms/algo_promos",
      id: "dde4fe68-3261-45c4-a05f-86b5dbac42eb",
    },
  },
  {
    data: {
      source: "integration/prep_upsell_for_post",
      target: "/ontology/images",
      id: "dd0a4c9a-43ca-4110-bf5c-cf394ed8df82",
    },
  },
  {
    data: {
      source: "integration/prep_upsell_for_post",
      target: "/transforms/preferred_pid_per_poc/",
      id: "2887ab4a-4b92-4bed-b240-661ac1c0b27a",
    },
  },
  {
    data: {
      id: "promos_v2/model_outputs/collated_assignments",
      label: "promos_v2/model_outputs/collated_assignments",
    },
  },
  {
    data: {
      id: "promos_v2/model_outputs/assignments",
      label: "promos_v2/model_outputs/assignments",
    },
  },
  {
    data: {
      source: "promos_v2/model_outputs/collated_assignments",
      target: "promos_v2/model_outputs/assignments",
      id: "5cd8c2c5-5abd-4fcf-846b-b8e1eaec3f6f",
    },
  },
  {
    data: {
      id: "integration/prep_promos",
      label: "integration/prep_promos",
    },
  },
  {
    data: {
      id: "/promos_v2/model_outputs/collated_assignments/",
      label: "/promos_v2/model_outputs/collated_assignments/",
    },
  },
  {
    data: {
      id: "/promos/recent_algo_promo_redemptions",
      label: "/promos/recent_algo_promo_redemptions",
    },
  },
  {
    data: {
      id: "/promos/recent_algo_promo_spec_redemptions",
      label: "/promos/recent_algo_promo_spec_redemptions",
    },
  },
  {
    data: {
      id: "/ontology/preferred_poc",
      label: "/ontology/preferred_poc",
    },
  },
  {
    data: {
      id: "/promos/pocs_enriched/",
      label: "/promos/pocs_enriched/",
    },
  },
  {
    data: {
      id: "/promos/posted_promo_specs",
      label: "/promos/posted_promo_specs",
    },
  },
  {
    data: {
      source: "integration/prep_promos",
      target: "/promos_v2/model_outputs/collated_assignments/",
      id: "e61b781d-d5f0-43a2-8d6b-d3b0d11cdd9f",
    },
  },
  {
    data: {
      source: "integration/prep_promos",
      target: "/promos/recent_algo_promo_redemptions",
      id: "229acbc6-6972-42a6-9f54-f63f129fe7fc",
    },
  },
  {
    data: {
      source: "integration/prep_promos",
      target: "/promos/recent_algo_promo_spec_redemptions",
      id: "cd8424ff-d2c3-4305-a43d-94ce13a71e19",
    },
  },
  {
    data: {
      source: "integration/prep_promos",
      target: "/ontology/preferred_poc",
      id: "7d005856-9b2b-42b9-bc74-0216f1285d65",
    },
  },
  {
    data: {
      source: "integration/prep_promos",
      target: "/promos/pocs_enriched/",
      id: "7b68a3f0-cdb3-4ce8-bf5d-57fa7302205f",
    },
  },
  {
    data: {
      source: "integration/prep_promos",
      target: "/promos/posted_promo_specs",
      id: "8be415e6-1773-4d69-af70-d3447ed5e83f",
    },
  },
  {
    data: {
      id: "raw/promo_fusion_api_snapshot",
      label: "raw/promo_fusion_api_snapshot",
    },
  },
  {
    data: {
      id: "raw/promo_fusion_api",
      label: "raw/promo_fusion_api",
    },
  },
  {
    data: {
      source: "raw/promo_fusion_api_snapshot",
      target: "raw/promo_fusion_api",
      id: "c66ab9c1-ea02-4eef-8ce1-47643d094023",
    },
  },
  {
    data: {
      id: "cleaned/active_promos",
      label: "cleaned/active_promos",
    },
  },
  {
    data: {
      id: "cleaned/promo_fusion_api_inc",
      label: "cleaned/promo_fusion_api_inc",
    },
  },
  {
    data: {
      id: "ontology/product_slim",
      label: "ontology/product_slim",
    },
  },
  {
    data: {
      source: "cleaned/active_promos",
      target: "cleaned/promo_fusion_api_inc",
      id: "b7827160-f249-402f-8169-d7e8414b4da1",
    },
  },
  {
    data: {
      source: "cleaned/active_promos",
      target: "ontology/product_slim",
      id: "bd86bfd9-f399-41a4-a8fd-de21c105d312",
    },
  },
  {
    data: {
      id: "integration/prep_propensities_for_post",
      label: "integration/prep_propensities_for_post",
    },
  },
  {
    data: {
      id: "/ontology/propensities/",
      label: "/ontology/propensities/",
    },
  },
  {
    data: {
      id: "/cleaned/pocs/",
      label: "/cleaned/pocs/",
    },
  },
  {
    data: {
      source: "integration/prep_propensities_for_post",
      target: "/ontology/propensities/",
      id: "837106b8-1867-462f-8183-b579c3927faa",
    },
  },
  {
    data: {
      source: "integration/prep_propensities_for_post",
      target: "/cleaned/pocs/",
      id: "034a3064-b212-4bf6-ba6e-7ec047c429ba",
    },
  },
  {
    data: {
      id: "cleaned/offers",
      label: "cleaned/offers",
    },
  },
  {
    data: {
      id: "cleaned/catalog_api_inc",
      label: "cleaned/catalog_api_inc",
    },
  },
  {
    data: {
      source: "cleaned/offers",
      target: "cleaned/catalog_api_inc",
      id: "4f79fd38-4d7b-4ce5-a2b1-dd59ddd2dcb7",
    },
  },
  {
    data: {
      id: "cleaned/offered_products",
      label: "cleaned/offered_products",
    },
  },
  {
    data: {
      id: "cleaned/offers",
      label: "cleaned/offers",
    },
  },
  {
    data: {
      source: "cleaned/offered_products",
      target: "cleaned/offers",
      id: "f1ed941c-f166-45ef-ae5a-339c19a1bf45",
    },
  },
  {
    data: {
      id: "integration/prep_recs_for_galileo",
      label: "integration/prep_recs_for_galileo",
    },
  },
  {
    data: {
      id: "/models/upsell_model/",
      label: "/models/upsell_model/",
    },
  },
  {
    data: {
      id: "/transforms/business_rule_data",
      label: "/transforms/business_rule_data",
    },
  },
  {
    data: {
      id: "/cleaned/pocs/",
      label: "/cleaned/pocs/",
    },
  },
  {
    data: {
      id: "/ontology/products/",
      label: "/ontology/products/",
    },
  },
  {
    data: {
      source: "integration/prep_recs_for_galileo",
      target: "/models/upsell_model/",
      id: "96553b86-7780-4899-8e7c-4fbfc939984d",
    },
  },
  {
    data: {
      source: "integration/prep_recs_for_galileo",
      target: "/transforms/business_rule_data",
      id: "b9787e7f-070c-4192-b56d-31590a9287d1",
    },
  },
  {
    data: {
      source: "integration/prep_recs_for_galileo",
      target: "/cleaned/pocs/",
      id: "34405efc-3499-4027-8940-7d9053a5d878",
    },
  },
  {
    data: {
      source: "integration/prep_recs_for_galileo",
      target: "/ontology/products/",
      id: "bd30ac2d-f7b8-4afc-8def-49523fc0e588",
    },
  },
  {
    data: {
      id: "scripts/prep_sample_historical_assignments",
      label: "scripts/prep_sample_historical_assignments",
    },
  },
  {
    data: {
      id: "scripts/prep_sample_fact",
      label: "scripts/prep_sample_fact",
    },
  },
  {
    data: {
      id: "promos/historical_assignments",
      label: "promos/historical_assignments",
    },
  },
  {
    data: {
      source: "scripts/prep_sample_historical_assignments",
      target: "scripts/prep_sample_fact",
      id: "fbadb724-76c8-4435-91b8-c1c7e4ab0a1d",
    },
  },
  {
    data: {
      source: "scripts/prep_sample_historical_assignments",
      target: "promos/historical_assignments",
      id: "22291f90-6853-41f7-acd6-48fafcdfe616",
    },
  },
  {
    data: {
      id: "promos/promo_fusion_check_al_promos",
      label: "promos/promo_fusion_check_al_promos",
    },
  },
  {
    data: {
      id: "cleaned/promo_fusion_api_inc",
      label: "cleaned/promo_fusion_api_inc",
    },
  },
  {
    data: {
      id: "promos/historical_assignments",
      label: "promos/historical_assignments",
    },
  },
  {
    data: {
      id: "cleaned/offers",
      label: "cleaned/offers",
    },
  },
  {
    data: {
      id: "promos/valkyrie/al_promo_specs",
      label: "promos/valkyrie/al_promo_specs",
    },
  },
  {
    data: {
      source: "promos/promo_fusion_check_al_promos",
      target: "cleaned/promo_fusion_api_inc",
      id: "994e1b67-773f-46bd-b61c-05a8367107c3",
    },
  },
  {
    data: {
      source: "promos/promo_fusion_check_al_promos",
      target: "promos/historical_assignments",
      id: "46b23b70-e44f-4d12-b690-a98b911892d4",
    },
  },
  {
    data: {
      source: "promos/promo_fusion_check_al_promos",
      target: "cleaned/offers",
      id: "c504c55a-1d31-4c6a-9592-4ae7d45434c1",
    },
  },
  {
    data: {
      source: "promos/promo_fusion_check_al_promos",
      target: "promos/valkyrie/al_promo_specs",
      id: "d71b1c0b-611f-4e3b-81be-a5ffb3d84fa3",
    },
  },
  {
    data: {
      id: "promos/valkyrie/hovercard_stats_base",
      label: "promos/valkyrie/hovercard_stats_base",
    },
  },
  {
    data: {
      id: "promos/promo_fusion_check_al_promos",
      label: "promos/promo_fusion_check_al_promos",
    },
  },
  {
    data: {
      source: "promos/valkyrie/hovercard_stats_base",
      target: "promos/promo_fusion_check_al_promos",
      id: "b5f39d87-51e5-4514-af4a-15db36c3e9ff",
    },
  },
  {
    data: {
      id: "promos/valkyrie/hovercard_stats_pid_level",
      label: "promos/valkyrie/hovercard_stats_pid_level",
    },
  },
  {
    data: {
      id: "promos/valkyrie/hovercard_stats_base",
      label: "promos/valkyrie/hovercard_stats_base",
    },
  },
  {
    data: {
      source: "promos/valkyrie/hovercard_stats_pid_level",
      target: "promos/valkyrie/hovercard_stats_base",
      id: "68bff2c5-e49a-4d1b-823e-141506b08bb6",
    },
  },
  {
    data: {
      id: "promos/valkyrie/hovercard_stats_promo_level",
      label: "promos/valkyrie/hovercard_stats_promo_level",
    },
  },
  {
    data: {
      id: "promos/valkyrie/hovercard_stats_base",
      label: "promos/valkyrie/hovercard_stats_base",
    },
  },
  {
    data: {
      source: "promos/valkyrie/hovercard_stats_promo_level",
      target: "promos/valkyrie/hovercard_stats_base",
      id: "9b9a1a64-520e-42fa-a5b0-1c8dcdeb3a1f",
    },
  },
  {
    data: {
      id: "promos/valkyrie/global_scorecard_stats",
      label: "promos/valkyrie/global_scorecard_stats",
    },
  },
  {
    data: {
      id: "promos/valkyrie/al_promo_specs",
      label: "promos/valkyrie/al_promo_specs",
    },
  },
  {
    data: {
      id: "promos/promo_fusion_check_al_promos",
      label: "promos/promo_fusion_check_al_promos",
    },
  },
  {
    data: {
      source: "promos/valkyrie/global_scorecard_stats",
      target: "promos/valkyrie/al_promo_specs",
      id: "155ee5b2-8c21-412e-a971-67405391fbf6",
    },
  },
  {
    data: {
      source: "promos/valkyrie/global_scorecard_stats",
      target: "promos/promo_fusion_check_al_promos",
      id: "260951cd-e8de-4acf-b157-20d7fcb035e4",
    },
  },
  {
    data: {
      id: "promos/valkyrie/al_promo_specs_with_stats",
      label: "promos/valkyrie/al_promo_specs_with_stats",
    },
  },
  {
    data: {
      id: "/promos/valkyrie/al_promo_specs",
      label: "/promos/valkyrie/al_promo_specs",
    },
  },
  {
    data: {
      id: "/promos/valkyrie/hovercard_stats_pid_level",
      label: "/promos/valkyrie/hovercard_stats_pid_level",
    },
  },
  {
    data: {
      id: "/promos/valkyrie/hovercard_stats_promo_level",
      label: "/promos/valkyrie/hovercard_stats_promo_level",
    },
  },
  {
    data: {
      source: "promos/valkyrie/al_promo_specs_with_stats",
      target: "/promos/valkyrie/al_promo_specs",
      id: "d03dd62e-0016-4156-b120-250880b0a401",
    },
  },
  {
    data: {
      source: "promos/valkyrie/al_promo_specs_with_stats",
      target: "/promos/valkyrie/hovercard_stats_pid_level",
      id: "f76f68f8-5a11-4f41-badf-a67d79546765",
    },
  },
  {
    data: {
      source: "promos/valkyrie/al_promo_specs_with_stats",
      target: "/promos/valkyrie/hovercard_stats_promo_level",
      id: "1f0d8044-f0d1-4615-997c-65d7dcbb89de",
    },
  },
  {
    data: {
      id: "promos/valkyrie/poc_allocations",
      label: "promos/valkyrie/poc_allocations",
    },
  },
  {
    data: {
      id: "promos/promo_fusion_check_al_promos",
      label: "promos/promo_fusion_check_al_promos",
    },
  },
  {
    data: {
      id: "cleaned/pocs",
      label: "cleaned/pocs",
    },
  },
  {
    data: {
      source: "promos/valkyrie/poc_allocations",
      target: "promos/promo_fusion_check_al_promos",
      id: "525d5830-5420-4a9b-8270-ef18b98944f3",
    },
  },
  {
    data: {
      source: "promos/valkyrie/poc_allocations",
      target: "cleaned/pocs",
      id: "f145c976-856b-41c5-a801-d9f743bff2f1",
    },
  },
  {
    data: {
      id: "promos/historical_assignments",
      label: "promos/historical_assignments",
    },
  },
  {
    data: {
      id: "raw/promos/promo_specs",
      label: "raw/promos/promo_specs",
    },
  },
  {
    data: {
      id: "ontology/product_slim",
      label: "ontology/product_slim",
    },
  },
  {
    data: {
      id: "raw/promos/erp_deal_ids",
      label: "raw/promos/erp_deal_ids",
    },
  },
  {
    data: {
      id: "raw/promos/historical_assignments",
      label: "raw/promos/historical_assignments",
    },
  },
  {
    data: {
      id: "cleaned/pocs",
      label: "cleaned/pocs",
    },
  },
  {
    data: {
      source: "promos/historical_assignments",
      target: "raw/promos/promo_specs",
      id: "95efe9c6-0983-42ab-8a87-48372828f948",
    },
  },
  {
    data: {
      source: "promos/historical_assignments",
      target: "ontology/product_slim",
      id: "cd29ff61-ecf9-4580-9c67-4b21c1a6e502",
    },
  },
  {
    data: {
      source: "promos/historical_assignments",
      target: "raw/promos/erp_deal_ids",
      id: "74b7855e-4315-413c-9bd5-57d3a4263a63",
    },
  },
  {
    data: {
      source: "promos/historical_assignments",
      target: "raw/promos/historical_assignments",
      id: "fac9a4b2-cc05-44eb-93b8-93fc03a65b61",
    },
  },
  {
    data: {
      source: "promos/historical_assignments",
      target: "cleaned/pocs",
      id: "3902d7c4-e4fe-4992-bfd4-d7c2397191dd",
    },
  },
  {
    data: {
      id: "promos/historical_assignments_check",
      label: "promos/historical_assignments_check",
    },
  },
  {
    data: {
      id: "promos/historical_assignments",
      label: "promos/historical_assignments",
    },
  },
  {
    data: {
      source: "promos/historical_assignments_check",
      target: "promos/historical_assignments",
      id: "bd69f743-d108-4e1f-a669-69adc208c914",
    },
  },
  {
    data: {
      id: "promos/promo_fusion_check",
      label: "promos/promo_fusion_check",
    },
  },
  {
    data: {
      id: "cleaned/promo_fusion_api_inc",
      label: "cleaned/promo_fusion_api_inc",
    },
  },
  {
    data: {
      id: "promos/historical_assignments",
      label: "promos/historical_assignments",
    },
  },
  {
    data: {
      id: "cleaned/offers",
      label: "cleaned/offers",
    },
  },
  {
    data: {
      source: "promos/promo_fusion_check",
      target: "cleaned/promo_fusion_api_inc",
      id: "74e4e195-f7f9-4d12-924c-25422e2009c1",
    },
  },
  {
    data: {
      source: "promos/promo_fusion_check",
      target: "promos/historical_assignments",
      id: "5f459730-1bef-4484-85c3-2e3d6ead9b4d",
    },
  },
  {
    data: {
      source: "promos/promo_fusion_check",
      target: "cleaned/offers",
      id: "6c7e669f-0d51-47ad-b512-73a6e235b81a",
    },
  },
  {
    data: {
      id: "transforms/order_completed_stats",
      label: "transforms/order_completed_stats",
    },
  },
  {
    data: {
      id: "ontology/events/order_completed",
      label: "ontology/events/order_completed",
    },
  },
  {
    data: {
      id: "ontology/products",
      label: "ontology/products",
    },
  },
  {
    data: {
      source: "transforms/order_completed_stats",
      target: "ontology/events/order_completed",
      id: "2afb923e-3773-49bb-9a64-2949a3ec4f69",
    },
  },
  {
    data: {
      source: "transforms/order_completed_stats",
      target: "ontology/products",
      id: "d3889823-6561-49c2-b2ce-c504eedbc12c",
    },
  },
  {
    data: {
      id: "ontology/products",
      label: "ontology/products",
    },
  },
  {
    data: {
      id: "/cleaned/offered_products",
      label: "/cleaned/offered_products",
    },
  },
  {
    data: {
      id: "/raw/br_items_20",
      label: "/raw/br_items_20",
    },
  },
  {
    data: {
      id: 's3://None/"br_sku_map_overrides"',
      label: 's3://None/"br_sku_map_overrides"',
    },
  },
  {
    data: {
      source: "ontology/products",
      target: "/cleaned/offered_products",
      id: "f7ebd901-442e-4282-bfeb-f88e52b43f5e",
    },
  },
  {
    data: {
      source: "ontology/products",
      target: "/raw/br_items_20",
      id: "354b7140-2d4b-4a7d-b675-55f4dbe21a0d",
    },
  },
  {
    data: {
      source: "ontology/products",
      target: 's3://None/"br_sku_map_overrides"',
      id: "8250f5a7-7cf9-4d89-9f00-0908b1e6b9c7",
    },
  },
  {
    data: {
      id: "ontology/images",
      label: "ontology/images",
    },
  },
  {
    data: {
      id: "ontology/events/card_viewed",
      label: "ontology/events/card_viewed",
    },
  },
  {
    data: {
      source: "ontology/images",
      target: "ontology/events/card_viewed",
      id: "2d464766-d4ed-43e5-adb1-a0be8f9f297c",
    },
  },
  {
    data: {
      id: "cleaned/pocs",
      label: "cleaned/pocs",
    },
  },
  {
    data: {
      id: "/raw/br_accounts_20",
      label: "/raw/br_accounts_20",
    },
  },
  {
    data: {
      id: "adhoc/valkyrie/geocoded_allocated_pocs",
      label: "adhoc/valkyrie/geocoded_allocated_pocs",
    },
  },
  {
    data: {
      source: "cleaned/pocs",
      target: "/raw/br_accounts_20",
      id: "02cb38b7-1403-461b-89a0-15cb285145fc",
    },
  },
  {
    data: {
      source: "cleaned/pocs",
      target: "adhoc/valkyrie/geocoded_allocated_pocs",
      id: "22a6e7db-6102-4d01-9cb9-46aefcd130ad",
    },
  },
  {
    data: {
      id: "cleaned/holidays",
      label: "cleaned/holidays",
    },
  },
  {
    data: {
      id: "/raw/holidays",
      label: "/raw/holidays",
    },
  },
  {
    data: {
      source: "cleaned/holidays",
      target: "/raw/holidays",
      id: "03c7754f-77cf-4445-a7e5-745638713172",
    },
  },
  {
    data: {
      id: "integration/prep_products_for_antarctica",
      label: "integration/prep_products_for_antarctica",
    },
  },
  {
    data: {
      id: "/ontology/products/",
      label: "/ontology/products/",
    },
  },
  {
    data: {
      source: "integration/prep_products_for_antarctica",
      target: "/ontology/products/",
      id: "649998db-7965-4b9b-83ef-81bcdc7c55d4",
    },
  },
  {
    data: {
      id: "raw/fact",
      label: "raw/fact",
    },
  },
  {
    data: {
      id: "ontology/products",
      label: "ontology/products",
    },
  },
  {
    data: {
      id: "ontology/product_slim",
      label: "ontology/product_slim",
    },
  },
  {
    data: {
      source: "raw/fact",
      target: "ontology/products",
      id: "4800d66e-bbf6-47af-a70f-947dc3cdba29",
    },
  },
  {
    data: {
      source: "raw/fact",
      target: "ontology/product_slim",
      id: "b5365902-07df-4d43-a9cb-4597905a4f8b",
    },
  },
  {
    data: {
      id: "cleaned/quantity",
      label: "cleaned/quantity",
    },
  },
  {
    data: {
      id: "raw/fact",
      label: "raw/fact",
    },
  },
  {
    data: {
      id: "ontology/product_slim",
      label: "ontology/product_slim",
    },
  },
  {
    data: {
      id: "cleaned/algo_plans",
      label: "cleaned/algo_plans",
    },
  },
  {
    data: {
      source: "cleaned/quantity",
      target: "raw/fact",
      id: "ef74c4bd-c753-47c1-a63c-a08075a7bd98",
    },
  },
  {
    data: {
      source: "cleaned/quantity",
      target: "ontology/product_slim",
      id: "8f016e8a-4c53-49c7-9ddd-0bc980b77e80",
    },
  },
  {
    data: {
      source: "cleaned/quantity",
      target: "cleaned/algo_plans",
      id: "c0375812-5230-488e-919b-a5b90a0e0fbc",
    },
  },
  {
    data: {
      id: "raw/sales_promotions",
      label: "raw/sales_promotions",
    },
  },
  {
    data: {
      id: "cleaned/pocs_full",
      label: "cleaned/pocs_full",
    },
  },
  {
    data: {
      id: "ontology/product_slim",
      label: "ontology/product_slim",
    },
  },
  {
    data: {
      source: "raw/sales_promotions",
      target: "cleaned/pocs_full",
      id: "5bb66466-71b4-40b5-84a9-5540c796fe4a",
    },
  },
  {
    data: {
      source: "raw/sales_promotions",
      target: "ontology/product_slim",
      id: "41a84bb1-8c75-4859-978f-8d9fa0467691",
    },
  },
  {
    data: {
      id: "transforms/sku_level_volume_aggregates",
      label: "transforms/sku_level_volume_aggregates",
    },
  },
  {
    data: {
      id: "cleaned/quantity",
      label: "cleaned/quantity",
    },
  },
  {
    data: {
      source: "transforms/sku_level_volume_aggregates",
      target: "cleaned/quantity",
      id: "daa8e45e-eb49-4ccb-818a-f7f2533b0f15",
    },
  },
  {
    data: {
      id: "cleaned/vilc",
      label: "cleaned/vilc",
    },
  },
  {
    data: {
      id: "/raw/br_vil",
      label: "/raw/br_vil",
    },
  },
  {
    data: {
      id: "/ontology/product_slim/",
      label: "/ontology/product_slim/",
    },
  },
  {
    data: {
      id: "/transforms/sku_level_volume_aggregates",
      label: "/transforms/sku_level_volume_aggregates",
    },
  },
  {
    data: {
      source: "cleaned/vilc",
      target: "/raw/br_vil",
      id: "c08e62fc-d0db-4a26-9b5a-e79173675eec",
    },
  },
  {
    data: {
      source: "cleaned/vilc",
      target: "/ontology/product_slim/",
      id: "b052389d-9c15-461e-a130-d06a26ee7afc",
    },
  },
  {
    data: {
      source: "cleaned/vilc",
      target: "/transforms/sku_level_volume_aggregates",
      id: "8bb02252-ca1c-4286-b458-5fb763296969",
    },
  },
  {
    data: {
      id: "cleaned/vilc_geo",
      label: "cleaned/vilc_geo",
    },
  },
  {
    data: {
      id: "/raw/br_vilc_geo_2021.csv",
      label: "/raw/br_vilc_geo_2021.csv",
    },
  },
  {
    data: {
      id: "/ontology/product_slim/",
      label: "/ontology/product_slim/",
    },
  },
  {
    data: {
      id: "/transforms/sku_level_volume_aggregates",
      label: "/transforms/sku_level_volume_aggregates",
    },
  },
  {
    data: {
      source: "cleaned/vilc_geo",
      target: "/raw/br_vilc_geo_2021.csv",
      id: "b16de090-ef7f-450a-8794-c123bcc8c686",
    },
  },
  {
    data: {
      source: "cleaned/vilc_geo",
      target: "/ontology/product_slim/",
      id: "a7aa42b5-381b-448c-9a75-c8280684dfc4",
    },
  },
  {
    data: {
      source: "cleaned/vilc_geo",
      target: "/transforms/sku_level_volume_aggregates",
      id: "605d8167-e260-4ddf-bfc6-ead185350682",
    },
  },
  {
    data: {
      id: "cleaned/quantity_weekly",
      label: "cleaned/quantity_weekly",
    },
  },
  {
    data: {
      id: "cleaned/quantity",
      label: "cleaned/quantity",
    },
  },
  {
    data: {
      source: "cleaned/quantity_weekly",
      target: "cleaned/quantity",
      id: "5b0e5903-1f48-4b4b-abba-e1a04e3a251d",
    },
  },
  {
    data: {
      id: "cleaned/weekly_state",
      label: "cleaned/weekly_state",
    },
  },
  {
    data: {
      id: "cleaned/quantity_weekly",
      label: "cleaned/quantity_weekly",
    },
  },
  {
    data: {
      id: "ontology/products",
      label: "ontology/products",
    },
  },
  {
    data: {
      id: "cleaned/pocs",
      label: "cleaned/pocs",
    },
  },
  {
    data: {
      id: "cleaned/holidays",
      label: "cleaned/holidays",
    },
  },
  {
    data: {
      id: "cleaned/micro_events",
      label: "cleaned/micro_events",
    },
  },
  {
    data: {
      id: "ontology/events/order_completed",
      label: "ontology/events/order_completed",
    },
  },
  {
    data: {
      source: "cleaned/weekly_state",
      target: "cleaned/quantity_weekly",
      id: "dc6bfbf5-78a6-45c5-9fe6-a0dbfcd978db",
    },
  },
  {
    data: {
      source: "cleaned/weekly_state",
      target: "ontology/products",
      id: "f7e62aa3-b8f7-4ff8-8c47-9757e909e1e4",
    },
  },
  {
    data: {
      source: "cleaned/weekly_state",
      target: "cleaned/pocs",
      id: "228cfdf8-13ef-4d85-88ae-9184c164a820",
    },
  },
  {
    data: {
      source: "cleaned/weekly_state",
      target: "cleaned/holidays",
      id: "cb90e27a-dc99-4ac9-bbbc-4b0064b24712",
    },
  },
  {
    data: {
      source: "cleaned/weekly_state",
      target: "cleaned/micro_events",
      id: "482dcd2c-3245-48bb-81e0-498dc07a225b",
    },
  },
  {
    data: {
      source: "cleaned/weekly_state",
      target: "ontology/events/order_completed",
      id: "8f897dfd-c0b1-4980-9d4d-8b06c7d740b8",
    },
  },
  {
    data: {
      id: "promos_v2/transforms/poc_pid_stats",
      label: "promos_v2/transforms/poc_pid_stats",
    },
  },
  {
    data: {
      id: "cleaned/quantity",
      label: "cleaned/quantity",
    },
  },
  {
    data: {
      source: "promos_v2/transforms/poc_pid_stats",
      target: "cleaned/quantity",
      id: "ee0eb752-c021-45a5-8248-5f79285bd7be",
    },
  },
  {
    data: {
      id: "cleaned/upsell_billing_input",
      label: "cleaned/upsell_billing_input",
    },
  },
  {
    data: {
      id: "cleaned/weekly_state",
      label: "cleaned/weekly_state",
    },
  },
  {
    data: {
      source: "cleaned/upsell_billing_input",
      target: "cleaned/weekly_state",
      id: "0f82a824-8007-4314-8308-ec73d0005b24",
    },
  },
  {
    data: {
      id: "promos/zbb_poc_lifecycles_tagged_v2",
      label: "promos/zbb_poc_lifecycles_tagged_v2",
    },
  },
  {
    data: {
      id: "/raw/promos/zbb_poc_lifecycle_2022",
      label: "/raw/promos/zbb_poc_lifecycle_2022",
    },
  },
  {
    data: {
      id: "/ontology/product_slim/",
      label: "/ontology/product_slim/",
    },
  },
  {
    data: {
      id: "/cleaned/pocs_full/",
      label: "/cleaned/pocs_full/",
    },
  },
  {
    data: {
      source: "promos/zbb_poc_lifecycles_tagged_v2",
      target: "/raw/promos/zbb_poc_lifecycle_2022",
      id: "6e0ad1dc-1a7b-4bf5-b921-18630e0c14a8",
    },
  },
  {
    data: {
      source: "promos/zbb_poc_lifecycles_tagged_v2",
      target: "/ontology/product_slim/",
      id: "133c13ed-a274-4b31-bc36-09430bf27f03",
    },
  },
  {
    data: {
      source: "promos/zbb_poc_lifecycles_tagged_v2",
      target: "/cleaned/pocs_full/",
      id: "68442612-763b-4148-b2fd-4d13b837f72e",
    },
  },
  {
    data: {
      id: "transforms/product_categories",
      label: "transforms/product_categories",
    },
  },
  {
    data: {
      id: "cleaned/weekly_state",
      label: "cleaned/weekly_state",
    },
  },
  {
    data: {
      id: "ontology/products",
      label: "ontology/products",
    },
  },
  {
    data: {
      source: "transforms/product_categories",
      target: "cleaned/weekly_state",
      id: "b55663cd-b68b-4243-83bc-8087125f1699",
    },
  },
  {
    data: {
      source: "transforms/product_categories",
      target: "ontology/products",
      id: "9748a5ab-8fc8-40d9-82c7-421559659a0a",
    },
  },
  {
    data: {
      id: "transforms/product_category_volumes_per_poc",
      label: "transforms/product_category_volumes_per_poc",
    },
  },
  {
    data: {
      id: "cleaned/weekly_state",
      label: "cleaned/weekly_state",
    },
  },
  {
    data: {
      id: "ontology/products",
      label: "ontology/products",
    },
  },
  {
    data: {
      source: "transforms/product_category_volumes_per_poc",
      target: "cleaned/weekly_state",
      id: "41928b84-d352-4bcd-b6cd-778325505a0e",
    },
  },
  {
    data: {
      source: "transforms/product_category_volumes_per_poc",
      target: "ontology/products",
      id: "76c70510-440b-4afb-a1cb-7e4313ea28ed",
    },
  },
  {
    data: {
      id: "ontology/product_info",
      label: "ontology/product_info",
    },
  },
  {
    data: {
      id: "cleaned/quantity",
      label: "cleaned/quantity",
    },
  },
  {
    data: {
      id: "cleaned/vilc",
      label: "cleaned/vilc",
    },
  },
  {
    data: {
      source: "ontology/product_info",
      target: "cleaned/quantity",
      id: "768ce98e-2a98-416c-aa60-750f7ea6892d",
    },
  },
  {
    data: {
      source: "ontology/product_info",
      target: "cleaned/vilc",
      id: "3bf33dc1-b1b1-419f-bbac-dd09265032bd",
    },
  },
  {
    data: {
      id: "transforms/last_purchase_date",
      label: "transforms/last_purchase_date",
    },
  },
  {
    data: {
      id: "cleaned/quantity",
      label: "cleaned/quantity",
    },
  },
  {
    data: {
      id: "ontology/events/order_completed",
      label: "ontology/events/order_completed",
    },
  },
  {
    data: {
      source: "transforms/last_purchase_date",
      target: "cleaned/quantity",
      id: "a195f007-5331-4fdb-8d31-f53ad188263f",
    },
  },
  {
    data: {
      source: "transforms/last_purchase_date",
      target: "ontology/events/order_completed",
      id: "3d58ce09-f726-476b-a22e-03f64e216f39",
    },
  },
  {
    data: {
      id: "transforms/preferred_pid_per_poc",
      label: "transforms/preferred_pid_per_poc",
    },
  },
  {
    data: {
      id: "cleaned/offers",
      label: "cleaned/offers",
    },
  },
  {
    data: {
      id: "ontology/product_slim",
      label: "ontology/product_slim",
    },
  },
  {
    data: {
      id: "ontology/events/order_completed",
      label: "ontology/events/order_completed",
    },
  },
  {
    data: {
      source: "transforms/preferred_pid_per_poc",
      target: "cleaned/offers",
      id: "4ec3ee36-9452-4d6f-bc3f-05a29acd3720",
    },
  },
  {
    data: {
      source: "transforms/preferred_pid_per_poc",
      target: "ontology/product_slim",
      id: "abd6407a-f8c4-4cb1-b1b8-6325569508a2",
    },
  },
  {
    data: {
      source: "transforms/preferred_pid_per_poc",
      target: "ontology/events/order_completed",
      id: "b12e9fd7-e2a4-4117-88a2-c0cb83df4f5d",
    },
  },
  {
    data: {
      id: "ontology/preferred_poc",
      label: "ontology/preferred_poc",
    },
  },
  {
    data: {
      id: "cleaned/quantity",
      label: "cleaned/quantity",
    },
  },
  {
    data: {
      id: "cleaned/pocs_full",
      label: "cleaned/pocs_full",
    },
  },
  {
    data: {
      source: "ontology/preferred_poc",
      target: "cleaned/quantity",
      id: "69439fbd-f9a2-4d68-8d84-c0a44d168449",
    },
  },
  {
    data: {
      source: "ontology/preferred_poc",
      target: "cleaned/pocs_full",
      id: "8d628db8-1023-4fa9-936c-aaf61892b876",
    },
  },
  {
    data: {
      id: "transforms/recent_weekly_quantity",
      label: "transforms/recent_weekly_quantity",
    },
  },
  {
    data: {
      id: "cleaned/weekly_state",
      label: "cleaned/weekly_state",
    },
  },
  {
    data: {
      source: "transforms/recent_weekly_quantity",
      target: "cleaned/weekly_state",
      id: "4dbd23b1-bb47-491b-b2ef-b4f6687e188f",
    },
  },
  {
    data: {
      id: "transforms/orders_with_history_attributes",
      label: "transforms/orders_with_history_attributes",
    },
  },
  {
    data: {
      id: "ontology/product_slim",
      label: "ontology/product_slim",
    },
  },
  {
    data: {
      id: "ontology/events/order_completed",
      label: "ontology/events/order_completed",
    },
  },
  {
    data: {
      id: "cleaned/quantity",
      label: "cleaned/quantity",
    },
  },
  {
    data: {
      id: "cleaned/offers",
      label: "cleaned/offers",
    },
  },
  {
    data: {
      source: "transforms/orders_with_history_attributes",
      target: "ontology/product_slim",
      id: "b3e5bb46-7c81-4f7c-9087-3775df85e925",
    },
  },
  {
    data: {
      source: "transforms/orders_with_history_attributes",
      target: "ontology/events/order_completed",
      id: "b8bb92f2-c675-4a73-b0b9-f4b8aed4a343",
    },
  },
  {
    data: {
      source: "transforms/orders_with_history_attributes",
      target: "cleaned/quantity",
      id: "0436021b-72af-471e-8a00-7cc4cac5fe57",
    },
  },
  {
    data: {
      source: "transforms/orders_with_history_attributes",
      target: "cleaned/offers",
      id: "730c2458-36c3-44be-affa-202325ca89cd",
    },
  },
  {
    data: {
      id: "transforms/recall_attribution_daily",
      label: "transforms/recall_attribution_daily",
    },
  },
  {
    data: {
      id: "/transforms/orders_with_history_attributes/",
      label: "/transforms/orders_with_history_attributes/",
    },
  },
  {
    data: {
      id: "/ontology/product_info/",
      label: "/ontology/product_info/",
    },
  },
  {
    data: {
      source: "transforms/recall_attribution_daily",
      target: "/transforms/orders_with_history_attributes/",
      id: "53044f44-fe2a-492d-a989-e57de66d4662",
    },
  },
  {
    data: {
      source: "transforms/recall_attribution_daily",
      target: "/ontology/product_info/",
      id: "2612de63-f1bc-4f9a-9215-c381d296d0b4",
    },
  },
  {
    data: {
      id: "promos/robust_zbb_lifecycles",
      label: "promos/robust_zbb_lifecycles",
    },
  },
  {
    data: {
      id: "promos/zbb_poc_lifecycles_tagged_v2",
      label: "promos/zbb_poc_lifecycles_tagged_v2",
    },
  },
  {
    data: {
      source: "promos/robust_zbb_lifecycles",
      target: "promos/zbb_poc_lifecycles_tagged_v2",
      id: "09e729ae-76f6-4ada-9b4a-0e36518e6855",
    },
  },
  {
    data: {
      id: "promos_v2/logs/robust_zbb_counts",
      label: "promos_v2/logs/robust_zbb_counts",
    },
  },
  {
    data: {
      id: "promos/robust_zbb_lifecycles",
      label: "promos/robust_zbb_lifecycles",
    },
  },
  {
    data: {
      source: "promos_v2/logs/robust_zbb_counts",
      target: "promos/robust_zbb_lifecycles",
      id: "9b65013c-df2a-433b-a848-6840c9ac2592",
    },
  },
  {
    data: {
      id: "transforms/latest_poc_purchases",
      label: "transforms/latest_poc_purchases",
    },
  },
  {
    data: {
      id: "cleaned/quantity",
      label: "cleaned/quantity",
    },
  },
  {
    data: {
      id: "ontology/events/order_completed",
      label: "ontology/events/order_completed",
    },
  },
  {
    data: {
      source: "transforms/latest_poc_purchases",
      target: "cleaned/quantity",
      id: "843a72dd-5455-4a3e-8565-53ce4445ea10",
    },
  },
  {
    data: {
      source: "transforms/latest_poc_purchases",
      target: "ontology/events/order_completed",
      id: "b2b0c476-5e72-4d18-9147-78475ad11f9f",
    },
  },
  {
    data: {
      id: "transforms/poc_sizes",
      label: "transforms/poc_sizes",
    },
  },
  {
    data: {
      id: "cleaned/quantity",
      label: "cleaned/quantity",
    },
  },
  {
    data: {
      id: "ontology/product_info",
      label: "ontology/product_info",
    },
  },
  {
    data: {
      source: "transforms/poc_sizes",
      target: "cleaned/quantity",
      id: "886d79e2-1258-48b8-abed-6e4b298f119f",
    },
  },
  {
    data: {
      source: "transforms/poc_sizes",
      target: "ontology/product_info",
      id: "b0c1d8e6-81e9-49f9-babd-2b700d6f6718",
    },
  },
  {
    data: {
      id: "promos/pocs_enriched",
      label: "promos/pocs_enriched",
    },
  },
  {
    data: {
      id: "/cleaned/pocs/",
      label: "/cleaned/pocs/",
    },
  },
  {
    data: {
      id: "/transforms/latest_poc_purchases/",
      label: "/transforms/latest_poc_purchases/",
    },
  },
  {
    data: {
      source: "promos/pocs_enriched",
      target: "/cleaned/pocs/",
      id: "e59d7761-5b55-4460-b3a6-239a2accf60c",
    },
  },
  {
    data: {
      source: "promos/pocs_enriched",
      target: "/transforms/latest_poc_purchases/",
      id: "07e9a51e-622e-4ec2-83c5-b258a54a6fab",
    },
  },
  {
    data: {
      id: "promos/products_enriched",
      label: "promos/products_enriched",
    },
  },
  {
    data: {
      id: "/ontology/product_info/",
      label: "/ontology/product_info/",
    },
  },
  {
    data: {
      id: "/ontology/products/",
      label: "/ontology/products/",
    },
  },
  {
    data: {
      id: "/ontology/product_slim/",
      label: "/ontology/product_slim/",
    },
  },
  {
    data: {
      id: "/transforms/sku_level_volume_aggregates",
      label: "/transforms/sku_level_volume_aggregates",
    },
  },
  {
    data: {
      source: "promos/products_enriched",
      target: "/ontology/product_info/",
      id: "4c5d6dc4-e8ad-4303-9b82-21388ce394b4",
    },
  },
  {
    data: {
      source: "promos/products_enriched",
      target: "/ontology/products/",
      id: "419ab3d8-6343-40dd-b536-143e51bf9e6a",
    },
  },
  {
    data: {
      source: "promos/products_enriched",
      target: "/ontology/product_slim/",
      id: "3584b287-c26f-47db-b5a5-a3c64d2f9c86",
    },
  },
  {
    data: {
      source: "promos/products_enriched",
      target: "/transforms/sku_level_volume_aggregates",
      id: "701cfccc-e1a4-4ab9-9e51-6527adf3928d",
    },
  },
  {
    data: {
      id: "promos/poc_product_combinations",
      label: "promos/poc_product_combinations",
    },
  },
  {
    data: {
      id: "cleaned/quantity",
      label: "cleaned/quantity",
    },
  },
  {
    data: {
      id: "promos/products_enriched",
      label: "promos/products_enriched",
    },
  },
  {
    data: {
      source: "promos/poc_product_combinations",
      target: "cleaned/quantity",
      id: "29e1765d-e2b6-493f-8f50-c2c5e6d10917",
    },
  },
  {
    data: {
      source: "promos/poc_product_combinations",
      target: "promos/products_enriched",
      id: "89b4f9e8-ba96-4045-8481-ecd36feacc47",
    },
  },
  {
    data: {
      id: "promos/orders_for_zbb",
      label: "promos/orders_for_zbb",
    },
  },
  {
    data: {
      id: "cleaned/quantity",
      label: "cleaned/quantity",
    },
  },
  {
    data: {
      source: "promos/orders_for_zbb",
      target: "cleaned/quantity",
      id: "ac5cd026-252d-4a64-9528-2e6ff683ddba",
    },
  },
  {
    data: {
      id: "promos_v2/logs/pre_zbb_elligible_poc_counts",
      label: "promos_v2/logs/pre_zbb_elligible_poc_counts",
    },
  },
  {
    data: {
      id: "promos_v2/elligible_pocs/promo_elligible_pocs_pre_zbb",
      label: "promos_v2/elligible_pocs/promo_elligible_pocs_pre_zbb",
    },
  },
  {
    data: {
      source: "promos_v2/logs/pre_zbb_elligible_poc_counts",
      target: "promos_v2/elligible_pocs/promo_elligible_pocs_pre_zbb",
      id: "52c74a02-3654-472e-87d2-b2bff895a9a6",
    },
  },
  {
    data: {
      id: "promos_v2/logs/post_zbb_elligible_poc_counts",
      label: "promos_v2/logs/post_zbb_elligible_poc_counts",
    },
  },
  {
    data: {
      id: "promos_v2/elligible_pocs/promo_elligible_pocs",
      label: "promos_v2/elligible_pocs/promo_elligible_pocs",
    },
  },
  {
    data: {
      source: "promos_v2/logs/post_zbb_elligible_poc_counts",
      target: "promos_v2/elligible_pocs/promo_elligible_pocs",
      id: "63df5f3b-5af6-421e-8f5b-99407f1411ab",
    },
  },
  {
    data: {
      id: "promos/orders_for_zbb_new_skus",
      label: "promos/orders_for_zbb_new_skus",
    },
  },
  {
    data: {
      id: "cleaned/quantity",
      label: "cleaned/quantity",
    },
  },
  {
    data: {
      source: "promos/orders_for_zbb_new_skus",
      target: "cleaned/quantity",
      id: "6308dbf3-a060-422d-bbb8-07c4d4f689dd",
    },
  },
  {
    data: {
      id: "promos/business_rules/product_labels_processed",
      label: "promos/business_rules/product_labels_processed",
    },
  },
  {
    data: {
      id: "adhoc/BR/product_labels",
      label: "adhoc/BR/product_labels",
    },
  },
  {
    data: {
      id: "ontology/products",
      label: "ontology/products",
    },
  },
  {
    data: {
      source: "promos/business_rules/product_labels_processed",
      target: "adhoc/BR/product_labels",
      id: "fabfde9c-c204-40b4-a082-352a8fa2b837",
    },
  },
  {
    data: {
      source: "promos/business_rules/product_labels_processed",
      target: "ontology/products",
      id: "358c276d-b9b4-4ae4-8593-fef7adc1d1b3",
    },
  },
  {
    data: {
      id: "promos/business_rules/poc_labels",
      label: "promos/business_rules/poc_labels",
    },
  },
  {
    data: {
      id: "promos/business_rules/product_labels_processed",
      label: "promos/business_rules/product_labels_processed",
    },
  },
  {
    data: {
      id: "cleaned/quantity",
      label: "cleaned/quantity",
    },
  },
  {
    data: {
      source: "promos/business_rules/poc_labels",
      target: "promos/business_rules/product_labels_processed",
      id: "62a35c82-3642-4505-8dfb-1f8cfdd6aa6c",
    },
  },
  {
    data: {
      source: "promos/business_rules/poc_labels",
      target: "cleaned/quantity",
      id: "a1f8f77b-517b-4b3d-9a99-e1483595508f",
    },
  },
  {
    data: {
      id: "models/data_generation/promotions/product_info_filled",
      label: "models/data_generation/promotions/product_info_filled",
    },
  },
  {
    data: {
      id: "cleaned/quantity",
      label: "cleaned/quantity",
    },
  },
  {
    data: {
      id: "ontology/product_info",
      label: "ontology/product_info",
    },
  },
  {
    data: {
      source: "models/data_generation/promotions/product_info_filled",
      target: "cleaned/quantity",
      id: "c889604d-2627-4661-b6dc-e94ce7165948",
    },
  },
  {
    data: {
      source: "models/data_generation/promotions/product_info_filled",
      target: "ontology/product_info",
      id: "82dbaeb4-63ce-47e9-8271-a444f5050275",
    },
  },
  {
    data: {
      id: "models/data_generation/promotions/poc_segment",
      label: "models/data_generation/promotions/poc_segment",
    },
  },
  {
    data: {
      id: "cleaned/quantity",
      label: "cleaned/quantity",
    },
  },
  {
    data: {
      id: "cleaned/pocs",
      label: "cleaned/pocs",
    },
  },
  {
    data: {
      source: "models/data_generation/promotions/poc_segment",
      target: "cleaned/quantity",
      id: "37585043-cecc-40b7-82f9-47d2e50c7e01",
    },
  },
  {
    data: {
      source: "models/data_generation/promotions/poc_segment",
      target: "cleaned/pocs",
      id: "a3edeb23-770c-4cb9-b216-6ad1a667e414",
    },
  },
  {
    data: {
      id: "promos_v2/logs/promo_experiment_allocation_stats",
      label: "promos_v2/logs/promo_experiment_allocation_stats",
    },
  },
  {
    data: {
      id: "promos_v2/elligible_pocs/promo_experiment_allocations",
      label: "promos_v2/elligible_pocs/promo_experiment_allocations",
    },
  },
  {
    data: {
      source: "promos_v2/logs/promo_experiment_allocation_stats",
      target: "promos_v2/elligible_pocs/promo_experiment_allocations",
      id: "71cd3593-d649-42c5-835a-2efaf475c6ca",
    },
  },
  {
    data: {
      id: "models/data_generation/promotions/dataset_segment_v1",
      label: "models/data_generation/promotions/dataset_segment_v1",
    },
  },
  {
    data: {
      id: "cleaned/quantity",
      label: "cleaned/quantity",
    },
  },
  {
    data: {
      id: "models/data_generation/promotions/poc_segment",
      label: "models/data_generation/promotions/poc_segment",
    },
  },
  {
    data: {
      id: "ontology/products",
      label: "ontology/products",
    },
  },
  {
    data: {
      id: "ontology/product_info",
      label: "ontology/product_info",
    },
  },
  {
    data: {
      source: "models/data_generation/promotions/dataset_segment_v1",
      target: "cleaned/quantity",
      id: "0d9e6c6c-0684-43f2-9a37-8dad9f4cbd3b",
    },
  },
  {
    data: {
      source: "models/data_generation/promotions/dataset_segment_v1",
      target: "models/data_generation/promotions/poc_segment",
      id: "ed06b49f-3ef3-4bf3-8b1f-a0cc933c7a84",
    },
  },
  {
    data: {
      source: "models/data_generation/promotions/dataset_segment_v1",
      target: "ontology/products",
      id: "effcaf5d-8c48-4210-8f3b-365b326b3667",
    },
  },
  {
    data: {
      source: "models/data_generation/promotions/dataset_segment_v1",
      target: "ontology/product_info",
      id: "280cf127-e2c5-4786-bcc2-ae6a4fca9997",
    },
  },
  {
    data: {
      id: "models/data_generation/promotions/dataset_order_v1",
      label: "models/data_generation/promotions/dataset_order_v1",
    },
  },
  {
    data: {
      id: "cleaned/quantity",
      label: "cleaned/quantity",
    },
  },
  {
    data: {
      id: "models/data_generation/promotions/poc_segment",
      label: "models/data_generation/promotions/poc_segment",
    },
  },
  {
    data: {
      id: "ontology/products",
      label: "ontology/products",
    },
  },
  {
    data: {
      id: "ontology/product_info",
      label: "ontology/product_info",
    },
  },
  {
    data: {
      source: "models/data_generation/promotions/dataset_order_v1",
      target: "cleaned/quantity",
      id: "8ffa7b35-0ae9-4169-a22a-e3865d63110d",
    },
  },
  {
    data: {
      source: "models/data_generation/promotions/dataset_order_v1",
      target: "models/data_generation/promotions/poc_segment",
      id: "34598612-d6c6-4a6b-b36f-a3ad5d728eee",
    },
  },
  {
    data: {
      source: "models/data_generation/promotions/dataset_order_v1",
      target: "ontology/products",
      id: "513c7939-0049-42b3-bceb-670c319a0009",
    },
  },
  {
    data: {
      source: "models/data_generation/promotions/dataset_order_v1",
      target: "ontology/product_info",
      id: "bd007ce2-4c96-4820-9fda-eac71a3bbb07",
    },
  },
  {
    data: {
      id: "models/data_generation/promotions/dataset_poc_v1",
      label: "models/data_generation/promotions/dataset_poc_v1",
    },
  },
  {
    data: {
      id: "cleaned/quantity",
      label: "cleaned/quantity",
    },
  },
  {
    data: {
      id: "models/data_generation/promotions/poc_segment",
      label: "models/data_generation/promotions/poc_segment",
    },
  },
  {
    data: {
      id: "ontology/products",
      label: "ontology/products",
    },
  },
  {
    data: {
      id: "ontology/product_info",
      label: "ontology/product_info",
    },
  },
  {
    data: {
      source: "models/data_generation/promotions/dataset_poc_v1",
      target: "cleaned/quantity",
      id: "7da4b875-db87-45cd-a659-d91352fd2dbb",
    },
  },
  {
    data: {
      source: "models/data_generation/promotions/dataset_poc_v1",
      target: "models/data_generation/promotions/poc_segment",
      id: "a6bf2882-b98e-4dc4-afd8-7ccaeba3617d",
    },
  },
  {
    data: {
      source: "models/data_generation/promotions/dataset_poc_v1",
      target: "ontology/products",
      id: "49c96774-d5db-46b5-9f8a-33163af98215",
    },
  },
  {
    data: {
      source: "models/data_generation/promotions/dataset_poc_v1",
      target: "ontology/product_info",
      id: "cfa6586b-6a8c-489c-8bdf-87456ec302e2",
    },
  },
  {
    data: {
      id: "models/data_generation/promotions/dataset_poc_v2",
      label: "models/data_generation/promotions/dataset_poc_v2",
    },
  },
  {
    data: {
      id: "models/data_generation/promotions/dataset_poc_v1",
      label: "models/data_generation/promotions/dataset_poc_v1",
    },
  },
  {
    data: {
      source: "models/data_generation/promotions/dataset_poc_v2",
      target: "models/data_generation/promotions/dataset_poc_v1",
      id: "db3cb202-c998-4963-939e-7a1f808d81f3",
    },
  },
  {
    data: {
      id: "models/data_generation/promotions/dataset_poc_v2_metadata",
      label: "models/data_generation/promotions/dataset_poc_v2_metadata",
    },
  },
  {
    data: {
      id: "models/data_generation/promotions/dataset_poc_v1",
      label: "models/data_generation/promotions/dataset_poc_v1",
    },
  },
  {
    data: {
      source: "models/data_generation/promotions/dataset_poc_v2_metadata",
      target: "models/data_generation/promotions/dataset_poc_v1",
      id: "37522c0b-a851-4ac9-acf7-5604c36746e3",
    },
  },
  {
    data: {
      id: "models/data_generation/promotions/dataset_poisson_redemption_v1",
      label: "models/data_generation/promotions/dataset_poisson_redemption_v1",
    },
  },
  {
    data: {
      id: "cleaned/quantity",
      label: "cleaned/quantity",
    },
  },
  {
    data: {
      id: "cleaned/pocs",
      label: "cleaned/pocs",
    },
  },
  {
    data: {
      id: "ontology/products",
      label: "ontology/products",
    },
  },
  {
    data: {
      source: "models/data_generation/promotions/dataset_poisson_redemption_v1",
      target: "cleaned/quantity",
      id: "327168c6-b064-4114-bc29-fce2c52838a0",
    },
  },
  {
    data: {
      source: "models/data_generation/promotions/dataset_poisson_redemption_v1",
      target: "cleaned/pocs",
      id: "327f912d-e22e-4d0d-bf11-a61636148c73",
    },
  },
  {
    data: {
      source: "models/data_generation/promotions/dataset_poisson_redemption_v1",
      target: "ontology/products",
      id: "18fe51ce-55f5-48f8-868f-90e42f3e9161",
    },
  },
  {
    data: {
      id: "models/data_generation/promotions/dataset_poisson_redemption_v1_metadata",
      label:
        "models/data_generation/promotions/dataset_poisson_redemption_v1_metadata",
    },
  },
  {
    data: {
      id: "cleaned/quantity",
      label: "cleaned/quantity",
    },
  },
  {
    data: {
      id: "cleaned/pocs",
      label: "cleaned/pocs",
    },
  },
  {
    data: {
      id: "ontology/products",
      label: "ontology/products",
    },
  },
  {
    data: {
      source:
        "models/data_generation/promotions/dataset_poisson_redemption_v1_metadata",
      target: "cleaned/quantity",
      id: "0f749531-f0c1-4ae1-967d-fab278855100",
    },
  },
  {
    data: {
      source:
        "models/data_generation/promotions/dataset_poisson_redemption_v1_metadata",
      target: "cleaned/pocs",
      id: "9c46d0a0-27b2-41a2-90ac-08aaa91d4ef6",
    },
  },
  {
    data: {
      source:
        "models/data_generation/promotions/dataset_poisson_redemption_v1_metadata",
      target: "ontology/products",
      id: "4f85fcf5-2063-4c6b-87f8-9ab3696c67c5",
    },
  },
  {
    data: {
      id: "models/data_generation/promotions/dataset_allocator_heuristic_metadata",
      label:
        "models/data_generation/promotions/dataset_allocator_heuristic_metadata",
    },
  },
  {
    data: {
      id: "cleaned/quantity",
      label: "cleaned/quantity",
    },
  },
  {
    data: {
      source:
        "models/data_generation/promotions/dataset_allocator_heuristic_metadata",
      target: "cleaned/quantity",
      id: "bfead7ae-358c-485e-9a87-169df144c5d5",
    },
  },
  {
    data: {
      id: "models/data_generation/promotions/tree_bandit_data_train",
      label: "models/data_generation/promotions/tree_bandit_data_train",
    },
  },
  {
    data: {
      id: "ontology/events/card_viewed",
      label: "ontology/events/card_viewed",
    },
  },
  {
    data: {
      id: "ontology/events/order_completed",
      label: "ontology/events/order_completed",
    },
  },
  {
    data: {
      id: "promos/historical_assignments",
      label: "promos/historical_assignments",
    },
  },
  {
    data: {
      id: "cleaned/quantity",
      label: "cleaned/quantity",
    },
  },
  {
    data: {
      id: "cleaned/featurized_poc_metadata",
      label: "cleaned/featurized_poc_metadata",
    },
  },
  {
    data: {
      id: "ontology/products",
      label: "ontology/products",
    },
  },
  {
    data: {
      source: "models/data_generation/promotions/tree_bandit_data_train",
      target: "ontology/events/card_viewed",
      id: "796f881e-5eb0-4849-bb8b-2b363ceb1e6e",
    },
  },
  {
    data: {
      source: "models/data_generation/promotions/tree_bandit_data_train",
      target: "ontology/events/order_completed",
      id: "40d45934-1888-4926-87c8-f335e379b6fc",
    },
  },
  {
    data: {
      source: "models/data_generation/promotions/tree_bandit_data_train",
      target: "promos/historical_assignments",
      id: "29aee3f6-ba0a-451d-92cc-16411c2d59bb",
    },
  },
  {
    data: {
      source: "models/data_generation/promotions/tree_bandit_data_train",
      target: "cleaned/quantity",
      id: "658d6f75-e899-425b-946b-99fc40c0cde9",
    },
  },
  {
    data: {
      source: "models/data_generation/promotions/tree_bandit_data_train",
      target: "cleaned/featurized_poc_metadata",
      id: "6ed21945-ecbd-49a1-a72b-b0473ae3ca3d",
    },
  },
  {
    data: {
      source: "models/data_generation/promotions/tree_bandit_data_train",
      target: "ontology/products",
      id: "9d56374e-5341-40b2-b20e-632ffe8d7617",
    },
  },
  {
    data: {
      id: "models/data_generation/promotions/tree_bandit_data_infer",
      label: "models/data_generation/promotions/tree_bandit_data_infer",
    },
  },
  {
    data: {
      id: "ontology/events/card_viewed",
      label: "ontology/events/card_viewed",
    },
  },
  {
    data: {
      id: "ontology/events/order_completed",
      label: "ontology/events/order_completed",
    },
  },
  {
    data: {
      id: "promos/historical_assignments",
      label: "promos/historical_assignments",
    },
  },
  {
    data: {
      id: "cleaned/quantity",
      label: "cleaned/quantity",
    },
  },
  {
    data: {
      id: "cleaned/featurized_poc_metadata",
      label: "cleaned/featurized_poc_metadata",
    },
  },
  {
    data: {
      id: "ontology/products",
      label: "ontology/products",
    },
  },
  {
    data: {
      source: "models/data_generation/promotions/tree_bandit_data_infer",
      target: "ontology/events/card_viewed",
      id: "a7f8b009-fb66-4f37-94a2-3ac4c15a83fe",
    },
  },
  {
    data: {
      source: "models/data_generation/promotions/tree_bandit_data_infer",
      target: "ontology/events/order_completed",
      id: "e28b2cc7-a8cb-4995-926d-7640f5eede6c",
    },
  },
  {
    data: {
      source: "models/data_generation/promotions/tree_bandit_data_infer",
      target: "promos/historical_assignments",
      id: "c749b542-10ba-418b-b99f-44b993c29f18",
    },
  },
  {
    data: {
      source: "models/data_generation/promotions/tree_bandit_data_infer",
      target: "cleaned/quantity",
      id: "cef69427-a7f2-4789-9e4f-92af1660f486",
    },
  },
  {
    data: {
      source: "models/data_generation/promotions/tree_bandit_data_infer",
      target: "cleaned/featurized_poc_metadata",
      id: "5dedc5cf-3740-4794-be1e-eaaeb0009d02",
    },
  },
  {
    data: {
      source: "models/data_generation/promotions/tree_bandit_data_infer",
      target: "ontology/products",
      id: "63b2e25b-2ba2-4cec-8dff-8287faabd59f",
    },
  },
  {
    data: {
      id: "models/data_generation/promotions/deal_assigned_views_and_orders",
      label: "models/data_generation/promotions/deal_assigned_views_and_orders",
    },
  },
  {
    data: {
      id: "promos/historical_assignments",
      label: "promos/historical_assignments",
    },
  },
  {
    data: {
      id: "ontology/events/deal_list_viewed",
      label: "ontology/events/deal_list_viewed",
    },
  },
  {
    data: {
      id: "ontology/events/card_viewed",
      label: "ontology/events/card_viewed",
    },
  },
  {
    data: {
      id: "ontology/events/product_list_viewed",
      label: "ontology/events/product_list_viewed",
    },
  },
  {
    data: {
      id: "ontology/events/order_completed",
      label: "ontology/events/order_completed",
    },
  },
  {
    data: {
      id: "cleaned/quantity",
      label: "cleaned/quantity",
    },
  },
  {
    data: {
      source:
        "models/data_generation/promotions/deal_assigned_views_and_orders",
      target: "promos/historical_assignments",
      id: "839c25db-4523-43a7-960d-07a12e06237e",
    },
  },
  {
    data: {
      source:
        "models/data_generation/promotions/deal_assigned_views_and_orders",
      target: "ontology/events/deal_list_viewed",
      id: "9eef671c-19e9-4e35-86ff-0829224215e9",
    },
  },
  {
    data: {
      source:
        "models/data_generation/promotions/deal_assigned_views_and_orders",
      target: "ontology/events/card_viewed",
      id: "986a5314-2625-4a4a-a07e-eb7198d3eed3",
    },
  },
  {
    data: {
      source:
        "models/data_generation/promotions/deal_assigned_views_and_orders",
      target: "ontology/events/product_list_viewed",
      id: "50c312f4-f9a6-4993-a4c7-d0cc6a87bd10",
    },
  },
  {
    data: {
      source:
        "models/data_generation/promotions/deal_assigned_views_and_orders",
      target: "ontology/events/order_completed",
      id: "d17cd2ac-f366-4bad-94f5-1ad581fa4577",
    },
  },
  {
    data: {
      source:
        "models/data_generation/promotions/deal_assigned_views_and_orders",
      target: "cleaned/quantity",
      id: "9d9d6c21-71cd-48bb-85bc-f9d4f5d53924",
    },
  },
  {
    data: {
      id: "transforms/max_cart_size",
      label: "transforms/max_cart_size",
    },
  },
  {
    data: {
      id: "cleaned/quantity",
      label: "cleaned/quantity",
    },
  },
  {
    data: {
      id: "ontology/events/order_completed",
      label: "ontology/events/order_completed",
    },
  },
  {
    data: {
      source: "transforms/max_cart_size",
      target: "cleaned/quantity",
      id: "d2f80354-1d60-4b2e-b91c-c3b821a2ac1a",
    },
  },
  {
    data: {
      source: "transforms/max_cart_size",
      target: "ontology/events/order_completed",
      id: "1b3eb6b3-c57c-4258-8f63-5f595154da4e",
    },
  },
  {
    data: {
      id: "transforms/weekly_state_qo",
      label: "transforms/weekly_state_qo",
    },
  },
  {
    data: {
      id: "ontology/products",
      label: "ontology/products",
    },
  },
  {
    data: {
      id: "cleaned/weekly_state",
      label: "cleaned/weekly_state",
    },
  },
  {
    data: {
      id: "transforms/last_purchase_date",
      label: "transforms/last_purchase_date",
    },
  },
  {
    data: {
      source: "transforms/weekly_state_qo",
      target: "ontology/products",
      id: "0e3c3b5b-ee6c-421e-a55b-b9d3bc67b94a",
    },
  },
  {
    data: {
      source: "transforms/weekly_state_qo",
      target: "cleaned/weekly_state",
      id: "a5b410f6-78df-4bc1-ba4d-3d12e8e893fe",
    },
  },
  {
    data: {
      source: "transforms/weekly_state_qo",
      target: "transforms/last_purchase_date",
      id: "54eba1f5-cbae-4335-b476-56fbdfdab09a",
    },
  },
  {
    data: {
      id: "models/data_generation/quick_order/ordered_high_pids",
      label: "models/data_generation/quick_order/ordered_high_pids",
    },
  },
  {
    data: {
      id: "ontology/events/order_completed",
      label: "ontology/events/order_completed",
    },
  },
  {
    data: {
      source: "models/data_generation/quick_order/ordered_high_pids",
      target: "ontology/events/order_completed",
      id: "1aed04df-0514-4f62-8df5-4079ea4d1eab",
    },
  },
  {
    data: {
      id: "models/data_generation/quick_order/aggregated_orders_sparse",
      label: "models/data_generation/quick_order/aggregated_orders_sparse",
    },
  },
  {
    data: {
      id: "ontology/events/order_completed",
      label: "ontology/events/order_completed",
    },
  },
  {
    data: {
      id: "models/data_generation/quick_order/ordered_high_pids",
      label: "models/data_generation/quick_order/ordered_high_pids",
    },
  },
  {
    data: {
      source: "models/data_generation/quick_order/aggregated_orders_sparse",
      target: "ontology/events/order_completed",
      id: "cf03d50e-8d2a-4a2b-b647-ca73b92d7cde",
    },
  },
  {
    data: {
      source: "models/data_generation/quick_order/aggregated_orders_sparse",
      target: "models/data_generation/quick_order/ordered_high_pids",
      id: "50c2bae3-81da-40ea-bac4-dd1dfa5df9ba",
    },
  },
  {
    data: {
      id: "cleaned/preprocessed_poc_metadata",
      label: "cleaned/preprocessed_poc_metadata",
    },
  },
  {
    data: {
      id: "cleaned/weekly_state",
      label: "cleaned/weekly_state",
    },
  },
  {
    data: {
      id: "ontology/products",
      label: "ontology/products",
    },
  },
  {
    data: {
      id: "ontology/events/order_completed",
      label: "ontology/events/order_completed",
    },
  },
  {
    data: {
      id: "cleaned/pocs",
      label: "cleaned/pocs",
    },
  },
  {
    data: {
      source: "cleaned/preprocessed_poc_metadata",
      target: "cleaned/weekly_state",
      id: "47b18669-59fb-49b6-b89a-1f5349d8a6fb",
    },
  },
  {
    data: {
      source: "cleaned/preprocessed_poc_metadata",
      target: "ontology/products",
      id: "67a0714e-cdf4-4cab-aaf7-a83dd7098281",
    },
  },
  {
    data: {
      source: "cleaned/preprocessed_poc_metadata",
      target: "ontology/events/order_completed",
      id: "bfa20617-036c-47b8-ba6b-fe8582dfd634",
    },
  },
  {
    data: {
      source: "cleaned/preprocessed_poc_metadata",
      target: "cleaned/pocs",
      id: "101f0cfa-f253-4d95-b4e4-664deede3d81",
    },
  },
  {
    data: {
      id: "cleaned/featurized_poc_metadata",
      label: "cleaned/featurized_poc_metadata",
    },
  },
  {
    data: {
      id: "cleaned/preprocessed_poc_metadata",
      label: "cleaned/preprocessed_poc_metadata",
    },
  },
  {
    data: {
      source: "cleaned/featurized_poc_metadata",
      target: "cleaned/preprocessed_poc_metadata",
      id: "75d2f98a-3588-4a5e-aadb-36e781cdaae6",
    },
  },
  {
    data: {
      id: "transforms/largest_previous_order",
      label: "transforms/largest_previous_order",
    },
  },
  {
    data: {
      id: "cleaned/quantity",
      label: "cleaned/quantity",
    },
  },
  {
    data: {
      id: "ontology/events/order_completed",
      label: "ontology/events/order_completed",
    },
  },
  {
    data: {
      source: "transforms/largest_previous_order",
      target: "cleaned/quantity",
      id: "cea5d23e-3836-433a-81b9-b105bd14fb71",
    },
  },
  {
    data: {
      source: "transforms/largest_previous_order",
      target: "ontology/events/order_completed",
      id: "ca5c1cfb-bf33-4047-8fc1-4626e3e48bf0",
    },
  },
  {
    data: {
      id: "models/data_generation/quick_order/data_train",
      label: "models/data_generation/quick_order/data_train",
    },
  },
  {
    data: {
      id: "models/data_generation/quick_order/aggregated_orders_sparse",
      label: "models/data_generation/quick_order/aggregated_orders_sparse",
    },
  },
  {
    data: {
      id: "cleaned/featurized_poc_metadata",
      label: "cleaned/featurized_poc_metadata",
    },
  },
  {
    data: {
      id: "cleaned/holidays",
      label: "cleaned/holidays",
    },
  },
  {
    data: {
      source: "models/data_generation/quick_order/data_train",
      target: "models/data_generation/quick_order/aggregated_orders_sparse",
      id: "3be39572-775d-4886-b198-c43cb2888765",
    },
  },
  {
    data: {
      source: "models/data_generation/quick_order/data_train",
      target: "cleaned/featurized_poc_metadata",
      id: "4b309298-3eba-4297-b692-934eb215bc7f",
    },
  },
  {
    data: {
      source: "models/data_generation/quick_order/data_train",
      target: "cleaned/holidays",
      id: "a37da6e2-fad6-48be-8bb4-07976abfd1f7",
    },
  },
  {
    data: {
      id: "models/data_generation/quick_order/data_infer",
      label: "models/data_generation/quick_order/data_infer",
    },
  },
  {
    data: {
      id: "models/data_generation/quick_order/aggregated_orders_sparse",
      label: "models/data_generation/quick_order/aggregated_orders_sparse",
    },
  },
  {
    data: {
      id: "cleaned/featurized_poc_metadata",
      label: "cleaned/featurized_poc_metadata",
    },
  },
  {
    data: {
      id: "cleaned/holidays",
      label: "cleaned/holidays",
    },
  },
  {
    data: {
      source: "models/data_generation/quick_order/data_infer",
      target: "models/data_generation/quick_order/aggregated_orders_sparse",
      id: "80c3d3ec-050c-49c0-aab8-f029ad71a831",
    },
  },
  {
    data: {
      source: "models/data_generation/quick_order/data_infer",
      target: "cleaned/featurized_poc_metadata",
      id: "d75b0bb7-5a7d-4360-a9a0-81dd8568a4b8",
    },
  },
  {
    data: {
      source: "models/data_generation/quick_order/data_infer",
      target: "cleaned/holidays",
      id: "04235f3f-fe64-4ab5-baae-0a9172959f94",
    },
  },
  {
    data: {
      id: "models/data_generation/promotions/deals_viewed_ordered",
      label: "models/data_generation/promotions/deals_viewed_ordered",
    },
  },
  {
    data: {
      id: "promos/historical_assignments",
      label: "promos/historical_assignments",
    },
  },
  {
    data: {
      id: "ontology/events/deal_list_viewed",
      label: "ontology/events/deal_list_viewed",
    },
  },
  {
    data: {
      id: "ontology/events/order_completed",
      label: "ontology/events/order_completed",
    },
  },
  {
    data: {
      source: "models/data_generation/promotions/deals_viewed_ordered",
      target: "promos/historical_assignments",
      id: "c3be7037-0e66-4166-8984-a61368592bd1",
    },
  },
  {
    data: {
      source: "models/data_generation/promotions/deals_viewed_ordered",
      target: "ontology/events/deal_list_viewed",
      id: "d475215e-60f3-4be6-ace9-8efd2d841e68",
    },
  },
  {
    data: {
      source: "models/data_generation/promotions/deals_viewed_ordered",
      target: "ontology/events/order_completed",
      id: "3ea75385-08f0-4fb5-9593-f6466b686d07",
    },
  },
  {
    data: {
      id: "ontology/events/card_viewed",
      label: "ontology/events/card_viewed",
    },
  },
  {
    data: {
      id: "ontology/product_slim",
      label: "ontology/product_slim",
    },
  },
  {
    data: {
      source: "ontology/events/card_viewed",
      target: "ontology/product_slim",
      id: "de4f1a10-1a1a-46cb-aa32-0e982ad76ea2",
    },
  },
  {
    data: {
      id: "ontology/events/order_completed",
      label: "ontology/events/order_completed",
    },
  },
  {
    data: {
      id: "ontology/product_slim",
      label: "ontology/product_slim",
    },
  },
  {
    data: {
      id: "ontology/product_info",
      label: "ontology/product_info",
    },
  },
  {
    data: {
      id: "cleaned/pocs",
      label: "cleaned/pocs",
    },
  },
  {
    data: {
      id: "cleaned/vilc_geo",
      label: "cleaned/vilc_geo",
    },
  },
  {
    data: {
      source: "ontology/events/order_completed",
      target: "ontology/product_slim",
      id: "300c491f-94b2-435f-9138-c4b5b5092415",
    },
  },
  {
    data: {
      source: "ontology/events/order_completed",
      target: "ontology/product_info",
      id: "0a31ff62-5c01-46f3-a853-84d98810472d",
    },
  },
  {
    data: {
      source: "ontology/events/order_completed",
      target: "cleaned/pocs",
      id: "adf81a22-cde2-4515-8fe5-27314d6ec6ca",
    },
  },
  {
    data: {
      source: "ontology/events/order_completed",
      target: "cleaned/vilc_geo",
      id: "e72cfd25-e04a-4862-b5d4-eea321cf7257",
    },
  },
  {
    data: {
      id: "ontology/events/product_added",
      label: "ontology/events/product_added",
    },
  },
  {
    data: {
      id: "ontology/product_slim",
      label: "ontology/product_slim",
    },
  },
  {
    data: {
      source: "ontology/events/product_added",
      target: "ontology/product_slim",
      id: "13c87c7e-5e54-4a33-b1f8-766f3918a62c",
    },
  },
  {
    data: {
      id: "ontology/events/product_added_last_n",
      label: "ontology/events/product_added_last_n",
    },
  },
  {
    data: {
      id: "ontology/events/product_added",
      label: "ontology/events/product_added",
    },
  },
  {
    data: {
      source: "ontology/events/product_added_last_n",
      target: "ontology/events/product_added",
      id: "babb0056-4692-45bd-99fe-c073f2ff3582",
    },
  },
  {
    data: {
      id: "ontology/events/product_added_upsell_last_n",
      label: "ontology/events/product_added_upsell_last_n",
    },
  },
  {
    data: {
      id: "ontology/events/product_added",
      label: "ontology/events/product_added",
    },
  },
  {
    data: {
      source: "ontology/events/product_added_upsell_last_n",
      target: "ontology/events/product_added",
      id: "4642e73c-d8a1-420d-9e2f-165548166bef",
    },
  },
  {
    data: {
      id: "ontology/events/product_added_with_deals",
      label: "ontology/events/product_added_with_deals",
    },
  },
  {
    data: {
      id: "ontology/product_slim",
      label: "ontology/product_slim",
    },
  },
  {
    data: {
      source: "ontology/events/product_added_with_deals",
      target: "ontology/product_slim",
      id: "0e067ac3-07dc-49dc-9b6b-b236a36dbe59",
    },
  },
  {
    data: {
      id: "ontology/events/card_viewed_last_n",
      label: "ontology/events/card_viewed_last_n",
    },
  },
  {
    data: {
      id: "ontology/events/card_viewed",
      label: "ontology/events/card_viewed",
    },
  },
  {
    data: {
      source: "ontology/events/card_viewed_last_n",
      target: "ontology/events/card_viewed",
      id: "7fa2888a-20c8-408a-8062-f7bcd277bfa3",
    },
  },
  {
    data: {
      id: "ontology/events/card_viewed_upsell_last_n",
      label: "ontology/events/card_viewed_upsell_last_n",
    },
  },
  {
    data: {
      id: "ontology/events/card_viewed",
      label: "ontology/events/card_viewed",
    },
  },
  {
    data: {
      source: "ontology/events/card_viewed_upsell_last_n",
      target: "ontology/events/card_viewed",
      id: "11cd8b55-6a92-4f78-900d-055347be3db6",
    },
  },
  {
    data: {
      id: "transforms/business_rule_data",
      label: "transforms/business_rule_data",
    },
  },
  {
    data: {
      id: "cleaned/weekly_state",
      label: "cleaned/weekly_state",
    },
  },
  {
    data: {
      source: "transforms/business_rule_data",
      target: "cleaned/weekly_state",
      id: "808e67a2-c86b-40e0-9aed-4c4f73a5f35e",
    },
  },
  {
    data: {
      id: "scripts/prep_sample_fact",
      label: "scripts/prep_sample_fact",
    },
  },
  {
    data: {
      id: "raw/fact",
      label: "raw/fact",
    },
  },
  {
    data: {
      source: "scripts/prep_sample_fact",
      target: "raw/fact",
      id: "7a2f7554-fae3-4606-a1c1-f0f764093afa",
    },
  },
  {
    data: {
      id: "scripts/prep_sample_pocs",
      label: "scripts/prep_sample_pocs",
    },
  },
  {
    data: {
      id: "scripts/prep_sample_fact",
      label: "scripts/prep_sample_fact",
    },
  },
  {
    data: {
      id: "cleaned/pocs",
      label: "cleaned/pocs",
    },
  },
  {
    data: {
      source: "scripts/prep_sample_pocs",
      target: "scripts/prep_sample_fact",
      id: "ed880e8e-9b8d-4e14-b01f-497b4a045d9f",
    },
  },
  {
    data: {
      source: "scripts/prep_sample_pocs",
      target: "cleaned/pocs",
      id: "1b8a147f-90b5-4537-86f7-cc78655bf317",
    },
  },
  {
    data: {
      id: "scripts/prep_sample_offers",
      label: "scripts/prep_sample_offers",
    },
  },
  {
    data: {
      id: "scripts/prep_sample_fact",
      label: "scripts/prep_sample_fact",
    },
  },
  {
    data: {
      id: "cleaned/offers",
      label: "cleaned/offers",
    },
  },
  {
    data: {
      source: "scripts/prep_sample_offers",
      target: "scripts/prep_sample_fact",
      id: "723f0b75-21ac-495c-8d7c-d1ff6fa90dd6",
    },
  },
  {
    data: {
      source: "scripts/prep_sample_offers",
      target: "cleaned/offers",
      id: "12664fc6-ee26-4cc1-b7a4-2c956c4fd5fd",
    },
  },
  {
    data: {
      id: "",
      label: "",
    },
  },
  {
    data: {
      id: "ddf3dc21-80ab-49e0-80e9-f3502eb51774",
    },
  },
  {
    data: {
      source: "",
      id: "44041c6e-1180-461a-a03e-4926c8991b01",
    },
  },
];

function App() {
  const [elements, setElements] = React.useState<T>([]);
  console.log(elements);
  return (
    <div className="App">
      <header className="App-header">
        <CSVReader
          onFileLoaded={(data, fileInfo, originalFile) => {
            console.log(data, fileInfo, originalFile);
            const some = data.reduce(
              (acc: Record<string, string[]>, item, i) =>
                i === 0
                  ? acc
                  : {
                      ...acc,
                      [item[0]]: [...(acc[item[0]] || []), item[1]],
                    },
              {} as Record<string, string[]>,
            );
            const someKeys = Object.keys(some);
            const x = someKeys.reduce(
              (acc: T, key) =>
                key.length === 0
                  ? acc
                  : [
                      ...acc,
                      {
                        data: {
                          id: key,
                          name: key,
                          grabbable: true,
                          position: {},
                          label: key,
                        },
                      },
                      ...some[key].map((node: string) => ({
                        data: {
                          id: node,
                          name: node,
                          grabbable: true,
                          position: {},
                          label: node,
                        },
                      })),
                      ...some[key].map((node: string) => ({
                        data: {
                          source: key,
                          target: node,
                        },
                      })),
                    ],
              [] as typeof ele,
            );
            console.log(x);
            setElements(x);
          }}
        />
        {elements.length > 0 && (
          <CytoscapeComponent
            elements={elements}
            // style={{ width: "600px", height: "600px", background: "white" }}
            stylesheet={stylesheet}
            layout={{ name: "cose-bilkent" }}
            style={{ height: "1000px", background: "white", width: "100%" }}
            pan={{ x: 100, y: 200 }}
          />
        )}
      </header>
    </div>
  );
}

export default App;
